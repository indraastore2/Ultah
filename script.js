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

// --- FUNGSI UNTUK ANIMASI HATI (BARU) ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️'; // Atau '💖', '💕'
    
    // Posisi acak di bagian bawah layar
    const startLeft = Math.random() * 100 + 'vw';
    heart.style.left = startLeft;
    
    // Variasi durasi dan delay agar terlihat lebih alami
    const animationDuration = Math.random() * 5 + 7; // Antara 7-12 detik
    const animationDelay = Math.random() * 2; // Delay antara 0-2 detik
    
    heart.style.animationDuration = `${animationDuration}s`;
    heart.style.animationDelay = `${animationDelay}s`;
    
    // Atur custom property CSS untuk posisi awal
    heart.style.setProperty('--start-left', startLeft);

    document.body.appendChild(heart);

    // Hapus hati setelah animasinya selesai untuk mencegah penumpukan DOM
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Panggil createHeart secara berkala
setInterval(createHeart, 800); // Setiap 0.8 detik, buat hati baru

const ucapanAwal = "Selamat ulang tahun Alya Sayangku..Senoga Dengan Hari Kelahiran kmu , Dapat menjadi diri yang lebih baik kedepannya";
// Daftar ucapan lucu alternatif
const ucapanAlternatif = [
    "Selamat ulang tahun Alya Sayangku..Semoga Dengan Hari Kelahiran kmu , Dapat menjadi diri yang lebih baik kedepannya",
    "Happy birthday, sayang! Setiap tahun bersamamu adalah anugerah, dan hari ini adalah hari untuk merayakannya dengan penuh cinta",
    "Selamat bertambah usia untuk Wanita cantik yang mengisi hari-hariku dengan senyuman. Sehat selalu dan semoga semua impianmu tercapai",
    "Semoga Kamu sehat selalu Dan Semoga dipermudah semua urusan kamu serta Hubungan kita juga terus selamanya I LOVE YOU❤️ 😉"
];

let counter = 1; 

// Fungsi yang akan dijalankan saat tombol diklik
tombolLucu.addEventListener('click', function() {
    // Pastikan tidak melampaui batas array
    if (counter < ucapanAlternatif.length) {
        // Tampilkan ucapan berikutnya
        ucapanElement.innerHTML = ucapanAlternatif[counter];
        counter++;
        tombolLucu.textContent = "Klik lagi!";
        
        // Cek jika ini adalah ucapan terakhir yang ditampilkan
        if (counter === ucapanAlternatif.length) {
            tombolLucu.textContent = "Sekian Terima Gajih HAHAHHAA";
        }
    } else {
        // Jika sudah mencapai akhir, kembali ke ucapan pertama (index 0)
        counter = 1; // Reset counter untuk mengambil ucapan di index 1 pada klik berikutnya
        ucapanElement.innerHTML = ucapanAlternatif[0]; // Tampilkan ucapan awal
        tombolLucu.textContent = "Ulangi Ucapan/Klik lagi!";
    }

});
