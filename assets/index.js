import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/AutoPlay.js';

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video, plugins:[
new Autoplay()
  ] });
 
  const button = document.querySelector('button');
  button.onclick = () => player.togglePlay();

  const button_mute = document.getElementById('button_mute');
  button_mute.onclick = () => player.unMute();