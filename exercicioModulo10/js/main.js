$(document).ready(function() {

  $('#telefone').mask('(00) 00000-0000')
  $('#cpf').mask('000.000.000-00')
  $('#cep').mask('00000-000')

  $('form').validate( {
    rules: {
      nome: {
        required: true,
        nomeCompleto: true // REGRA PARA NOME COMPLETO
      },
      email: {
        required: true,
        email:true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
    },
    messages: {
      nome: {
        nomeCompleto: 'Por favor, digite o nome completo'
      }
    }
  })

  // REGRA PARA NOME COMPLETO
  $.validator.addMethod('nomeCompleto', function(valor) {
    const nomeComArray = valor.split(' ');
    return nomeComArray.length >= 2;
  });

});
