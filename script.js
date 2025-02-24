/**
 * 
 * @typedef {object} TypeToDoItemParams
 * @property {number} id
 * @property {string} text
 * @property {boolean} complete
 */

/**
 * 
 * @param {TypeToDoItemParams} content 
 */


function ToDOitem  (content) {
    this.text = content.text
    this.id = content.id
    this.complete = content.complete

    this.setComplete = () => {
        this.complete = !this.complete
    }

    this.edit = (newValue) => {
        this.text = newValue
    }
}

/**
 * 
 * @param {string} formSelector 
 * @param {string} inputSelector 
 * @param {string} listSelector 
 */

const toListCreator = (formSelector, inputSelector, listSelector) => {

    const form = document.querySelector(formSelector)
    const input = document.querySelector(inputSelector)
    const listContainer = document.querySelector(listSelector)
    
    if (!form || !input || !listContainer) return

    const todoListArr = [];
    



 const render = () => {
    listContainer.innerHTML = ''; // Clear  list 
    todoListArr.forEach(todoListItem => {
        const todolistLine = document.createElement('div')
        todolistLine.classList.add('todo-list--item')

        const todoCheckBox = document.createElement('input')
        todoCheckBox.setAttribute('type', 'checkbox')
        todoCheckBox.classList.add('todo-list--item-check')
        todoCheckBox.checked = todoListItem.complete

        todoCheckBox.addEventListener('click', (event) => {
            event.preventDefault()
            todoListItem.setComplete()
            render()
        })

        const todoText = document.createElement('p')
        todoText.classList.add('todo-list--item-text')
        if (todoListItem.complete) {
            todoText.classList.add('todo-list--item-text__active')
        }
        todoText.innerText = todoListItem.text

        todoText.addEventListener('click', () => {
            todoListItem.setComplete()
            render()
        })

        todoText.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            const input = document.createElement('input')
            input.type = 'text'
            input.value = todoListItem.text
            input.classList.add('todo-list--item-edit')

            input.addEventListener('keydown', (event) => {
                if (event.altKey && event.key === 'Enter') {
                    todoListItem.edit(input.value)
                    render()
                }
            })

            todolistLine.replaceChild(input, todoText)
            input.focus()
        })

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.classList.add('todo-list--item-delete')
        deleteButton.addEventListener('click', () => {
            const index = todoListArr.indexOf(todoListItem)
            if (index > -1) {
                todoListArr.splice(index, 1)
                localStorage.setItem('todoList', JSON.stringify(todoListArr))
                render()
            }
        })

        todolistLine.append(todoCheckBox, todoText, deleteButton)
        listContainer.append(todolistLine)
    })
   }
   
   if (localStorage.getItem('todoList')) {
    const todoListStore = localStorage.getItem('todoList')
    /**
     * @type {TypeToDoItemParams[]}
     */
    const todoListStoreData = JSON.parse(todoListStore)

    todoListStoreData.forEach(item => {
     const todoListItem = new ToDOitem(item)
     todoListArr.push(todoListItem)
     
     })
     render()
 }

   const groupTodoItemById = todoListArr.reduce((acc, item) => {
       acc[item.id] = item;
       return acc;
   }, {});
   console.log(groupTodoItemById)


   const getId = () => {
       const id = Math.floor(Math.random() * 10000)
       if (Object.keys(groupTodoItemById).length >= 9999) return
       if (Object.keys(groupTodoItemById).includes(id)) {
           return getId()
       }
       return id
    }

    const todoCreate = (event) => {
        event.preventDefault()
        const text = input.value

        if (!text.length) return

        /** @type {TypeToDoItemParams} */

        const data = {
            complete: false,
            text,
            id: getId()
        }

        const todoItem = new ToDOitem(data)
        todoListArr.push(todoItem)
        const jsonTodoListArr = JSON.stringify(todoListArr)
        localStorage.setItem('todoList', jsonTodoListArr)
        render()
    }

    form.addEventListener('submit', todoCreate)
}

toListCreator ('.todo-form', '#todo-text', '.todo-list')