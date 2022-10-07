const logout = document.getElementById("btn_logout")


function goLogout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("toDos")
    location.reload();
}


logout.addEventListener('click', goLogout);