/* Sound functionality on hover
 * Bug: Currently works on mouse click; unsure of design with hover.
 * a) How long should user hover before 'song' changes?
 * b) How to set "theme song"
 */

var hoverOnFlag = document.getElementById('io_main-content');
var hoverOnOcean = document.getElementById('io_footer-block');
var g_posx = 0, g_posy = 0;
var audioPlayingID = 0;



hoverOnFlag.addEventListener('click', GetPos, true);
function GetPos(e) {
	// BUG. Will not work on IE-8.
	g_posx = e.clientX;
	g_posy = e.clientY;

	console.log("position: %d", g_posy);
}

function GetMuseToPlay() {
	var play;

	if (g_posy < 150)
		play = document.getElementById('white-play');
	else if (g_posy >= 150 && g_posy < 300)
		play = document.getElementById('green-play');
	else if (g_posy >= 300)
		play = document.getElementById('orange-play');
		
	return play;
}


function PlayMuse() 
{
	if (audioPlayingID != 0)
		audioPlayingID.pause();
		
	audioPlayingID = GetMuseToPlay();

	audioPlayingID.play();
}

/*
function GetCoordinates(obj)
{
var posxy = document.addEventListener
}
*/

// TODO: Pause / play should be a fn, called after simply setting ID.
hoverOnFlag.onclick = function() {// TODO: As the name implies, work on hover, not click
	// var xy = GetCoordinates();
	PlayMuse();
}

hoverOnFlag.ondblclick = function() {
	var anchorElem = document.createElement('a');
	var imgElem = document.createElement('img');

	imgElem.setAttribute('id', 'aboutus-menu');
	imgElem.setAttribute('src', 'img/about_indian_ocean2.jpg');
	imgElem.setAttribute('alt', 'About Us');
	anchorElem.appendChild(imgElem);
	hoverOnFlag.appendChild(anchorElem);
}

hoverOnOcean.onclick = function() {// TODO: As the name implies, work on hover, not click
	var oceanPlay = document.getElementById('ocean-play');

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
var helpBlock = document.getElementById('io_help-block');
helpBlock.style.visibility = 'hidden';

var queIcon = document.getElementById('question-icon');
queIcon.onclick = function() {
	if (helpBlock.style.visibility == 'visible')
		helpBlock.style.visibility = 'hidden';
	else
		helpBlock.style.visibility = 'visible';
}

