//constructor para agarrar la variable genero y  poner las peliculas
window.onload = function() {
var queryString = new URLSearchParams(location.search)
var idGenero = queryString.get("idGenero")
var genero = queryString.get("genero")
// esto es para que se ponga el titulo del genero segun genero
  document.querySelector(".prox").innerHTML += genero

//PELICUALAS POR GENERO
fetch("https://api.themoviedb.org/3/discover/movie?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+idGenero+"")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    var arrayPelis = informacion.results
    console.log(arrayPelis);
    for (var i = 0; i < arrayPelis.length; i++) {
      var png = arrayPelis[i].poster_path;
      var id = arrayPelis[i].id
      document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

/* scroll para que ponga mas peliculas automaticamente al bajar */
  var cont= 2; //esto va incrementando para el codigo. pongo 2 para que traiga la pagina 2 del genero tal
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page="+ cont+"&with_genres="+idGenero+"")
        .then(function(respuesta) {
          return respuesta.json()
          console.log(respuesta);
        })
        .then(function(informacion) {
          var arrayPelis = informacion.results
          console.log(arrayPelis);
          for (var i = 0; i < arrayPelis.length; i++) {
            console.log(arrayPelis);
            var png = arrayPelis[i].poster_path;
            var id = arrayPelis[i].id
            document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
            cont++;

          }
        })
        .catch(function(error) {
          console.log("Error: " + error);

        })
    }
};


} //con esta llave se cierra el java entero.
