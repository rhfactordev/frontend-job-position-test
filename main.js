
function login(event){
    event.preventDefault()
    let user = document.querySelector("#usuario")
    let senha = document.querySelector("#senha")
    if(user.value === "admin" && senha.value === "admin"){
        localStorage.setItem("user", user.value)
        window.location.href="home.html"
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
function logout(){
    localStorage.removeItem("user")
    window.location.href="login.html"
}

class Cliente = {
    constructor(nome, email, dataNasc, cpf, endereco, telefone, sexo){
        this.nome = nome
        this.email = email
        this.dataNasc = dataNasc
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
        this.sexo = sexo
    }
}