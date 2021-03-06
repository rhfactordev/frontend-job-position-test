
function chamaHome(event){
    event.preventDefault()
    let user = document.querySelector("#usuario")
    let senha = document.querySelector("#senha")
    if(user.value === "admin" && senha.value === "admin"){
        localStorage.setItem("user", user.value)
        window.location.href="index.html"
    } else{
        alert("Usuário e/ou senha incorretos!")
        user.value = ""
        senha.value = ""
    }
    
}

function setNomeUser(){
    let user = localStorage.getItem("user")
    let userSpan = document.querySelector("#user") 
    userSpan.innerHTML = user
}
