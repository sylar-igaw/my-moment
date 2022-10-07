const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")
const TODOS_KEY = "toDos"
let toDos = []

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value=''
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj)

    paintTodo(newTodoObj)
    
    saveTodos()
}

function deleteTodo(event){
    console.log(event.target.parentElement)
    const li = event.target.parentElement;
    toDos = toDos.filter((x)=> x.id != li.id)
    saveTodos()
    li.remove();
    // event.target.parentNode.remove();
    this.closest('li').remove();
}
function paintTodo(newTodoObj){
    // console.log(newTodo)
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;

    const button = document.createElement('button')
    button.innerText ="X"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)
    
    
}    
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

toDoForm.addEventListener("submit", handleTodoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
//console.log("savedToDos", savedToDos)
if( saveTodos != null)
{
    const parsedToDos = JSON.parse(savedToDos);
    if( parsedToDos != null)
    {
        toDos = parsedToDos
        parsedToDos.forEach(paintTodo)
    }
}
