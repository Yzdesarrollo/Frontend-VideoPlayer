const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    //alert('Led diste clic a play');
}

function handlePause(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    //alert('Led diste clic a play');
}

function handleBackward() {
    //$video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
    //alert(`Atras 10 seg ${$video.currentTime}`); //Tiempo actual del video
    
}

function handleForward() {
    //$video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
    //alert(`Atras 10 seg ${$video.currentTime}`);
}

function handleLoaded() {
    $progress.max = $video.duration
    //alert(`Video cargado ${$video.duration}`);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
    //alert(`Tiempo actual: ${$video.currentTime}`);
    
}

function handleInput() {
    $video.currentTime = $progress.value;
}

