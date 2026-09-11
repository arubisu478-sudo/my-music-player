# 🎵 My Music Player

Music player application dengan interface modern dan fitur lengkap.

## 📁 Struktur Project

```
my-music-player/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # Styling dan responsive design
├── js/
│   ├── player.js             # Player logic dan controls
│   ├── playlist.js           # Playlist data dan functions
│   └── script.js             # Initialization dan shortcuts
├── assets/
│   ├── images/
│   │   └── foto.jpg          # Cover image
│   └── music/
│       ├── music.mp3
│       ├── beso-beso.mp3
│       └── bounce-pa.mp3
├── .gitignore
└── README.md
```

## ✨ Fitur Utama

- ▶️ Play/Pause lagu
- ⏮️ Previous song
- ⏭️ Next song
- 🔊 Volume control
- 📊 Progress bar dengan time display
- 📝 Playlist dengan tampilan lagu aktif
- ⌨️ Keyboard shortcuts (Space, Arrow Keys)
- 📱 Responsive design untuk mobile

## 🎹 Keyboard Shortcuts

| Tombol | Fungsi |
|--------|--------|
| Space | Play/Pause |
| ← | Previous Song |
| → | Next Song |

## 🚀 Cara Memulai

1. **Clone repository**
```bash
git clone https://github.com/arubisu478-sudo/my-music-player.git
cd my-music-player
```

2. **Buka di VS Code**
```bash
code .
```

3. **Jalankan di browser**
   - Gunakan Live Server extension VS Code
   - Atau buka `index.html` langsung di browser

## 📝 Menambah Lagu Baru

Edit file `js/playlist.js` dan tambahkan lagu di array `songs`:

```javascript
const songs = [
  {
    title: "Nama Lagu",
    artist: "Nama Artist",
    file: "assets/music/nama-file.mp3"
  }
];
```

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3 (dengan CSS Variables)
- Vanilla JavaScript
- Web Audio API

## 👤 Author

arubisu478-sudo

## 📄 License

MIT License