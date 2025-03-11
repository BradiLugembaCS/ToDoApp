const input = document.getElementById("input");
const taskList = document.getElementById("task-list")

function addTask() {
    const task = input.value

    if(task.trim() === ""){
        return;
    }

    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task;
    taskItem.appendChild(taskText);

    taskList.appendChild(taskItem);
    input.value = "";

}