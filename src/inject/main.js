function onPlayerStateChanged(newState) {
// -1 (unstarted)
// 0 (ended)
// 1 (playing)
// 2 (paused)
// 3 (buffering)
// 5 (video cued).
	console.log(newState);
	if (newState == 1) { // TODO: Optimize
		to_query = "https://10.109.57.159:5000/query?link=" + window.location.href.substr(32, 38);
		console.log(window.location.href.substr(32, 38));
	    var xhttp = new XMLHttpRequest();
	    xhttp.open("GET", to_query, false);
    	xhttp.send();
    	var response = JSON.parse(xhttp.responseText);
    	if (response) {
    		console.log(response);
			player.innerHTML = "<video width='640' height='360' id='my-video' class='video-js' controls preload='auto' width='640' height='264' data-setup='{ 'autoplay': true}'><source src='http://10.109.57.159:8000/MY_VIDEO.mp4' type='video/mp4'></video>";
    	}
    	console.log(response);
	}
}

function run_now() {
	if (player == document.getElementById('movie_player'))
		return;
	player = document.getElementById('movie_player');
	player.addEventListener("onStateChange", "onPlayerStateChanged");
}
run_now();
