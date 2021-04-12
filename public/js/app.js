// document.addEventListener('click', music);

function music() {
    document.querySelector('audio').play()
    document.removeEventListener('click', music)
}