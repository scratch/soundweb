var hoverOnFlag = document.getElementById("mainpage_flag");
var audioPlayingFlg = 0;


hoverOnFlag.onclick=function()  {   // TODO: As the name implies, work on hover, not click
	var whitePlay = document.getElementById("white_play");
	
    if (audioPlayingFlg == 0) { 
		whitePlay.play();
		audioPlayingFlg = 1;
	} else  {
		whitePlay.pause();
		audioPlayingFlg = 0;
	}
}
