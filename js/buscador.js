var imgsContainer = document.querySelector('#imgs_container');

var queryString = new URLSearchParams(location.search);
var palabra = queryString.get('search_word') || queryString.get('categories');

var url = `https://api.themoviedb.org/3/movie/550?api_key=a1e2e77e06992c7268ba546a2ad533e9`;

console.log(url);

fetch(url)
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
