 function handleSubmit(e){
     e.preventDefault()

     //pegando valores no local storage
    var usuariosJSON= localStorage.getItem('USUARIOS')
    var usuarios=JSON.parse(usuariosJSON)

    //pegando valores dos inputs
    var nome= document.getElementById('nome')
    var sobrenome= document.getElementById('sobrenome')
    var cpf= document.getElementById('cpf')
    var telefone= document.getElementById('telefone')
    var email= document.getElementById('email')
    var genero= document.getElementById('genero')
    var senha= document.getElementById('senha')

    // Limpando mascara
    var cpfLimpo= cpf.value.split('.').join('').split('-').join('')

    // chamando a função de validação de cpf
    var validacao=TestaCPF(cpfLimpo)

    if (!validacao) {
        return alert('CPF inválido')
    }
    // criando usuario
    var novoUsuario= {nome:nome.value, sobrenome:sobrenome.value, cpf:cpf.value, telefone:telefone.value, email:email.value, genero:genero.value, senha:senha.value}
    
    //verificando se ja existe algum usuario
    if (!usuarios) {
        // criando usuario no local storage
        localStorage.setItem('USUARIOS',JSON.stringify([novoUsuario]))
        return alert('Cadastro realizado com sucesso')
    }

    // inserindo novo usuario na lista de usuarios do local storage
    var arrayUsuarios=usuarios
    arrayUsuarios.push(novoUsuario)
    localStorage.setItem('USUARIOS',JSON.stringify(usuarios) )
     alert('Cadastro realizado com sucesso')

     //navegando para tela de confirmação
     window.location.href='/confirmacao.html'
}

// função de validação de cpf
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}


//ouvinte para submit do botão cadastrar
var form= document.getElementById('form')
form.addEventListener('submit',handleSubmit )

//mascara de cpf para input
var cpf = document.querySelector("#cpf");
cpf.addEventListener("blur", function(){
   if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});

//mascara de telefone para input
const tel = document.getElementById('telefone')  
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor
}

