//constructor para agarrar la variable genero y  poner las series
window.onload = function() {
var queryString = new URLSearchParams(location.search)
var idGenero = queryString.get("idGenero")
var genero = queryString.get("genero")
// esto es para que se ponga el titulo del genero segun genero
  document.querySelector(".prox").innerHTML += genero

//SERIES POR GENERO
fetch("https://api.themoviedb.org/3/discover/tv?api_key=e31dd59fefbc10e65215ecd077762f57&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+idGenero+"")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    var arraySeries = informacion.results
    console.log(arraySeries);
    for (var i = 0; i < arraySeries.length; i++) {
      var png = arraySeries[i].poster_path;
      var id = arraySeries[i].id
      document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

/* scroll para que ponga mas series automaticamente al bajar */
  var cont= 2; //esto va incrementando para el codigo. pongo 2 para que traiga la pagina 2 del genero tal
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      fetch("https://api.themoviedb.org/3/discover/tv?api_key=e31dd59fefbc10e65215ecd077762f57&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page="+ cont+"&with_genres="+idGenero+"")
        .then(function(respuesta) {
          return respuesta.json()
          console.log(respuesta);
        })
        .then(function(informacion) {
          var arraySeries = informacion.results
          console.log(arraySeries);
          for (var i = 0; i < arraySeries.length; i++) {
            console.log(arraySeries);
            var png = arraySeries[i].poster_path;
            var id = arraySeries[i].id
//mediante esto traigo las imagenes para las peliculas
            document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
            cont++;

          }
        })
        .catch(function(error) {
          console.log("Error: " + error);

        })
    }
};

// esto es para el menu que se desplaza para abajo cuando te paras arriba de generos
//anda y busca en este link las appis y transformalas en json para listearlas
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=e31dd59fefbc10e65215ecd077762f57&language=es-ES")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
//ahora agarra en especial los generos y traelos como arrays infinitos
  .then(function(informacion) {
    var arrayGeneros = informacion.genres
    for (var i = 0; i < arrayGeneros.length; i++) {
      var nombre = arrayGeneros[i].name
      var id = arrayGeneros[i].id
      var li;
//estructura que va a linkear donde posicionarlos
      li = '<li>'
      li += '<a href=listaGeneros.html?idGenero=' + id + '&genero='+nombre+'>' + nombre + '</a>'
      li += '</li>'
//estilo selector para los genros
      document.querySelector("ul.gen").innerHTML += li
    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
//esto es para que cuando busques, si escribis 2 caracteres, arroje error
  document.querySelector("form.buscar").onsubmit = function(e) {
  var busco = document.buscar.buscador.value;
  console.log(busco);
  // var buscadorInput = document.querySelector("input")
  if (busco.length <= 3) {
    e.preventDefault()
    UIkit.notification({message: 'Ingrese mas de tres caracteres', status: 'warning',  timeout: 2000})
}else {

}
}



} //con esta llave se cierra el java entero.
