function mensajeOk(mensaje){
      $("#mensaje").toast("show");
      $("#mensaje strong").text(mensaje);
      $('#mensaje strong').removeClass("btn btn-danger");
      $('#mensaje strong').addClass("btn btn-success");
}

function mensajeError(mensaje){
      $("#mensaje").toast("show");
      $("#mensaje strong").text(mensaje);
      $('#mensaje strong').removeClass("btn btn-success");
      $('#mensaje strong').addClass("btn btn-danger");
}