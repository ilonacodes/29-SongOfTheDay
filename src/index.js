var song = document.querySelector('#song');
var playButton = document.querySelector('#play-pause');
var playIcon = document.querySelector('i');
var currentTimeElem = document.querySelector('.current');

var isPlaying = false;

function toggle() {
    if (isPlaying) {
        song.pause();
    } else {
        song.play();
    }
}

function formatTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = Math.floor(timeInSeconds % 60);

    if (seconds < 10 ) {
        return minutes + ' : ' + '0' + seconds;
    } else {
        return minutes + ' : ' + seconds;
    }
}

song.onplaying = function () {
    isPlaying = true;

    playIcon.classList.remove('fa-play-circle-o');
    playIcon.classList.add('fa-pause-circle-o');
};

song.onpause = function () {
    isPlaying = false;

    playIcon.classList.remove('fa-pause-circle-o');
    playIcon.classList.add('fa-play-circle-o');
};

song.addEventListener('timeupdate', function (e) {
    currentTimeElem.innerHTML = formatTime(this.currentTime);
});

playButton.addEventListener('click', function (e) {
    toggle();
});

