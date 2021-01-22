// Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const inputs = player.querySelectorAll('.player__slider');

// Player Object
const playerObj = {
    // Play or Stop Player
  togglePlay: () => {
    video[video.paused ? 'play' : 'pause']();
  },
   //SpaceButton onPlay|onStop   
  spaceToggle: function(e) {
    if (e.keyCode == 32) this.togglePlay();
  },
   //Img for button play|pause   
  updateButton: (e) => {
    toggle.textContent = e.currentTarget.paused ? '►' : '❚❚';
  },
  // Skip when skip buttons are clicked
  skip: (e) => {
    // Converts the data-skip attribute into a number and adds it to the current time
    video.currentTime += parseFloat(e.currentTarget.dataset.skip);
  },
  // playback rate or volume
  handleRangeUpdate: (e) => {
    video[e.currentTarget.name] = e.currentTarget.value;
  },
  // Show percentage of movie played
  handleProgress: () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  },
  scrub: (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    // Upd video
    video.currentTime = scrubTime;
  },
  init: () => {
    // When video or toggle button is clicked,- start or stop playback
      video.addEventListener('click', playerObj.togglePlay);
      toggle.addEventListener('click', playerObj.togglePlay);

    // When spaceBtn is clicked, start or stop playback;
    document.addEventListener('keypress', playerObj.spaceToggle.bind(playerObj));

    // When video is played or paused, - change the play/pause icon:
    video.addEventListener('play', playerObj.updateButton);
    video.addEventListener('pause', playerObj.updateButton);

    // Skip video when skip buttons are clicked:
    skipButtons.forEach(button => button.addEventListener('click', playerObj.skip));

    // playback rate or volume:
    inputs.forEach(input => input.addEventListener('change', playerObj.handleRangeUpdate));

    // Update video progress:
    video.addEventListener('timeupdate', playerObj.handleProgress);

    // Scrub progress bar left or right:
    let mousedown = false;
    progress.addEventListener('click', playerObj.scrub);

    // If the mouse is down, run scrub function:
    progress.addEventListener('mousemove', (e) => mousedown && playerObj.scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
  }
}

playerObj.init();