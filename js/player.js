// ==============================
// PLAYER LOGIC
// ==============================

let audio = new Audio();
let playing = false;
let currentSong = 0;

// DOM Elements
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playButton = document.getElementById("playButton");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("current");
const duration = document.getElementById("duration");
const volume = document.getElementById("volume");
const playlist = document.getElementById("playlist");

/**
 * Load lagu berdasarkan index
 * @param {number} index - Index dari lagu di array
 */
function loadSong(index) {
  currentSong = index;
  const song = songs[index];

  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.file;
  audio.volume = volume.value;

  updatePlaylist();
}

/**
 * Mainkan lagu
 */
function playSong() {
  audio.play();
  playing = true;
  playButton.textContent = "❚❚";
  cover.classList.add("playing");
}

/**
 * Pause lagu
 */
function pauseSong() {
  audio.pause();
  playing = false;
  playButton.textContent = "▶";
  cover.classList.remove("playing");
}

/**
 * Toggle play/pause
 */
function togglePlay() {
  if (playing) {
    pauseSong();
  } else {
    playSong();
  }
}

/**
 * Lagu berikutnya
 */
function nextSong() {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }
  loadSong(currentSong);
  playSong();
}

/**
 * Lagu sebelumnya
 */
function previousSong() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }
  loadSong(currentSong);
  playSong();
}

/**
 * Format waktu dari detik menjadi MM:SS
 * @param {number} seconds - Waktu dalam detik
 * @returns {string} - Format MM:SS
 */
function formatTime(seconds) {
  if (isNaN(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${secs}`;
}

// ==============================
// EVENT LISTENERS
// ==============================

/**
 * Update progress bar saat lagu dimainkan
 */
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
  currentTime.textContent = formatTime(audio.currentTime);
});

/**
 * Set durasi lagu setelah metadata loaded
 */
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});

/**
 * Ubah current time saat progress bar di-drag
 */
progress.addEventListener("input", () => {
  if (!audio.duration) return;
  audio.currentTime = (progress.value / 100) * audio.duration;
});

/**
 * Ubah volume audio
 */
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

/**
 * Mainkan lagu berikutnya saat lagu selesai
 */
audio.addEventListener("ended", () => {
  nextSong();
});