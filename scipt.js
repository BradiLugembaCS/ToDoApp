const input = document.getElementById("input");
const taskList_P1 = document.getElementById("task-list_P1")
const taskList_P2 = document.getElementById("task-list_P2")
const taskList_P3 = document.getElementById("task-list_P3")
const option = document.getElementById("priority")

function addTask() {
    const task = input.value
    const priority = option.value

    console.log(priority)
    if(task.trim() === ""){
        return;
    }


    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task;
    taskItem.appendChild(taskText);

    if (priority === "1") {
        taskList_P1.appendChild(taskItem);
    }
    else if (priority === "2"){
        taskList_P2.appendChild(taskItem);
    }
    else{
        taskList_P3.appendChild(taskItem);
    }
    


    input.value = "";
    

}