$(document).ready(function(){


// $.get("http://api.giphy.com/v1/stickers/search?q=funny&api_key=dc6zaTOxFJmzC", render);
// // console.log(mockData.data.children[0]["data"]["thumbnail"]);

// $("body").append("<h1>Hello!</h1>");

$.get("mock_data.js", render(mockData));
function render(data){
	console.log(data);
	var children = data.data;
	children.forEach(function(item, i){
		var picture = item.images.fixed_height.url;
		$("#emptyTarget").append("<img src='" + picture + "'>");
	});
}

$("form").on("change", function(event){
  console.log("we made it to change");
  event.preventDefault();
  $("#emptyTarget").empty();
  $.getJSON("http://api.giphy.com/v1/gifs/search?q=" + event.target.value + "&api_key=dc6zaTOxFJmzC", function(data){
	// if(data===false){
	//	alert("Try searching with new paramaters.");
	// }
	var children = data.data;
	children.forEach(function(item, i){
		var picture = item.images.fixed_height.url;
		$("#emptyTarget").append("<img src='" + picture + "'>");
	});
  });
  
});
//var query = ('input').val();

});