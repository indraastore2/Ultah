const tombolLucu = document.getElementById('tombol-lucu');
const tombolMusik = document.getElementById('tombol-musik');
const tombolFoto = document.getElementById('tombol-foto');
const ucapanElement = document.getElementById('ucapan');
const backsongContainer = document.getElementById('backsong-container');
const gambarWrapper = document.getElementById('gambar-wrapper');
const giftPopup = document.getElementById('gift-popup');
const mainContent = document.getElementById('main-content');

// --- FUNGSI BARU: BUKA KADO ---
window.openGift = function() {
    // 1. Sembunyikan pop-up dengan efek transisi
    giftPopup.style.opacity = '0';
    giftPopup.style.visibility = 'hidden';

    // 2. Tampilkan konten utama setelah transisi (atau segera)
    setTimeout(() => {
        mainContent.style.display = 'flex'; // Tampilkan konten utama
        giftPopup.style.display = 'none'; // Pastikan pop-up tersembunyi total
    }, 500); // 500ms agar transisi CSS terlihat
};

// URL YouTube Embed untuk musik
const YOUTUBE_ID = '7Y93IpNkpfI';
const YOUTUBE_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_ID}&controls=0`;


// --- FUNGSI MUSIK ---
tombolMusik.addEventListener('click', function() {
    // 1. Buat iframe secara dinamis
    const iframeCode = `
        <iframe 
            width="0" 
            height="0" 
            src="${YOUTUBE_URL}" 
            frameborder="0" 
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;

    backsongContainer.innerHTML = iframeCode;
    tombolMusik.style.display = 'none';
});

// --- FUNGSI TOMBOL FOTO (BARU) ---
if (tombolFoto && gambarWrapper) {
    tombolFoto.addEventListener('click', function() {
        // Cek status display saat ini
        if (gambarWrapper.style.display === 'flex') {
            // Jika sedang ditampilkan, sembunyikan
            gambarWrapper.style.display = 'none';
            tombolFoto.textContent = '🖼️ Foto-Foto';
        } else {
            // Jika sedang disembunyikan, tampilkan (menggunakan flex)
            gambarWrapper.style.display = 'flex';
            tombolFoto.textContent = '❌ Sembunyikan Foto';
        }
    });
}

// Daftar ucapan lucu alternatif
const ucapanAlternatif = [
    "Selamat ulang tahun Alya Sayangku! ",
    "Happy birthday, sayang! Setiap tahun bersamamu adalah anugerah, dan hari ini adalah hari untuk merayakannya dengan penuh cinta",
    "Selamat bertambah usia untuk Wanita cantik yang mengisi hari-hariku dengan senyuman. Sehat selalu dan semoga semua impianmu tercapai",
    "Semoga Kamu sehat selalu dan Hubungan kita juga terus selamanyaa❤️ 😉"
];

let counter = 0;

// Fungsi yang akan dijalankan saat tombol diklik
tombolLucu.addEventListener('click', function() {
    ucapanElement.innerHTML = ucapanAlternatif[counter];
    
    counter = (counter + 1) % ucapanAlternatif.length;

    if (counter === 0) {
        tombolLucu.textContent = "Sekian Terima Gajih HAHAHHAA";
    } else {
        tombolLucu.textContent = "Klik lagi!";
    }
});