
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate',  throttle( onPlay => {
    localStorage.setItem('videoplayer-current-time', onPlay.seconds);
    }, 1000)
    );

player
.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.catch(function (error) {
    console.error(error)
});