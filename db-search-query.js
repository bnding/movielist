var myKey = "?api_key=e4e9e04c03e2d95d7a34af57b478c084";
var baseMovieURL = "https://api.themoviedb.org/3/search/movie";
var query = "&query=";
var movieID = "/";
var jsonURL = baseMovieURL + myKey + "&query="
var currentQuery;
var movies = new Array();
var json


$(document).ready(function(){
	

	//USE COOKIES WHEN WEBSITE UP
	$("#searchButton").click(function(){
		// var specificMovie = "https://api.themoviedb.org/3/movie" + movieID + json.results[0].id + myKey;
		var moviesSearch = jsonURL+value;

					// window.location.href = "newpage.html"; this changes the page on the current site
					localStorage.setItem("nameSelection", JSON.stringify(json));
					window.open("newpage.html", "_blank"); //this opens the new page on a new tab
					// window.open(moviesSearch, "_blank");
					// window.focus(); //opens the new page and also has the page focus on the new tab
				});
	$('#searchTerm').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#searchButton').click();//Trigger search button click event
        }
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
						json = jsonOut
						movies.push(jsonOut.results[i].original_title)
					}

				});
				$("#searchTerm").autocomplete({
					source: movies

				})

			});
});

