/* Sound functionality on hover 
 * Bug: Currently works on mouse click; unsure of design with hover.
 * a) How long should user hover before 'song' changes?
 * b) How to set "theme song" 
 */
 
var hoverOnFlag = document.getElementById("mainpage_flag");
var hoverOnOcean = document.getElementById("mainpage_ocean");
var audioPlayingFlg = 0;
var audioPlayingID;

// TODO: Pause / play should be a fn, called after simply setting ID.
hoverOnFlag.onclick = function() {// TODO: As the name implies, work on hover, not click
	var whitePlay = document.getElementById("white_play");

	// Bug: If playing a different song and click here, should stop the previous song
	// and play this song; currently, click is a toggle
	if (audioPlayingFlg == 0) {
		whitePlay.play();
		audioPlayingFlg = 1;
	} else {
		audioPlayingID.pause();
		audioPlayingFlg = 0;
	}

	audioPlayingID = whitePlay;

}


hoverOnFlag.ondblclick = function()  {
	var anchorElem = document.createElement ("a");
	var imgElem = document.createElement ("img");

	imgElem.setAttribute ("id", "aboutus_menu");
	imgElem.setAttribute ("src", "img/about_indian_ocean2.jpg");
	imgElem.setAttribute ("alt", "About Us");
	anchorElem.appendChild(imgElem);	
	hoverOnFlag.appendChild (anchorElem);
}

hoverOnOcean.onclick = function() {// TODO: As the name implies, work on hover, not click
	var oceanPlay = document.getElementById("ocean_play");

	// Bug: If playing a different song and click here, should stop the previous song
	// and play this song; currently, click is a toggle
	if (audioPlayingFlg == 0) {
		oceanPlay.play();
		audioPlayingFlg = 1;
	} else {
		audioPlayingID.pause();
		audioPlayingFlg = 0;
	}

	audioPlayingID = oceanPlay;
}


// Hide help by default and display only a circular question mark.
document.getElementById("help-block").style.visibility = "hidden";

var helpBlock = document.getElementById("question-icon");
helpBlock.onclick = function() {
	if (document.getElementById("help-block").style.visibility == "visible")
		document.getElementById("help-block").style.visibility = "hidden";
	else
		document.getElementById("help-block").style.visibility = "visible";
}


