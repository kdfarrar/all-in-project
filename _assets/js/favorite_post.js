function checkFavorite() {
	var savedFavs = getFavorites();
	var post = document.body;

	if (savedFavs.includes(postInfo.url)) {
		post.classList.add("favorite");
	}
}

function favoritePost() {
	var post = document.body;
	var favString = getFavorites();

	post.classList.toggle("favorite"); // toggle red border around button

	if (post.classList.contains("favorite")) {
		if (favString !== null) {
			favString += "|" + JSON.stringify(postInfo);
		}
		else {
			favString = JSON.stringify(postInfo);
		}
	}
	// else {
	// 	favString = favString.split('|');
	//
	// 	spliceString = favString;
	// 	for (i = 0; i < spliceString.length; i++) {
	// 		if (JSON.parse(spliceString[i]).url !== postInfo.url) {
	// 			favString += "|" + spliceString.splice(i, 1);
	// 		}
	// 	}
	//
	// 	favString = JSON.stringify(favString);
	// }

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
	favPosts = favPosts.split("|");

	// prints each favorite as a title with a link to the post, the author, and publish date
	for (i = 0; i < favPosts.length; i++) {
		favText += "<strong><a href='" + JSON.parse(favPosts[i]).url + "'>" + JSON.parse(favPosts[i]).title + "</a></strong><br />";
		favText += JSON.parse(favPosts[i]).author + " | " + JSON.parse(favPosts[i]).date + "<br />";
	}

	myFavorites.innerHTML += favText;
}
