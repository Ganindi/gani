const fs = require('fs');

const tasksFilePath = 'tasks.json';

function loadTasks() {
    if (!fs.existsSync(tasksFilePath)) {
        return [];
    }
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
}

function saveTasks(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

function addTask(username, task) {
    const tasks = loadTasks();
    const existingTaskIndex = tasks.findIndex(t => t.username === username);
    if (existingTaskIndex === -1) {
        tasks.push({ username, task });
    } else {
        tasks[existingTaskIndex].task += ` ${task}\n`;
    }
    saveTasks(tasks);
}

function deleteTask(taskId) {
    const tasks = loadTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks(tasks);
}

module.exports = { addTask, deleteTask, loadTasks };