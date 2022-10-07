const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")
const TODOS_KEY = "toDos"
let toDos = []

function handleTodoSubmit(event){
    event.preventDefault();
    //console.log(toDos.length )
    if( toDos.length >= 5)
    {
        alert("더이상 추가할 수 없습니다. 최대 5개");
        return;
    }

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
    console.log('deleteTodo')
    const li = event.target.parentElement;
    toDos = toDos.filter((x)=> x.id != li.id)
    saveTodos()
    li.remove();
    // event.target.parentNode.remove();
}
function paintTodo(newTodoObj){
    //console.log("paintTodo" , newTodoObj)
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    li.classList.add("todo-li")
    const span = document.createElement('span');
    span.classList.add("todo-li-span")
    span.innerText = newTodoObj.text;

    const button = document.createElement('button')
    button.innerHTML =`X`
    button.classList.add('ic-delete')
    button.addEventListener("click", deleteTodo)
    li.appendChild(button);
    li.appendChild(span);
    
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
