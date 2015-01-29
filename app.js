// Quetions: how to make it clean after a search

function getMovieTitle (title) {

	$.getJSON("http://www.omdbapi.com/?s=" + title, function (data) {
		console.log(data);

		if (data.Response === "False") {
				alert("no movies Dude");
			}

		for (var i = 0; i < data.Search.length; i++) {
			console.log(data.Search[i].Title);
			var listMovies = $("<li>" + (data.Search[i].Title) + "</li>");
			$("ul").append(listMovies);
	
		}
	}); 
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