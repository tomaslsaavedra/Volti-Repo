window.onload = function() {
  var queryString = new URLSearchParams(location.search)
  var idPeli = queryString.get("idPeli")
  var genero = queryString.get("genero")

  //DATA DE PELI
  fetch("https://api.themoviedb.org/3/movie/"+idPeli+"?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES")
    .then(function(respuesta) {
      return respuesta.json()
      console.log(respuesta);
    })
    .then(function(informacion) {
      var peliDetalle = informacion

      for (var i = 0; i < 1; i++) {
        var nombre = peliDetalle.title
        var png = peliDetalle.poster_path
        var fechaestreno = peliDetalle.release_date
        var desc = peliDetalle.overview
        var id = peliDetalle.id
        var img;
        img = '<img src='+'https://image.tmdb.org/t/p/w300'+png+'></a>'
        document.querySelector(".img-peli").innerHTML = img
        document.querySelector(".tit").innerHTML = "<span class=titulo>Titulo: </span>"+nombre
        document.querySelector(".genero").innerHTML = "<span class=titulo>Genero/s: </span>"
        document.querySelector(".lng").innerHTML +=  '<span class=titulo>Lenguaje Original: </span>'
        document.querySelector(".fchestreno").innerHTML = "<span class=titulo>Fecha De Estreno: </span>"+fechaestreno
        document.querySelector(".sinopsis").innerHTML ="<span class=titulo>Descripcion: </span>"+ desc


      }
      var botones = document.querySelectorAll("button.favorito")
      for (var i = 0; i < botones.length; i++) {
        botones[i].onclick = function() {
          var idPeli = this.getAttribute("idPeli")

          if (favoritos.indexOf(idPeli) == -1) {
            favoritos.push(idPeli)
            this.innerHTML = "Quitar de Favoritos"
          } else {
            var posicion = favoritos.indexOf(idPeli)
            favoritos.splice(posicion,1)
            this.innerHTML = "Agregar a Favoritos"
          }

          obj = {
            carac: favoritos
          }
          json = JSON.stringify(obj)
          localStorage.setItem("pelisFavs", json)
          console.log(localStorage);
        }

      }
      var arrayGenero = peliDetalle.genres
      for (var i = 0; i < arrayGenero.length; i++) {
        var nameGenero = arrayGenero[i].name
        var idGenero = arrayGenero[i].id
        document.querySelector(".genero").innerHTML += '<a href=listaGeneros.html?idGenero=' + idGenero + '&genero='+nameGenero+'>' + '<span class=titulo> </span>'+nameGenero + ',' + '</a>'
      }
      var arrayGenero = peliDetalle.spoken_languages
      for (var i = 0; i < arrayGenero.length; i++) {
        var languaje = arrayGenero[i].name
        document.querySelector(".lng").innerHTML +=  languaje+', '
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })

  //TRAILER
  fetch("https://api.themoviedb.org/3/movie/"+idPeli+"/videos?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES")
    .then(function(respuesta) {
      return respuesta.json()
      console.log(respuesta);
    })
    .then(function(informacion) {
      var peli = informacion.results
      var nombre = peli.name
      var id = peli[0].key
      var url = 'https://www.youtube.com/embed/' + id
      var li;
      li = '<iframe width="560" height="315" src='+ url+' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

      document.querySelector(".mov-vid").innerHTML += li

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })

      //RELACIONADAS
      fetch("https://api.themoviedb.org/3/movie/"+idPeli+"/similar?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES&page=1")
      .then(function(data) {
        return data.json()
        console.log(data);
      })
      .then(function(informacion) {

        var related = informacion.results
        for (var i = 0; i < related.length; i++) {
          var png = related[i].poster_path;
          var id = related[i].id
          var nombre = related[i].title
          li = '<li>'
          li += '<a href=detalleSerie.html?idPeli=' + id + '><img src='+'https://image.tmdb.org/t/p/w185'+png+'></a>'
          li += '<div class='+'uk-position-center uk-panel'+'</div>'
          li += '</li>'
          document.querySelector(".related").innerHTML += li
        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })



    //ESTO ES Generos
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
}
