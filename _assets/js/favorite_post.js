function favoritePost() {
	var post = document.body;
	post.classList.toggle("favorite"); 		// toggle red border around button

	//var saveData = getFavorites();

	favoritePost.innerHTML += postInfo;

	//var favPosts = JSON.parse(saveData);
	var favString = "";

	// if (favPosts.length === 0) {
	// 	favString += postInfo;
	// }
	// else if (favPosts.has(postData) == false) {
	// 	favPosts += postInfo);
	// 	favString = JSON.stringify(favPosts);
	// }

	favoritePost.innerHTML += "<br/>" + favString;		//See what's in favString

	localStorage.removeItem("favorites");
	localStorage.setItem("favorites", favString);

	console.log(postInfo.author);
}

function getFavorites() {
	var savedFavs = localStorage.getItem("favorites");
	return savedFavs;
}

function showFavorites() {
	var myFavorites = document.getElementById("myFavorites");
	var favText = "";
	var favPosts = JSON.parse(getFavorites());

	for (var i = 0; i < favPosts.length; i++) {
		favText += favPosts[i].title + "<br />";
	}

	myFavorites.innerHTML += favPosts;
}
