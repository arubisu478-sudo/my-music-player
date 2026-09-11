// ==============================
// PLAYLIST DATA
// ==============================

const songs = [
  {
    title: "Piki Piki Breakbeat",
    artist: "Rian DTM",
    file: "assets/music/music.mp3"
  },
  {
    title: "Beso Beso Ay Mamá",
    artist: "Rian DTM",
    file: "assets/music/beso-beso.mp3"
  },
  {
    title: "Bounce & Pa BKB",
    artist: "Vian DTM",
    file: "assets/music/bounce-pa.mp3"
  }
];

// ==============================
// PLAYLIST FUNCTIONS
// ==============================

/**
 * Update tampilan playlist dengan lagu-lagu
 */
function updatePlaylist() {
  playlist.innerHTML = "";

  songs.forEach((song, index) => {
    const item = document.createElement("div");
    
    // Tambah class 'active' jika lagu sedang diputar
    item.className = "song" + (index === currentSong ? " active" : "");
    
    // Set HTML content
    item.innerHTML = `
      <div class="number">
        ${String(index + 1).padStart(2, "0")}
      </div>
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <div>▶</div>
    `;

    // Click untuk load dan play lagu
    item.onclick = () => {
      loadSong(index);
      playSong();
    };

    playlist.appendChild(item);
  });
}

/**
 * Tambah lagu baru ke playlist
 * @param {Object} song - Object lagu dengan properties: title, artist, file
 */
function addSong(song) {
  songs.push(song);
  updatePlaylist();
}

/**
 * Hapus lagu dari playlist
 * @param {number} index - Index lagu yang akan dihapus
 */
function removeSong(index) {
  if (index === currentSong && playing) {
    pauseSong();
  }
  
  songs.splice(index, 1);
  
  if (currentSong >= songs.length) {
    currentSong = songs.length - 1;
  }
  
  updatePlaylist();
}

/**
 * Dapatkan total jumlah lagu
 * @returns {number} - Total lagu
 */
function getTotalSongs() {
  return songs.length;
}

/**
 * Dapatkan lagu yang sedang dimainkan
 * @returns {Object} - Object lagu saat ini
 */
function getCurrentSong() {
  return songs[currentSong];
}