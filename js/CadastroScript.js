function Cadastrar(nomeEl, emailEl, cpfEl, passEl, cpasEl) {
    var form = [nomeEl.value, emailEl.value, cpfEl.value, passEl.value, cpasEl.value] 
    /* Passa os campos do formulário para um vetor pois é mais de usar */
    var valid = true;

    for (var i in form) {
        if (form[i] == "" && valid == true) {
            valid = false;
            alert("Todos os campos são obrigatórios!")
        }
    }
    if (form[3] != form[4]) {
        valid = false;
        alert("Senha não compatível!")
    }

    if (valid == true) {
        document.cookie = form[0] + "=" + form[1] + "-" + form[2] + "-" + form[3] + ";";
    }
}


function buscarClientes() {
    var carr = document.cookie.split(';'); /* Array de Clientes >> Eduardo=email@abc.com-12345678900-senhasenha*/
    var lista = document.getElementById('cList');
    
    for(var i in carr) {
        var clinfo = carr[i];

        /* Pula o espaço no começo da String */
        while (clinfo.charAt(0) == ' ') { 
            clinfo = clinfo.substring(1, clinfo.length);
        }

        /* Divide o nome do cliente */
        var corte = clinfo.indexOf('=');
        var nomeCl = clinfo.substring(0, corte);
        
        /* Adiciona o nome e o índice na lista de clientes */
        let item = document.createElement('option')
        item.text = nomeCl;
        item.value = i;
        lista.appendChild(item)
    }
}


function viewCliente() {
    var carr = document.cookie.split(';');
    var listaN = document.getElementById('cList')
    var selectN = listaN.options[listaN.selectedIndex].value; /* Índice do cliente selecionado */
    
    for(var i in carr) {
        var clinfo = carr[i];

        /* Pula o espaço no começo da String */
        while (clinfo.charAt(0) == ' ') {
            clinfo = clinfo.substring(1, clinfo.length);
        }

        /* Divide o nome do cliente e suas informações (juntas) */
        var corte = clinfo.indexOf('=');
        var nomeCl = clinfo.substring(0, corte);
        var infoCl = clinfo.substring(corte+1, clinfo.length)

        /* Divide as informações em um vetor */
        var divInfo = infoCl.split('-');
            /* divInfo[0] == email */
            /* divInfo[1] == cpf */
            /* divInfo[2] == senha */

        /* Mostra as informações do cliente na tabela */
        if (selectN == i) {
            document.getElementById('tnome').innerText = nomeCl;
            document.getElementById('temail').innerText = divInfo[0];
            document.getElementById('tcpf').innerText = divInfo[1];
        }
    }
}


function Redirect(arqv) {
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