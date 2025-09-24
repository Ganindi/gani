const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const taskItems = document.getElementById('task-items');
const newTaskInput = document.getElementById('new-task');
const addTaskForm = document.getElementById('add-task-form');

loginBtn.addEventListener('click', () => {
    // Implementasi login logic
    alert('Login logic will be implemented here');
});

registerBtn.addEventListener('click', () => {
    // Implementasi pendaftaran logic
    alert('Pendaftaran logic will be implemented here');
});

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = newTaskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskItems.appendChild(li);
        newTaskInput.value = '';
    }
});