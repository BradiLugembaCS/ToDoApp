const input = document.getElementById("input");

const option = document.getElementById("priority")

function addTask() {
    const task = input.value
    const taskPriority = option.value

    console.log(priority)
    if(task.trim() === ""){
        return;
    }


    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task;
    taskItem.appendChild(taskText);
    const taskList = document.getElementById("task-list-" + taskPriority)
    taskList.appendChild(taskItem);


    input.value = "";

}