
function chamaHome(event){
    event.preventDefault()
    user = document.querySelector("#usuario")
    senha = document.querySelector("#senha")
    if(user.value === "admin" && senha.value === "admin"){
        window.location.href="index.html"
    } else{
        alert("Usuário e/ou senha incorretos!")
        user.value = ""
        senha.value = ""
    }
    
}
