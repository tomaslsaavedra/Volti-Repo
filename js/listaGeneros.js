var imgsContainer = document.querySelector('#imgs_container');

var queryString = new URLSearchParams(location.search);
var palabra = queryString.get('search_word') || queryString.get('categories');

var url = `https://api.themoviedb.org/3/genre/tv/list?api_key=e31dd59fefbc10e65215ecd077762f57&language=en-US`;

console.log('https://api.themoviedb.org/3/genre/tv/list?api_key=e31dd59fefbc10e65215ecd077762f57&language=en-US');

fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=e31dd59fefbc10e65215ecd077762f57&language=en-US')
	.then(function (res) {
		return res.json();
	})
	.then(function (informacion) {

		console.log(informacion);

		var imagesArray = informacion.data;

		if (imagesArray.length > 0) {
			for (var oneImg of imagesArray) {
				var imgId = oneImg.id;
				var imgSrc = oneImg.images.downsized.url;
				imgsContainer.innerHTML += `
				<div class="img-wrapper">
					<a href="detalle-gif.html?idGif=${imgId}">
						<img src="${imgSrc}" alt="lorem ipsum">
					</a>
				</div>
			`;
			}
		} else {
			alert('¡No se encontró nada!');
			location.href = 'buscador.html';
		}

	})
	.catch(function (errors) {
		console.log(errors);
	});
