
const introVid = document.querySelector('.intro video')
const videoStateButton = document.querySelector('.vid_ctnr .play_state')
const soundStateButton = document.querySelector('.vid_ctnr .sound_state')
// let isPlaying = false;

introVid.addEventListener('click', togglePlayState)
videoStateButton.addEventListener('click', togglePlayState)

function togglePlayState() {
    if(introVid.paused) {
        introVid.play()
        introVid.muted = false;

        videoStateButton.style.backgroundImage = 'url("/icons/play.svg")';
        videoStateButton.style.cursor = 'default'

        videoStateButton.style.animation = 'unset'
        setTimeout(() => {
        videoStateButton.style.animation = 'fade_bt 0.6s forwards'
        }, 200);

    } else {
        introVid.pause()

        videoStateButton.style.backgroundImage = 'url("/icons/pause.svg")';

        videoStateButton.style.animation = 'unset'
        videoStateButton.style.cursor = 'pointer'

        setTimeout(() => {
        videoStateButton.style.animation = 'fade_bt 0.6s forwards'
        }, 200);
    }
}

soundStateButton.addEventListener('click', function() {
    if(introVid.muted == false) {
        introVid.muted = true;

        soundStateButton.style.backgroundImage = 'url("/icons/sound-off.svg")';
    } else if(introVid.muted == true) {
        console.log('dandkasmsd')
        introVid.muted = false;

        soundStateButton.style.backgroundImage = 'url("/icons/sound-on.svg")';
    }
})