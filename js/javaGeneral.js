// esto es para el menu que se desplaza para abajo cuando te paras arriba de generos

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e31dd59fefbc10e65215ecd077762f57&language=es-ES")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    var arrayGeneros = informacion.genres
    for (var i = 0; i < arrayGeneros.length; i++) {
      var nombre = arrayGeneros[i].name
      var id = arrayGeneros[i].id
      var li;
      li = '<li>'
      li += '<a href=listaGeneros.html?idGenero=' + id + '&genero='+nombre+'>' + nombre + '</a>'
      li += '</li>'

      document.querySelector("ul.gen").innerHTML += li
    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

    document.querySelector("form.buscar").onsubmit = function(e) {
    var busco = document.buscar.buscador.value;
}
