const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const todoForm = document.querySelector("#todo-form");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USER_NAME_KEY = "user_name"


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const user_name = loginInput.value;

    localStorage.setItem(USER_NAME_KEY, user_name);
    showGreeing(user_name);
    
}
function showGreeing(user_name)
{
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.innerHTML = `Hello ${user_name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);

}

const saveUserName = localStorage.getItem(USER_NAME_KEY);


//console.log(saveUserName)
if( saveUserName === null)
{
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}
else 
{
    //show greeting
    showGreeing(saveUserName);

}
