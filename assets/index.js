import MediaPlayer from "./MediaPlayer.js";
import Autoplay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new AutoPause()]
});

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

const button_mute = document.getElementById("button_mute");
button_mute.onclick = () => player.unMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}
