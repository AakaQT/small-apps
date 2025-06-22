//This is supposed to be named to-do-list.js but I forgot to do it at the beginning :(

const input = document.getElementById("task"); 
const button = document.getElementById("button");
const tasksContainer = document.querySelector(".tasks");
const listItem = document.querySelector(".list-item");

button.addEventListener("click", () => {
    const tasks = document.createElement("li");
    tasks.classList.add("list-item");
    tasks.innerHTML = input.value;
    const deleteTask = document.createElement("span");
    deleteTask.innerHTML = "X"
    deleteTask.classList.add("delete-button");
    tasks.appendChild(deleteTask);
    deleteTask.addEventListener("click", () => {
        tasks.remove();
    })
    tasks.addEventListener("click", () => {
        tasks.classList.toggle("checked");
    });
    tasksContainer.appendChild(tasks);
    input.value = "";
})

