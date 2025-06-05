let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim()) {
        tasks.push(input.value);
        input.value = "";
        saveTask();
    }
}

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => { tasks.splice(index, 1); saveTask(); }; // delete the item clicked
        list.appendChild(li);
    });
}

renderTasks();