const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskName = taskInput.value.trim();
  if (taskName === "") return;

  const li = document.createElement("li");
  li.className = "task";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskName;

  const timerDisplay = document.createElement("span");
  timerDisplay.textContent = "00:30"; // 30 sec timer

  const startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  startBtn.className = "timer-btn";

  let timer = null;
  let timeLeft = 30;

  startBtn.addEventListener("click", () => {
    if (timer) return; // avoid multiple intervals
    startBtn.textContent = "Running...";
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
      } else {
        clearInterval(timer);
        startBtn.textContent = "Done!";
        startBtn.style.background = "#4CAF50";
      }
    }, 1000);
  });

  li.appendChild(taskSpan);
  li.appendChild(timerDisplay);
  li.appendChild(startBtn);

  taskList.appendChild(li);
  taskInput.value = "";
});