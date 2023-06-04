const input = document.querySelector("#task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");


new Sortable(taskList, {
    animation:200
})




addTaskBtn.addEventListener('click',()=>{
    if (input.value == '') return
    const div = document.createElement('div');
    const span = document.createElement('span');
    const removeButton = document.createElement('button');

    span.innerText = input.value;
    removeButton.innerText = 'Remove';

    div.classList.add("task-box");
    span.classList.add("task");
    removeButton.classList.add("remove-task-btn");

    removeButton.addEventListener('click',()=>{
        div.remove()
    })
    
    div.appendChild(span);
    div.appendChild(removeButton);

    div.addEventListener("click", () => {
      span.style.textDecoration = "line-through";
      div.style.backgroundColor = "rgb(91, 117, 117)";
      removeButton.style.backgroundColor = 'lightgreen'
      removeButton.style.color = "#181829";
      removeButton.innerText = 'Done'
    });

    taskList.appendChild(div);
    input.value = ''

})