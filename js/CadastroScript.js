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
        document.cookie = ncomp + "=" + email + "-" + cpf + "-" + senha + ";";
        console.log("Cadastrado!")
    }
    console.log(document.cookie)
}

function buscarClientes() {
    var lista = document.getElementById('cList');
    var carr = document.cookie.split(';'); /* Array de Clientes >> Eduardo=email@abc.com-12345678900-senhasenha*/
    console.log(document.cookie)
    
    for(var i in carr) {
        var clinfo = carr[i];
        console.log(clinfo)

        while (clinfo.charAt(0) == ' ') {
            clinfo = clinfo.substring(1, clinfo.length);
        }

        var corte = clinfo.indexOf('=');
        console.log(corte)
        var nomeCl = clinfo.substring(0, corte);
        console.log(nomeCl)
        
        let item = document.createElement('option')
        item.text = nomeCl;
        item.value = i;
        lista.appendChild(item)
    }
}

function viewCliente() {
    var listaN = document.getElementById('cList')
    var selectN = listaN.options[listaN.selectedIndex].value;
    var carr = document.cookie.split(';'); /* Array de Clientes >> Eduardo=email@abc.com-12345678900-senhasenha*/
    
    for(var i in carr) {
        var clinfo = carr[i];

        while (clinfo.charAt(0) == ' ') {
            clinfo = clinfo.substring(1, clinfo.length);
        }

        var corte = clinfo.indexOf('=');
        var nomeCl = clinfo.substring(0, corte);
        var infoCl = clinfo.substring(corte+1, clinfo.length)

        var divInfo = infoCl.split('-');

        if (selectN == i) {
            console.log("Correto");
            document.getElementById('tnome').innerText = nomeCl;
            document.getElementById('temail').innerText = divInfo[0];
            document.getElementById('tcpf').innerText = divInfo[1];
        }

    }
}

function Redirect(arqv) {
    console.log(arqv)
    switch (arqv) {
        case 1:
            window.location.href = "Clientes.html";
            break;
        case 2:
            window.location.href = "Cadastro.html";
            break;
        default:
            break;
    }
    
}

function limpaCookie() {
    console.log(document.cookie)
    do {
        document.cookie = `${document.cookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    } while (document.cookie != "")
    console.log("Limpo")
    console.log(document.cookie)
}