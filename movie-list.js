$(document).ready(function(){
	var title;
	var json = localStorage.getItem("nameSelection");
	json = JSON.parse(json);
	$.each(json.results, function(index, value){
		title = json.results[index].title;
		//add more in the div by putting more tags before div ends
		$(".movies").append("<div id=" + title.replace(/\s+/g, '')+">"+title+"</div>");
	})
})