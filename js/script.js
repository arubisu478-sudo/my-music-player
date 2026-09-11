// ==============================
// MAIN INITIALIZATION
// ==============================

/**
 * Initialize aplikasi saat DOM loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  // Load lagu pertama
  loadSong(0);
  
  // Log untuk debugging
  console.log("Music Player initialized");
  console.log("Total songs:", getTotalSongs());
});

/**
 * Handle keyboard shortcuts
 */
document.addEventListener("keydown", (e) => {
  switch(e.code) {
    case "Space":
      e.preventDefault();
      togglePlay();
      break;
    case "ArrowRight":
      nextSong();
      break;
    case "ArrowLeft":
      previousSong();
      break;
  }
});