var myKey = "?api_key=e4e9e04c03e2d95d7a34af57b478c084";
var baseMovieURL = "http://api.themoviedb.org/3/search/movie";
var query = "&query=";

var movieID = "/";

var jsonURL = baseMovieURL + myKey + "&query="

function activeSearchDB(){
	var jsonMovies = window.location.replace(jsonURL);

}

// https://api.themoviedb.org/3/movie/343611?api_key={api_key}



$(document).ready(function(){
	var value;
	var currentQuery;
	var movies = new Array();
	var jsonOut;


	$("#searchButton").click(function(){
					// alert(jsonOut[0].id);
					var movieSearchID = baseMovieURL+myKey+query+movies[0];
					// alert(movieSearchID);
					window.open(movieSearchID, "_blank");
					window.focus();
				});

	$("#searchTerm").keyup(function(){
				//turn to function
				movies = new Array();
				value = this.value;
				currentQuery = jsonURL + value;
				fetch(currentQuery)
				.then(function(response){
					return response.json();
				})
				.then(function(jsonOut){
					for(var i = 0; (i < jsonOut.total_results-1) & (jsonOut.results[i] != null); i++){
						movies.push(jsonOut.results[i].original_title)
						// console.log(movies);
					}
				});

				$("#searchTerm").autocomplete({
					source: movies

				})

			});


});


