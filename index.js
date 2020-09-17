const shareButton = document.getElementById('share-button-container');
const shareBubble = document.getElementById('share-group');

const changeState = () => {
    shareBubble.classList.toggle('hidden');
    shareButton.classList.toggle('share-button-active')
    shareButton.classList.contains('share-button-active') ?
        shareButton.childNodes[1].src = 'images/icon-share-active.svg' :
        shareButton.childNodes[1].src = '/images/icon-share.svg';
}
shareButton.addEventListener('click', changeState);