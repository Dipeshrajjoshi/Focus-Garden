let tasks = [];
let completedTasks = 0;

function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push({ text: taskText, completed: false });
  input.value = "";
  renderTasks();
}

function completeTask(index) {
  tasks[index].completed = true;
  completedTasks++;
  renderTasks();
  updatePlantImage();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  updatePlantImage();
}

function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task.text}
      <button onclick="completeTask(${index})">✅</button>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    if (task.completed) {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.5";
    }
    list.appendChild(li);
  });
}

function updatePlantImage() {
  const img = document.getElementById("plant-image");

  if (completedTasks >= 5) {
    img.src = "images/stage3.png";
  } else if (completedTasks >= 3) {
    img.src = "images/stage2.png";
  } else if (completedTasks >= 1) {
    img.src = "images/stage1.png";
  } else if (tasks.length > 5 && completedTasks === 0) {
    img.src = "images/wilted.png";
  } else {
    img.src = "images/stage1.png";
  }
}
