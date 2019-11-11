/* buscador */

window.onload = function() {
  var queryString = new URLSearchParams(location.search)
  var busco = queryString.get("buscador")
  var usuario = localStorage.getItem("user")
  if (usuario != null) {
    document.querySelector("button.btn-log").style.display = "none"
    document.querySelector("li.prefes").style.display = "block"
    document.querySelector("li.saludop").style.display = "block"
    document.querySelector("p.saludo").innerHTML = "Hola " + usuario
    document.querySelector("li.lg").style.display = "block"


  }
  var cont= 2;
  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES&query="+busco+"&page="+ cont+"&include_adult=false")
          .then(function(respuesta) {
            return respuesta.json()
            console.log(respuesta);
          })
          .then(function(informacion) {
                var arrayBusqueda = informacion.results
                console.log(arrayBusqueda);
                for (var i = 0; i < arrayBusqueda.length; i++) {
                  var png = arrayBusqueda[i].poster_path;
                  var id = arrayBusqueda[i].id
                  document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
                }
          })
          .catch(function(error) {
            console.log("Error: " + error);
          })
      }
  };

fetch("https://api.themoviedb.org/3/search/movie?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES&query="+busco+"&page=1&include_adult=false")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
        var arrayBusqueda = informacion.results
        console.log(arrayBusqueda);
        for (var i = 0; i < arrayBusqueda.length; i++) {
          var png = arrayBusqueda[i].poster_path;
          var id = arrayBusqueda[i].id
          document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
        }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
}
