import MediaPlayer from "./MediaPlayer";
import Autoplay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new AutoPause()]
});

const button : HTMLElement = document.querySelector("button");
button.onclick = () => player.togglePlay();

const button_mute : HTMLElement = document.getElementById("button_mute");
button_mute.onclick = () => player.unMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}
