// Lógica de rastreamento de tarefas

const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("tasks");

function addTask() {
    const taskName = document.getElementById("task-name").value;
    const taskDeadline = document.getElementById("task-deadline").value;

    if (!taskName || !taskDeadline) {
        alert("Por favor, preencha o nome e a data da tarefa.");
        return;
    }

    const taskItem = document.createElement("li");
    const today = new Date();
    const deadline = new Date(taskDeadline);

    if (deadline < today) {
        taskItem.classList.add("task-overdue");
    } else if ((deadline - today) / (1000 * 60 * 60 * 24) <= 3) {
        taskItem.classList.add("task-soon");
    }

    taskItem.textContent = `${taskName} - ${taskDeadline}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", () => taskItem.remove());

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    document.getElementById("task-name").value = "";
    document.getElementById("task-deadline").value = "";
}

addTaskButton.addEventListener("click", addTask);
