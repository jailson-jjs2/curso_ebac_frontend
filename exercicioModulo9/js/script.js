$(document).ready(function(){
  $('#formulario').on('submit', function(evento){
    evento.preventDefault();

    const novaTarefa = $('<li style="display: none"></li>');
    novaTarefa.text($('#listaTarefa').val());
    $('ul').append(novaTarefa);
    
    novaTarefa.fadeIn();
    $('#listaTarefa').val('');
    
    novaTarefa.appendTo($('ul')).on('click', function() {
      $(this).toggleClass('marcarTexto');
    });
  });
});
