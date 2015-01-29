// Quetions: how to make it clean after a search
// it all starts at bottom

function getMovieTitle (title) {

	$.getJSON("http://www.omdbapi.com/?s=" + title, function (data) {
		console.log(data);

		if (data.Response === "False") {
				alert("no movies Dude");
			}

		for (var i = 0; i < data.Search.length; i++) {
			console.log(data.Search[i].Title);
			var listMovies = $("<li> <span>" + (data.Search[i].Title) + "</span> <button>get poster</button>" + "</li>");

		//	var listMovies = $("<li>" + "<a href='" + url + "'>" + (data.Search[i].Title) + "</a>" + "</li>");

			$("ul").append(listMovies);
			
		}
		pushPoster(title);
	}); 

	function pushPoster (title) {

		$("body").on("click", "button", function (e) {
		e.preventDefault();
		var exactMovie = $(this).prev().text();
		console.log("we will grab" + exactMovie);
		
		$.getJSON("http://www.omdbapi.com/?r=json&t=" + exactMovie, function (data) {
				console.log(data.Poster);
				var moviePoster = $("<img>").attr("src", data.Poster);
				$("body").append(moviePoster);
				

		}) ;


	});


		
	}

//closes movieTitle function:
}


function listenForMovieTitle() {
	$("form").on("submit", function (e) {
		e.preventDefault();
		$("li").remove();
		var movieTitle = $("#movieTitle").val();
		// also worth to try: this.movieTitle.value();
		console.log("Chech if this shows " + movieTitle);
		getMovieTitle(movieTitle);
		$("#movieTitle").val("");
		});
	}



$(document).ready(listenForMovieTitle);