class Cliente {
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

class Task {
    static listarClientes() {
      let clientes = Store.getClientes()
  
      clientes.forEach((cliente) => Task.addClienteLista(cliente))
    }
  
    static addClienteLista(cliente) {
      let lista = document.querySelector('#lista-clientes')
  
      let linha = document.createElement('tr')
  
      linha.innerHTML = `
        <td ondblclick="editavel(this)">${cliente.nome}</td>
        <td ondblclick="editavel(this)">${cliente.email}</td>
        <td ondblclick="editavel(this)">${cliente.dataNasc}</td>
        <td ondblclick="editavel(this)">${cliente.cpf}</td>
        <td ondblclick="editavel(this)">${cliente.endereco}</td>
        <td ondblclick="editavel(this)">${cliente.telefone}</td>
        <td ondblclick="editavel(this)">${cliente.sexo}</td>
        <td><img class="icon-atualizar atualizar" src="./img/refresh-page-option.svg" alt="ícone atualizar"></td>
        <td><img class="icon-excluir excluir" src="./img/trash.svg" alt="ícone excluir"></td>
      `
  
      lista.appendChild(linha)
    }
  
    static excluirCliente(el) {
        el.parentElement.parentElement.remove()
    }
  
  
    static limparCampos() {
      document.querySelector('#nome').value = ''
      document.querySelector('#email').value = ''
      document.querySelector('#data-nasc').value = ''
      document.querySelector('#cpf').value = ''
      document.querySelector('#endereco').value = ''
      document.querySelector('#telefone').value = ''
      document.getElementsByName('genero').forEach(function(e){
          e.checked = false
      })
    }
  }


class Store {
    static getClientes() {
        return JSON.parse(localStorage.getItem("clientes")) || []
    
      }

      static addCliente(cliente) {
        let clientes = Store.getClientes()
        clientes.push(cliente)
        localStorage.setItem('clientes', JSON.stringify(clientes))
      }
    
      static removerCliente(cpf) {
        let clientes = Store.getClientes()
    
        clientes.forEach((cliente, index) => {
          if(cliente.cpf === cpf) {
            clientes.splice(index, 1)
          }
        })
    
        localStorage.setItem('clientes', JSON.stringify(clientes))
      }

      static atualizarCliente(cliente, cpf) {
        let clientes = Store.getClientes()
    
        clientes.forEach((cliente, index) => {
          if(cliente.cpf === cpf) {
            clientes.splice(index, 1)
          }
        })

        clientes.push(cliente)
    
        localStorage.setItem('clientes', JSON.stringify(clientes))
      }
    }

    function enviarForm(e){
        e.preventDefault();
      
        let nome = document.querySelector('#nome').value
        let email = document.querySelector('#email').value
        let dataNasc = document.querySelector('#data-nasc').value
        let cpf = document.querySelector('#cpf').value.replace(".","")
        let endereco = document.querySelector('#endereco').value
        let telefone = document.querySelector('#telefone').value
        let sexo = document.querySelector('input[name="genero"]:checked').value;
      

        let cliente = new Cliente(nome, email, dataNasc, cpf, endereco, telefone, sexo)
      
        Store.addCliente(cliente)

        Task.limparCampos()
        alert("Salvo com sucesso!")
      }

      function deleteAtualiza(e) {
        let linhaSelecionada = e.target.parentElement.parentElement
        let cpf = linhaSelecionada.cells[3].innerHTML
        if(e.target.classList.contains('excluir')) {
            if (confirm('Tem certeza que deseja excluir esse registro?')){

                Store.removerCliente(cpf)
                Task.excluirCliente(e.target)
                alert("Removido com sucesso!")
                
            }
        }

        if(e.target.classList.contains('atualizar')) {
            if (confirm('Tem certeza que deseja alterar esse registro?')){

                let nome = linhaSelecionada.cells[0].innerHTML
                let email = linhaSelecionada.cells[1].innerHTML
                let dataNasc = linhaSelecionada.cells[2].innerHTML
                let cpf = linhaSelecionada.cells[3].innerHTML
                let endereco = linhaSelecionada.cells[4].innerHTML
                let telefone = linhaSelecionada.cells[5].innerHTML
                let sexo = linhaSelecionada.cells[6].innerHTML

                let cliente = new Cliente(nome, email, dataNasc, cpf, endereco, telefone, sexo);
                
                Store.atualizarCliente(cliente, cpf)
                alert("Atualizado com sucesso!")
                document.querySelector("#lista-clientes").innerHTML = ""
                Task.listarClientes()
                
            }
        }
        
      }


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



function editavel(td){

    td.setAttribute("contentEditable", "true")
    td.classList.add("celulaEmEdicao")

    td.addEventListener("keypress", (e) =>{
        if(e.which == 13){
            td.removeAttribute("contentEditable")
            td.classList.remove("celulaEmEdicao")
        }  
    })

    td.addEventListener("blur", () =>{
            td.removeAttribute("contentEditable")
            td.classList.remove("celulaEmEdicao")  
    })
}

function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}