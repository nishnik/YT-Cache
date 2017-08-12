function run_now() {
	if (player == document.getElementById('movie_player'))
		return;
	player = document.getElementById('movie_player');
	player.addEventListener("onStateChange", "onPlayerStateChanged");
}
run_now();

function onPlayerStateChanged(newState) {
// -1 (unstarted)
// 0 (ended)
// 1 (playing)
// 2 (paused)
// 3 (buffering)
// 5 (video cued).
	if (newState == -1) {
		console.log(window.location.href);		
	}
}

