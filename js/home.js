

window.onload = function() {
 loadPopular();
 loadMostRated();
 loadLiveToday();
}

function loadPopular() {
  const carrousel = document.getElementById("carrousel-popular");
  
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=e31dd59fefbc10e65215ecd077762f57&language=en-US&page=1")
  .then(function(res) {
      return res.json()
  })
  .then(function(res) {
      const shows = res.results;
      shows.forEach(function(show) {

          const li = document.createElement("a");
          li.href = `detalleSerie.html?idPeli=${show.id}`

          const panel = document.createElement("div"); 
          panel.classList.add("uk-panel");

          const img = document.createElement("img");
           // abro signo de pesos para poner variable = poster path
          img.src = `https://image.tmdb.org/t/p/original${show.poster_path}`;

          const titlePanel = document.createElement("div");
          titlePanel.classList.add("uk-position-center", "uk-panel");
          titlePanel.style.background = 'rgba(133, 11, 11, 0.6)'
          titlePanel.style.padding = 5;
          

          const title = document.createElement("h1");
          title.innerHTML = show.name;

          // los compongo
          titlePanel.appendChild(title);

          panel.appendChild(titlePanel);
          panel.appendChild(img);
          li.appendChild(panel);

          carrousel.appendChild(li);

      })
  })

}


function loadMostRated() {
  const carrousel = document.getElementById("carrousel-mayorpuntaje");
  
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=e31dd59fefbc10e65215ecd077762f57&language=en-US&page=1")
  .then(function(res) {
      return res.json()
  })
  .then(function(res) {
      const shows = res.results;
      shows.forEach(function(show) {

          const li = document.createElement("a");
          li.href = `detalleSerie.html?idPeli=${show.id}`

          const panel = document.createElement("div"); 
          panel.classList.add("uk-panel");

          const img = document.createElement("img");
           // abro signo de pesos para poner variable = poster path
          img.src = `https://image.tmdb.org/t/p/original${show.poster_path}`;

          const titlePanel = document.createElement("div");
          titlePanel.classList.add("uk-position-center", "uk-panel");
          titlePanel.style.background = 'rgba(133, 11, 11, 0.6)'
          titlePanel.style.padding = 5;
          

          const title = document.createElement("h1");
          title.innerHTML = show.name;

          // los compongo
          titlePanel.appendChild(title);

          panel.appendChild(titlePanel);
          panel.appendChild(img);
          li.appendChild(panel);

          carrousel.appendChild(li);

      })
  })

}

function loadLiveToday() {
  const carrousel = document.getElementById("carrousel-alairehoy");
  
  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=e31dd59fefbc10e65215ecd077762f57&language=en-US&page=1")
  .then(function(res) {
      return res.json()
  })
  .then(function(res) {
      const shows = res.results;
      shows.forEach(function(show) {

          const li = document.createElement("a");
          li.href = `detalleSerie.html?idPeli=${show.id}`

          const panel = document.createElement("div"); 
          panel.classList.add("uk-panel");

          const img = document.createElement("img");
           // abro signo de pesos para poner variable = poster path
          img.src = `https://image.tmdb.org/t/p/original${show.poster_path}`;

          const titlePanel = document.createElement("div");
          titlePanel.classList.add("uk-position-center", "uk-panel");
          titlePanel.style.background = 'rgba(133, 11, 11, 0.6)'
          titlePanel.style.padding = 5;
          

          const title = document.createElement("h1");
          title.innerHTML = show.name;

          // los compongo
          titlePanel.appendChild(title);

          panel.appendChild(titlePanel);
          panel.appendChild(img);
          li.appendChild(panel);

          carrousel.appendChild(li);

      })
  })

}