/* Sound functionality on hover
 * Bug: Currently works on mouse click; unsure of design with hover.
 * a) How long should user hover before 'song' changes?
 * b) How to set "theme song"
 */

var hoverOnFlag = document.getElementById('io_main-content');
var hoverOnOcean = document.getElementById('io_footer-block');

var g_posx = 0, g_posy = 0;
var audioPlayingID = 0;

document.addEventListener('click', GetPos, true);
// hoverOnFlag.addEventListener('click', GetPos, true);
function GetPos(e) {
    // BUG: Assume that the click did not happen on the ocean.
    var xpos = hoverOnFlag.offsetLeft - hoverOnFlag.scrollLeft;
    var ypos = hoverOnFlag.offsetHeight - hoverOnFlag.scrollTop;

    // BUG. Will not work on IE-8.
    g_posx = e.clientX - xpos;
    g_posy = e.clientY = ypos;
    
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

function PlayMuse() {
    if (audioPlayingID != 0)
        audioPlayingID.pause();

    audioPlayingID = GetMuseToPlay();

    audioPlayingID.play();
}

// TODO: Pause / play should be a fn, called after simply setting ID.
hoverOnFlag.onclick = function() {// TODO: As the name implies, work on hover, not click
    // var xy = GetCoordinates();
    PlayMuse();
}



hoverOnFlag.ondblclick = function() {
    if (document.getElementById("aboutus-menu") == null) {
        var anchorElem = document.createElement('a');
        var imgElem = document.createElement('img');

        imgElem.setAttribute('id', 'aboutus-menu');
        imgElem.setAttribute('class', 'img-circle');
        imgElem.setAttribute('src', 'img/about_indian_ocean2.jpg');
        imgElem.setAttribute('alt', 'About Us');
        anchorElem.appendChild(imgElem);
        hoverOnFlag.appendChild(anchorElem);
        /* getContext returns "undefined function"
        ctx = hoverOnFlag.getContext('2d');
        ctx.drawImage ('img/about_indian_ocean2.jpg', g_posx, g_posy);
        */       


    }
}
// TODO: As the name implies, work on hover, not click
hoverOnOcean.onclick = function() {
    var oceanPlay = document.getElementById('ocean-play');

    if (audioPlayingID != 0) {
        audioPlayingID.pause();
    }

    audioPlayingID = oceanPlay;
    audioPlayingID.play();
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



var soundOffIcon = document.getElementById('soundoff-icon');
soundOffIcon.onclick = function() {
    if (audioPlayingID != 0)
        audioPlayingID.pause();
}

