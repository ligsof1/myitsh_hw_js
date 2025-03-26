class User {
    constructor(contactData) {
        this.data = {
            id: contactData.id,
            name: contactData.name,
            email: contactData.email,
            address: contactData.address,
            phone: contactData.phone
        };
    }

    edit(updatedData) {
        this.data = { ...this.data, ...updatedData };
    }

    get() {
        return this.data;
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    add(contactData) {
        const newUser = new User(contactData);
        this.data.push(newUser);
    }

    edit(id, updatedData) {
        const user = this.data.find(user => user.data.id === id);
        if (user) {
            user.edit(updatedData);
        }
    }

    remove(id) {
        this.data = this.data.filter(user => user.data.id !== id);
    }

    get() {
        return this.data.map(user => user.get());
    }
}

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app = document.createElement('div');
        this.app.className = 'contacts';
        document.body.appendChild(this.app);
        this.renderInterface();

        this.loadFromStorage();
    }

    get storage() {
        const data = localStorage.getItem('contacts');
        return data ? JSON.parse(data) : [];
    }

    set storage(data) {
        localStorage.setItem('contacts', JSON.stringify(data));
        this.setStorageExpirationCookie(); 
    }

    setStorageExpirationCookie() {
        const date = new Date();
        date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000); 
        document.cookie = `storageExpiration=${date.toUTCString()}; path=/; expires=${date.toUTCString()}`;
    }


    checkStorageExpiration() {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        const expirationCookie = cookies.find(cookie => cookie.startsWith('storageExpiration='));

        if (expirationCookie) {
            const expirationDate = new Date(expirationCookie.split('=')[1]);
            if (new Date() > expirationDate) {
                localStorage.removeItem('contacts');
                document.cookie = 'storageExpiration=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            }
        }
    }


    loadFromStorage() {
        this.checkStorageExpiration(); 
        const storedData = this.storage;
        if (storedData.length > 0) {
            storedData.forEach(contact => this.add(contact));
            this.renderContacts();
        }
    }

 
    saveToStorage() {
        this.storage = this.get();
    }

    renderInterface() {
        this.app.innerHTML = `
            <form id="contactForm">
                <input type="text" id="name" placeholder="Name" required>
                <input type="email" id="email" placeholder="Email" required>
                <input type="text" id="address" placeholder="Address">
                <input type="tel" id="phone" placeholder="Phone">
                <button type="submit">Add Contact</button>
            </form>
            <div id="contactsList"></div>
        `;
        this.app.querySelector('#contactForm').addEventListener('submit', (e) => this.onAdd(e));
    }

    onAdd(event) {
        event.preventDefault();
        const name = this.app.querySelector('#name').value;
        const email = this.app.querySelector('#email').value;
        const address = this.app.querySelector('#address').value;
        const phone = this.app.querySelector('#phone').value;

        if (name && email) {
            this.add({ id: Date.now(), name, email, address, phone });
            this.saveToStorage(); 
            this.renderContacts();
            this.clearForm();
        } else {
            alert('Name and Email are required!');
        }
    }

    clearForm() {
        this.app.querySelector('#name').value = '';
        this.app.querySelector('#email').value = '';
        this.app.querySelector('#address').value = '';
        this.app.querySelector('#phone').value = '';
    }

    renderContacts() {
        const contactsList = this.app.querySelector('#contactsList');
        contactsList.innerHTML = this.data.map(user => `
            <div class="contact" data-id="${user.data.id}">
                <p>${user.data.name}</p>
                <p>${user.data.email}</p>
                <p>${user.data.address}</p>
                <p>${user.data.phone}</p>
                <button class="edit-btn">Edit</button>
                <button class="remove-btn">Remove</button>
            </div>
        `).join('');

        contactsList.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', () => this.onEdit(button.closest('.contact').dataset.id));
        });

        contactsList.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', () => this.onRemove(button.closest('.contact').dataset.id));
        });
    }

    onEdit(id) {
        const user = this.data.find(user => user.data.id === Number(id));
        if (user) {
            const newName = prompt("Enter new name", user.data.name);
            const newEmail = prompt("Enter new email", user.data.email);
            const newAddress = prompt("Enter new address", user.data.address);
            const newPhone = prompt("Enter new phone", user.data.phone);

            if (newName !== null && newEmail !== null) {
                this.edit(user.data.id, { name: newName, email: newEmail, address: newAddress, phone: newPhone });
                this.saveToStorage(); 
                this.renderContacts();
            }
        }
    }

    onRemove(id) {
        this.remove(Number(id));
        this.saveToStorage(); 
        this.renderContacts();
    }
}

const app = new ContactsApp();