import './style.css'
const videoElement = document.getElementById('video') as HTMLVideoElement;
const button = document.getElementById('button') as HTMLButtonElement;
//Prompt to select video stream , pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream: MediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        alert(err)
    }
}
button.addEventListener('click', async () => {
    //Disable button
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    // reset button 
    button.disabled = false
})
selectMediaStream()
