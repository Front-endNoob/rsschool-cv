// Elements and Variables
const appButtons = document.querySelector('.app__buttons');
const muteBtn = document.querySelector('.mute');
const pauseBtn = document.querySelector('img');
const pauseBorder = document.querySelector('.btn.pause')
const dataBtns = document.querySelectorAll('.data');
const video = document.querySelector('.video');
const app = document.querySelector('.app');
const wrapper = document.querySelector('.wrapper');
let audio = new Audio("./src/audio/nature.mp3");

let data = [{
        audio: "./src/audio/nature.mp3",
        video: "src/video/Nature-1920x.mp4"
    },

    {
        audio: "./src/audio/beach.mp3",
        video: "src/video/beach-1920x.mp4"
    },

    {
        audio: "./src/audio/rain.mp3",
        video: "src/video/rain.mp4"
    },

    {
        audio: "./src/audio/nebula.mp3",
        video: "src/video/nebula-1920x.mp4"
    },

]

video.pause();


// This Events for elements
appButtons.addEventListener('click', event => {

    // Button mute event 
    if (event.target.classList.contains('mute')) {
        muteBtn.classList.toggle('active');
        switch (audio.volume) {
            case 0:
                audio.volume = 1;
                break;
            default:
                audio.volume = 0;
                break;
        }

    }

    // Event for switching background and music
    if (event.target.classList.contains('data')) {

        // This animated transition
        app.animate([{ opacity: 0.2 },
                { opacity: 0, offset: 0.3 },
                { opacity: 1 }
            ],
            2500);

        // Timer in support of animated transition
        setTimeout(() => {

            dataBtns.forEach(el => el.classList.remove('active_data'));
            muteBtn.classList.remove('active');
            pauseBorder.classList.add('play');
            event.target.classList.add('active_data');
            video.classList.add('onVideo');
            audio.pause();
            pauseBtn.src = "https://img.icons8.com/fluent-systems-filled/24/000000/circled-pause.png";

            if (event.target.classList.contains('beach')) {
                video.src = "src/video/beach-1920x.mp4"
                audio = new Audio(data[1].audio);
                audio.play()
            } else if (event.target.classList.contains('nature')) {
                video.src = "src/video/Nature-1920x.mp4"
                audio = new Audio(data[0].audio);
                audio.play()
            } else if (event.target.classList.contains('rain')) {
                video.src = "src/video/rain.mp4"
                audio = new Audio(data[2].audio);
                audio.play()
            } else if (event.target.classList.contains('nebula')) {
                video.src = "src/video/nebula-1920x.mp4"
                audio = new Audio(data[3].audio);
                audio.play()
            }

        }, 500)

    }

    // Event for the pause button and its work
    if (event.target.classList.contains('pause')) {
        pauseBorder.classList.toggle('play')
        switch (event.target.src) {
            case "https://img.icons8.com/fluent-systems-filled/24/000000/circled-pause.png":
                event.target.src = "https://img.icons8.com/fluent-systems-filled/24/000000/google-play.png"
                audio.pause();
                if (video.src !== "") {
                    video.pause();
                }

                break;
            case "https://img.icons8.com/fluent-systems-filled/24/000000/google-play.png":
                event.target.src = "https://img.icons8.com/fluent-systems-filled/24/000000/circled-pause.png"
                video.play();
                audio.play();
                break;
        }
    }

})

// Control panel animation

appButtons.addEventListener('mouseout', (el) => {

    if (el.toElement.classList.contains('video') || el.toElement.classList.contains('wrapper')) {

        appButtons.animate([{ opacity: 1 },
                { opacity: 0.5, offset: 0.3 },
                { opacity: 0 }
            ],
            1000);
        appButtons.classList.add('none')
    }

})

wrapper.addEventListener('mouseover', (el) => {
    console.dir(el)
    if (el.toElement.classList.contains('none')) {

        appButtons.animate([{ opacity: 0.9},
                { opacity: 0.95, offset: 0.5 },
                { opacity: 1 }
            ],
            200);
        appButtons.classList.remove('none')
    }
})
