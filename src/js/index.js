/*Ligação ao banco de dados e AJAX*/
$('#formCadastro').on("submit", function(e){
  
  e.preventDefault();
  
  var cli_nome = $("[name = 'nome']").val();
  var cli_data = $("[name = 'data']").val();
  var cli_numero = $("[name = 'numero']").val();
  var cli_valor = $("[name = 'valor']").val();
  cadastro.limpaCampos();

  $.ajax({
    url:'src/php/config.php',
    method: 'POST',
    data: {nome: cli_nome, data: cli_data, numero: cli_numero, valor: cli_valor},
    dataType: 'json'

  }).done(function(retorno){
    
    $('#tbody').replaceWith("<tbody id='tbody'></tbody>");

    getContratos();

    });


});

function getContratos() {
  $.ajax({
    url: 'src/php/selecionar.php',
    method: 'GET',
    dataType: 'json'
  }).done(function(result){
    
    for (i = 0; i < result.length; i++){
      
      $('#tbody').prepend("<tr id= '"+ result[i].Numero +"' class='buscaTr'><td class='BuscaNumero' >" + result[i].Numero + "</td><td class='BuscaNome'>" + result[i].Nome + "</td><td class='BuscaValor'>" + result[i].Valor + "</td><td class='BuscaData'>" + result[i].data + "</td><td><a name='" + result[i].Numero + "' class='btn btn-primary' id='btnAltera'><svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' class='bi bi-pencil-fill' viewBox='0 0 16 16'><path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z'/></svg></a><a id='btnDeleta' name='" + result[i].Numero + "' class='btn btn-danger'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z'/><path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z'/></svg></a></td></tr>");
      
    }
  });

}

$(document).on('click', '#btnAltera', function(){
    
  var contrato_id = $(this).attr('name');
  

  $.ajax({
  url: 'src/php/selecionaContratoAlterar.php',
  method: 'GET',
  data: {id: contrato_id},
  dataType: 'json'
  }).done(function(contratoAlterar){
    
    $('#'+contrato_id).replaceWith("<tr id= '"+ contratoAlterar.Numero +"' class='buscaTr'><td class='BuscaNumero' ><input type='text' name= 'altNumero' class='form-control' id='validationServer07' value= " + contratoAlterar.Numero + "></td><td class='BuscaNome'><input type='text' name= 'altNome' class='form-control' id='validationServer05' value= " + contratoAlterar.Nome + "></td><td class='BuscaValor'><input type='text' name='altValor' class='form-control mascara_moeda' onkeydown='mascaraMoeda()' id='validationServer08' value='"+ contratoAlterar.Valor +"' required></td><td class='BuscaData'><input type='date' name='altData' class='form-control' id='validationServer06' value='"+ contratoAlterar.data +"'  onblur='cadastro.validaData()' required></td><td><a name='" + contratoAlterar.Numero + "' class='btn btn-primary' id='btnSalva'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-save' viewBox='0 0 16 16'><path d='M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z'/></svg></a></td></tr>");

  });

});

$(document).on('click', '#btnSalva', function salvaAltaracao(){
  
  var alt_id = $(this).attr('name');
  var alt_nome = $("[name = 'altNome']").val();
  var alt_data = $("[name = 'altData']").val();
  var alt_numero = $("[name = 'altNumero']").val();
  var alt_valor = $("[name = 'altValor']").val();

  $.ajax({
    url:'src/php/salvaAlt.php',
    method: 'POST',
    data: {id: alt_id, nome: alt_nome, data: alt_data, numero: alt_numero, valor: alt_valor},
    dataType: 'json'
  }).done(function(result){
    $('#tbody').replaceWith("<tbody id='tbody'></tbody>");
    getContratos();
  });
});

$(document).on('click', '#btnDeleta', function deletaContrato(){
  var confirmar = confirm('Deseja deletar o contrato?');
  if(confirmar){
    var contrato_id = $(this).attr('name');
    
    $.ajax({
      url: 'src/php/delete.php',
      method: 'GET',
      data: {id: contrato_id},
      dataType: 'json'
    }).done(function(){
      $('#tbody').replaceWith("<tbody id='tbody'></tbody>");
      getContratos();

    });
  }else{
    $('#tbody').replaceWith("<tbody id='tbody'></tbody>");
      getContratos();
  }
});

getContratos();

/*Mascaras*/
function mascaraMoeda(){
  $('.mascara_moeda').mask("#.##0,00", {reverse: true});  
}
$('.mascara_moeda').mask("#.##0,00", {reverse: true});

/*Funções para busca*/
class Busca{
  constructor () {
    this.nome= document.getElementById("validationServer01"),
    this.data= document.getElementById("validationServer02"),
    this.contrato= document.getElementById("validationServer03"),
    this.valor= document.getElementById("validationServer04")
  }

  
  validaData(){
    var inputData = this.data.value;
    var separaData = inputData.split("-");
    var converteData = new Date(separaData[0], separaData[1] - 1, separaData[2]);

    if(converteData > new Date()) {
      this.data.classList.add("is-invalid");
      this.data.classList.remove("is-valid");
    } else{
      this.data.classList.add("is-valid");
      this.data.classList.remove("is-invalid");
    };
    
  };

  validaContrato(){
    var inputContrato = this.contrato.value;

    if(inputContrato.length < 9 && inputContrato.length > 0) {
      this.contrato.classList.add("is-invalid");
      this.contrato.classList.remove("is-valid");
    } else{
      this.contrato.classList.add("is-valid");
      this.contrato.classList.remove("is-invalid");
    };
    
  };

  limpaCampos(){
    const formulario = document.getElementById("formBusca");
    formulario.reset();
  };

  buscaNome(){
    setTimeout(function(){
      let lowNome = busca.nome.value.toLowerCase();
      let classNome = document.getElementsByClassName("BuscaNome");
      let classTr = document.getElementsByClassName("buscaTr");
      
      
      for (var i = 0; i < classNome.length; i++) {
        if (!classNome[i].childNodes[0].data.toLowerCase().includes(lowNome)){
            classTr[i].style.display = "none";
        }
        else {
          classTr[i].style.display = "revert";
        }
      };
    }, 500)
    
  };

  buscaData(){
    setTimeout(function(){
      let inputData = busca.data.value;
      let classData = document.getElementsByClassName("BuscaData");
      let classTr = document.getElementsByClassName("buscaTr");
     
      
      for (var i = 0; i < classData.length; i++) {
        if (!classData[i].childNodes[0].data.includes(inputData)){
            classTr[i].style.display = "none";
        }
        else {
          classTr[i].style.display = "revert";
        }
      };
    }, 500)
    
  };

  buscaNumero(){
    setTimeout(function(){
      let inputNumero = busca.contrato.value;
      let classNumero = document.getElementsByClassName("BuscaNumero");
      let classTr = document.getElementsByClassName("buscaTr");
      
      
      for (var i = 0; i < classNumero.length; i++) {
        if (!classNumero[i].childNodes[0].data.includes(inputNumero)){
            classTr[i].style.display = "none";
        }
        else {
          classTr[i].style.display = "revert";
        }
      };
    }, 500)
    
  };

  buscaValor(){
    setTimeout(function(){
      let inputValor = busca.valor.value;
      let classValor = document.getElementsByClassName("BuscaValor");
      let classTr = document.getElementsByClassName("buscaTr");
      
      
      for (var i = 0; i < classValor.length; i++) {
        if (!classValor[i].childNodes[0].data.includes(inputValor)){
            classTr[i].style.display = "none";
        }
        else {
          classTr[i].style.display = "revert";
        }
      };
    }, 500)
    
  };

};

let busca = new Busca();

/*Funções para Cadastro*/

class Cadastro{
  constructor () {
    this.nome = document.getElementById("validationServer05"),
    this.data = document.getElementById("validationServer06"),
    this.numContrato = document.getElementById("validationServer07"),
    this.valor = document.getElementById("validationServer08"),
    this.tbody = document.getElementById("tbody"),
    this.arrayContrato = []
    this.controle = 0;

  }

  validaNome(){
    var inputNome = this.nome.value;

    if(inputNome.length < 3 && inputNome.length > 0) {
      this.nome.classList.add("is-invalid");
      this.nome.classList.remove("is-valid");
    } else{
      this.nome.classList.add("is-valid");
      this.nome.classList.remove("is-invalid");
    };
    
  };
  
  validaData(){
    var inputData = this.data.value;
    var separaData = inputData.split("-");
    var converteData = new Date(separaData[0], separaData[1] - 1, separaData[2]);

    if(converteData > new Date()) {
      this.data.classList.add("is-invalid");
      this.data.classList.remove("is-valid");
    } else{
      this.data.classList.add("is-valid");
      this.data.classList.remove("is-invalid");
    };
    
  };

  validaContrato(){
    var inputContrato = this.numContrato.value;

    if(inputContrato.length < 9 && inputContrato.length > 0) {
      this.numContrato.classList.add("is-invalid");
      this.numContrato.classList.remove("is-valid");
    } else{
      this.numContrato.classList.add("is-valid");
      this.numContrato.classList.remove("is-invalid");
    };
    
  };

  validaVazio(contrato){
    let aviso = '';
    if(contrato.nomeCliente == ''){
      aviso += 'Informe o nome do cliente \n';
    }
    if(contrato.dataAss == ''){
      aviso += 'Informe a data de Assinatura \n';
    }
    if(contrato.nContrato == ''){
      aviso += 'Informe o número do contrato \n';
    }
    if(contrato.valorContrato == ''){
      aviso += 'Informe o valor do Contrato \n';
    }
    if(aviso != ''){
      alert(aviso);
      return false;
    };

    return true;

  };
  /*Cadastro dos Contratos*/

  criaArray (){
    let contrato = this.buscaDados();

    if(this.validaVazio(contrato)){
    
      this.incluiContratos(contrato);

    }
    this.listaContrato();
    this.limpaCampos();
    this.controle ++;
  }

  incluiContratos (contrato){
    this.arrayContrato.push(contrato);
  }

  buscaDados (){
    let contrato = {}
    contrato.nomeCliente = this.nome.value;
    contrato.dataAss = this.data.value;
    contrato.nContrato = this.numContrato.value;
    contrato.valorContrato = this.valor.value;

    return contrato;
  }

  limpaCampos(){
    const formulario = document.getElementById("formCadastro");
    formulario.reset();
  };

  listaContrato (){
  
    const trNContrato = document.createElement('tr');
    const tdNContrato = document.createElement('td');
    const textNContrato = document.createTextNode(this.arrayContrato[this.controle].nContrato);

    this.tbody.appendChild(trNContrato);
    trNContrato.className = "buscaTr";
    trNContrato.appendChild(tdNContrato);
    tdNContrato.appendChild(textNContrato);
    tdNContrato.className = "BuscaNContrato";

    const tdNome = document.createElement('td');
    const textNome = document.createTextNode(this.arrayContrato[this.controle].nomeCliente);
    
    trNContrato.appendChild(tdNome);
    tdNome.appendChild(textNome);
    tdNome.className = "BuscaNome"

    const tdValor = document.createElement('td');
    const textValor = document.createTextNode('R$ ' + this.arrayContrato[this.controle].valorContrato);
    
    trNContrato.appendChild(tdValor);
    tdValor.appendChild(textValor);
    tdValor.className = "BuscaValor";

    const tdData = document.createElement('td');
    const textData = this.arrayContrato[this.controle].dataAss;
    const separaTextData = textData.split("-");
    const novoTextData = document.createTextNode(separaTextData[2] + '/' + separaTextData[1] + '/' + separaTextData[0]);

    trNContrato.appendChild(tdData);
    tdData.appendChild(novoTextData);
    tdData.className = "BuscaData";

  };
};

let cadastro = new Cadastro();

    /*Evitar envio com dado inválido*/
    function validaEnvio()  {
        'use strict';
        window.addEventListener('load', function() {
          // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
          var forms = document.getElementsByClassName('needs-validation');
          // Faz um loop neles e evita o envio
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      };
