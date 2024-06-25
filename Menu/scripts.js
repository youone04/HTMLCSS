let lastScrollTop = 0;
const menu = document.getElementById('menu');
const menuBanner = document.getElementById('menu-banner');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop)

    if (scrollTop <= 0) {
        // User scrolls up
        menu.style.display = 'none';
        menuBanner.style.display ='block'
    } else {
        // User scrolls down
        menu.style.display = 'block';
        menuBanner.style.display = 'none'
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);


// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://youtu.be/9sNQFJAb3Ss?si=i6TRY6tqlEunv_vd";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'YOUR_VIDEO_ID', // Ganti dengan ID video YouTube Anda
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'YOUR_VIDEO_ID', // Ganti dengan ID video YouTube Anda untuk loop
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            mute: 1,
            rel: 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}
