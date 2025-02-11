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
      <div class="delete" id="deleteBtn">
        <i class="fa fa-trash" ></i>
      </div>
    </div>`;
    } else {
      console.log("btn is not activated");
    }
});

const deleteBtns = document.querySelectorAll(".delete");
deleteBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    console.log("delete btn clicked");
    this.parentNode.remove();
  })
})



const tasks = document.querySelectorAll(".output");

tasks.forEach((task)=>{
    task.addEventListener('click', ()=>{
        
        console.log("CLICKED");

    })
})