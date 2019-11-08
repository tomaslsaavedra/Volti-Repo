// esto es para el menu que se desplaza para abajo cuando te paras arriba de generos

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES")
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
    // var buscadorInput = document.querySelector("input")
    if (busco.length <= 3) {
      e.preventDefault()
      UIkit.notification({message: 'Ingrese mas de tres caracteres', status: 'warning',  timeout: 2000})
  }else {

  }
}
