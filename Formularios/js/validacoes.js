$('#formCadastro').submit(function(){
    // Variaveis
    var nome = $('#nome');
    var dataNasc = $('#dataNascimento');
    var email = $('#email');
    var numeroTel = $('#numeroTelefone');
    var numeroCel = $('#numeroCelular');
    var sucesso = $('.alert-success')
    var erro = $('.alert-danger');
    var campoErro = $('#campoErro');

    // Variaveis para salvar os dados no Local Storage

    nome.removeClass('is-invalid');
    email.removeClass('is-invalid');
    dataNasc.removeClass('is-invalid');
    numeroCel.removeClass('is-invalid');
    numeroTel.removeClass('is-invalid');


    // Validações

    // Validação do campo Nome
    if (nome.val() == ''){
        
        erro.removeClass('d-none'); // Alerta do campo que não foi preenchido
        campoErro.html('nome'); 
        nome.focus();
        nome.addClass('is-invalid');
    } else{
        erro.addClass('d-none'); // Esconde o alerta
        nome.addClass('is-valid');
        
    }
    
    // Validação do campo Data de Nascimento
    if (dataNasc.val() == ''){
        erro.removeClass('d-none');
        campoErro.html('data de nascimento');
        dataNasc.focus();
        dataNasc.addClass('is-invalid');
    } else{
        erro.addClass('d-none');
        dataNasc.addClass('is-valid');
    }

    // Validação do campo E-mail
    if (email.val() == ''){
        
        erro.removeClass('d-none');
        campoErro.html('E-mail'); 
        email.focus();
        email.addClass('is-invalid');
        
    } else{
        erro.addClass('d-none'); 
        email.addClass('is-valid');
    }

    // Validação do campo Numero de Celular
    if (numeroCel.val() == 0){
        
        erro.removeClass('d-none');
        campoErro.html('Celular'); 
        numeroCel.focus();
        numeroCel.addClass('is-invalid');

    } else{
        erro.addClass('d-none');
        numeroCel.addClass('is-valid');
    }

    if(nome.val() != '' && dataNasc.val() != '' && email.val() != '' && numeroCel.val() != 0){
        sucesso.removeClass('d-none');
        $('#Reset').removeClass('d-none');
    }

    $('#btnReset').click(function(){
        location.reload();
    });
    return false;
});