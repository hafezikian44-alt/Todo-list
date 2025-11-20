document.getElementById("hideBtn").addEventListener("click", () => {
    document.getElementById("asideLeft").style.display = "none";
    document.getElementById("sunIcon").style.display = "none";
    document.getElementById("showAsideBtn").style.display = "inline-block";
    document.getElementById("date").style.display = "inline-block";
});
document.getElementById("showAsideBtn").addEventListener("click", () => {
    document.getElementById("asideLeft").style.display = "inline-block";
     document.getElementById("sunIcon").style.display = "inline-block";
    document.getElementById("showAsideBtn").style.display = "none";
});

document.getElementById("suggestoinBtn").addEventListener("click", () => {
    document.getElementById("asideRight").style.display = "inline-block";
    document.getElementById("Suggestion").style.display = "inline-block";
    
});
document.getElementById("suggestionCloseBtn").addEventListener("click", () => {
    document.getElementById("asideRight").style.display = "none";
    
});
document.getElementById("todoForm").addEventListener("click", () => {
    document.getElementById("todoContent").style.display = "inline-block";
    
});

const createTodoBtn = document.getElementById ("createTodoBtn");
const taskInput = document.getElementById ("taskInput");
const form = document.getElementById ("todoForm");
const todoContaner = document.getElementById("todoContaner");
const todoArrey = [];

taskInput.addEventListener("input", () => {
    if(taskInput.value !== "") {
        createTodoBtn.disabled = false;  
        createTodoBtn.style.cursor = "pointer";
    } else {
        createTodoBtn.disabled = true;
        createTodoBtn.style.cursor = "not-allowed";     
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let todoValue = taskInput.value;
    const todoDiv = `<div class="todo">
            <div class="d-flex align-items-center gap-3">
                <label class="circle-container">
                    <input type="checkbox">
                    <span class="circle"></span>
                </label>
                <div>
                    <p class="m-0">${todoValue}</p>
                    <small class="m-0 text-secondary">Tasks</small>
                </div>
            </div>
            <label class="star-checkbox">
                <input type="checkbox">
                <span class="star"></span>
            </label>
        </div>`

    
    let todoObject = {
        id: todoArrey.length + 1,
        todoTitle : todoValue
    }
    todoArrey.push(todoObject)
    console.log(todoArrey);
    
    taskInput.value = "";
    todoContaner.innerHTML += todoDiv

});

document.querySelector(".todo").addEventListener("click", () => {
    document.getElementById("asideRight").style.display = "inline-block";
    document.getElementById("todoDetails").style.display = "inline-block";
    document.getElementById("Suggestion").style.display = "none";
    
});
document.getElementById("todoDetailsCloseBtn").addEventListener("click", () => {
    document.getElementById("asideRight").style.display = "none";
    document.getElementById("todoDetails").style.display = "none";
    
});
