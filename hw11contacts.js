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
        this.add({ id: Date.now(), name, email, address, phone });
        this.get();
    }

    get() {
        const contactsList = this.app.querySelector('#contactsList');
        contactsList.innerHTML = this.data.map(user => `
            <div class="contact">
                <p>${user.data.name}</p>
                <p>${user.data.email}</p>
                <p>${user.data.address}</p>
                <p>${user.data.phone}</p>
                <button onclick="app.onEdit(${user.data.id})">Edit</button>
                <button onclick="app.onRemove(${user.data.id})">Remove</button>
            </div>
        `).join('');
    }

    onEdit(id) {
        const user = this.data.find(user => user.data.id === id);
        if (user) {
            const newName = prompt("Enter new name", user.data.name);
            const newEmail = prompt("Enter new email", user.data.email);
            const newAddress = prompt("Enter new address", user.data.address);
            const newPhone = prompt("Enter new phone", user.data.phone);
            this.edit(id, { name: newName, email: newEmail, address: newAddress, phone: newPhone });
            this.get();
        }
    }

    onRemove(id) {
        this.remove(id);
        this.get();
    }
}

const app = new ContactsApp();