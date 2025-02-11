const checkInput = document.getElementById("addTask");
const classTask = document.querySelector(".taskInput");
const addBtn = document.querySelector(".addBtn");

checkInput.addEventListener("input", () => {
  if (checkInput.value.trim().length === 0) {
    classTask.classList.remove("taskInputNotEmpty");
    addBtn.classList.remove("btnActive");
  } else if (checkInput.value.trim().length !== 0) {
    classTask.classList.add("taskInputNotEmpty");
    addBtn.classList.add("btnActive");
  } else {
    console.log("error");
  }
});

//

const button = document.getElementById("addBtn");
const previewTasks = document.querySelector(".tasksDisplay");
const inputvalue = document.querySelector(".taskInput input");

button.addEventListener("click", () => {
  if (addBtn.classList.contains("btnActive")) {
    previewTasks.innerHTML += ` <div class="output">
      <div class="taskOutput">${inputvalue.value}</div>
      <button onclick="deleteF()" class="delete" id="deleteBtn">
        <i class="fa fa-trash" ></i>
      </button>
    </div>`;
  } else {
    console.log("btn is not activated");
  }
});

const popup = document.querySelector(".deletePopup");
function deleteF() {
  const deleteBtns = document.querySelectorAll("#deleteBtn");
  deleteBtns.forEach((btn) => {
    btn.onclick = function () {
      popup.classList.add("show");
      popup.classList.remove("hidden");
      const yesBtn = document.getElementById("yesBtn");
      yesBtn.onclick = function () {
        btn.parentNode.remove();
        popup.classList.add("hidden");
        popup.classList.remove("show");
      };
      const noBtn = document.getElementById("noBtn");
      noBtn.onclick = function () {
        popup.classList.add("hidden");
        popup.classList.remove("show");
        return;
      };
    };
  });
}
