
$(document).ready(function(){

    // FOR QUE MONTA A TABELA

    for (let i = 0; i < localStorage.length; i++){

        let key = localStorage.key(i);
        let cliente = JSON.parse(localStorage.getItem(key));


        $("#tbCliente").append(
            "<tr>" +
              "<td id='idCliente'>" + key + "</td>"  +
              "<td>" + cliente.nome + "</td>" +
              "<td>" + cliente.dtNascimento + "</td>" +
              "<td>" + cliente.email + "</td>" + 
              "<td>" + '<div class="row"><div class="col-xs-2 col-md-2"><div class="form-group"><button class="btn btn-danger btn-remove" type="submit" id="btnD' + key + '" style="margin-top:0px; margin-bottom:0px;"><i class="fas fa-eraser"></i></button></div></div><br>' +
            "</tr>"
          );
    
    }

    // FUNÇÃO PARA ALTERAR OS ITENS NA TABELA

    $(function ()  {
      $("td").dblclick(function () {
          var conteudoOriginal = $(this).text();
              
          $(this).addClass("celulaEmEdicao");
          $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
          $(this).children().first().focus();
  
          $(this).children().first().keypress(function (e) {
              if (e.which == 13) {
                  var novoConteudo = $(this).val();
                  $(this).parent().text(novoConteudo);
                  $(this).parent().removeClass("celulaEmEdicao");
                  
              }
          });  
  
          $(this).children().first().blur(function(){
            $(this).parent().text(conteudoOriginal);
            $(this).parent().removeClass("celulaEmEdicao");
          });
      });
    });

  // FUNÇÃO PARA DELETAR UM CLIENTE DA TABELA

    $('.btn-remove').click(function() {
      var key = $(this).parent().parent().parent().parent().parent().find('#idCliente').text();
      localStorage.removeItem(key);
      location.reload();
    });

});


    