function Cadastrar(nomeEl, emailEl, cpfEl, passEl, cpasEl) {
    var ncomp = nomeEl.value
    var email = emailEl.value
    var cpf = cpfEl.value
    var senha = passEl.value
    var csenha = cpasEl.value
    var form = [ncomp, email, cpf, senha, csenha]
    var valid = true;


    for (var i in form) {
        if (form[i] == "" && valid == true) {
            valid = false;
            alert("Todos os campos são obrigatórios!")
        }
    }
    if (senha != csenha) {
        valid = false;
        alert("Senha não compatível!")
    }

    if (valid == true) {
        document.cookie = ncomp + "=" + email + "-" + cpf + "-" + senha + "-" + csenha + ";";
        console.log("Cadastrado!")
    }
    console.log(document.cookie)
}

function Redirect(/* arqv */) {
    window.location.href = "C:\Users\eduar\Documents\Códigos\CadastroCl - Estágio\frontend-job-position-test\Clientes.html";
/*     var red = arqv.value
    console.log(red)
    switch (red) {
        case 1:
            window.location.href = "C:\Users\eduar\Documents\Códigos\CadastroCl - Estágio\frontend-job-position-test\Clientes.html";
            break;
        case 2:
            window.location.href = "C:\Users\eduar\Documents\Códigos\CadastroCl - Estágio\frontend-job-position-test\Cadastro.html";
            break;
        default:
            break;
    } */
    
}

function limpaCookie() {
    console.log(document.cookie)
    do {
        document.cookie = `${document.cookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    } while (document.cookie != "")
    console.log("Limpo")
    console.log(document.cookie)
}