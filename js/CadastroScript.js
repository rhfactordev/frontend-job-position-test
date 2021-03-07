function Cadastrar() {
    var ncomp = document.getElementById("ncomp")
    var email = document.getElementById("email")
    var valid = false

    if (ncomp.value == "" || email.value == "") {
        alert("Todos os campos são obrigatórios!")
    } else {
        valid = true
    }

    if (valid == true) {
        console.log("Cadastrado!")
    }
    console.log(email.value + ncomp.value)
}