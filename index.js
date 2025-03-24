const taskInput = document.querySelector('.task-input')
const taskBtn = document.querySelector('.add-btn')
const taskList = document.querySelector('.task-wrapper')

taskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim()
    if (!taskText) return
    addTask(taskText)
    taskInput.value = ''
})

const addTask = (taskText) => {
    const li = document.createElement('li')
    li.classList.add('task-list')
    li.innerHTML = `
        <p>${taskText}</p>
        <div class="options">
            <p class="done">Concluir</p>
            <p class="remove">Excluir</p>
        </div>
    `
    
    li.querySelector('.options').addEventListener('click', () => {
        console.log('asd')
        li.querySelector('p').classList.toggle('concluded')
    })

    li.querySelector('.remove').addEventListener('click', () => {
        taskList.removeChild(li)
        if (taskList.children.length === 0) {
          taskList.style.padding = '0'
     }
    })

    if (taskList.children.length === 0) {
         taskList.style.padding = '2.2cqh'
    }

    taskList.appendChild(li)
}