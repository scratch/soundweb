var hoverOnFlag = document.getElementById("mainpage_flag");
var hoverOnOcean = document.getElementById("mainpage_ocean");
var audioPlayingFlg = 0;
var audioPlayingID;


// Hide help by default and display only a circular question mark.
document.getElementById("help-block").style.visibility = "hidden";

var helpBlock = document.getElementById("question-block");
helpBlock.onclick = function()  {
	document.getElementById("help-block").style.visibility = "visible";
}


// TODO: Pause / play should be a fn, called after simply setting ID.

hoverOnFlag.onclick=function()  {   // TODO: As the name implies, work on hover, not click
	var whitePlay = document.getElementById("white_play");
	
	// Bug: If playing a different song and click here, should stop the previous song
	// and play this song; currently, click is a toggle
    if (audioPlayingFlg == 0) { 
		whitePlay.play();
		audioPlayingFlg = 1;
	} else  {
		audioPlayingID.pause();
		audioPlayingFlg = 0;
	}
			
	audioPlayingID = whitePlay;

}


hoverOnOcean.onclick=function()  {   // TODO: As the name implies, work on hover, not click
	var oceanPlay = document.getElementById("ocean_play");
	
	// Bug: If playing a different song and click here, should stop the previous song
	// and play this song; currently, click is a toggle
    if (audioPlayingFlg == 0) { 
		oceanPlay.play();
		audioPlayingFlg = 1;
	} else  {
		audioPlayingID.pause();
		audioPlayingFlg = 0;
	}
	
	audioPlayingID = oceanPlay;
}
