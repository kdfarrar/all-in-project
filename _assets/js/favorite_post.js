function favoritePost() {
	var post = document.body;
	post.classList.toggle("favorite"); 		// toggle red border around button

	var favString = getFavorites();

	if (favString !== null) {
		favString += "," + JSON.stringify(postInfo);
	}
	else {
		favString = JSON.stringify(postInfo);
	}

	localStorage.removeItem("favorites");
	localStorage.setItem("favorites", favString);
}

function getFavorites() {
	var savedFavs = localStorage.getItem("favorites");
	return savedFavs;
}

function showFavorites() {
	var myFavorites = document.getElementById("myFavorites");
	var favText = "";
	var favPosts = getFavorites();

	// for (i = 0; i < favPosts.length; i++) {
	// 	favText += favPosts;
	// }

	myFavorites.innerHTML += favPosts;
}
