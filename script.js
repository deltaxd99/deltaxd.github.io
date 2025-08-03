// Data album dan foto-foto di dalamnya
const albumsData = [
    {
        name: "Shin Eun Soo",
        photos: [
            {
                url: "Eun Soo/ꕮ  ֹ  Eunsoo.jpeg",
                caption: "Di Restoran"
            },
            {
                url: "Eun Soo/download (1).jpeg",
                caption: "Di Sekolah"
            }
        ]
    },
    {
        name: "Baek Song Min",
        photos: [
            {
                url: "song min/mayay____y.jpeg",
                caption: ""
            },
            {
                url: "song min/download (2).jpeg",
                caption: ""
            }
        ]
    },
   

{
    name: "Go Yoon Jung",
    photos: [
        {
            url: "go youn jung/GO YOUNJUNG (@_goyounjung) on Instagram_.jpeg",
            caption: ""
        },
        {
            url: "go youn jung/go younjung.jpeg ",
            caption: ""
        }
    ]
},
{
    name: "Seorina",
    photos: [
        {
            url: "seol in ah/download (1).jpeg",
            caption: ""
        },
        {
            url: "seol in ah/Seol In-ah (설인아).jpeg",
            caption: ""
        }
    ]
},

// Tambahkan album/folder lain di sini!
    // {
    //      nama: "Seorina",
    //     photos: [
    //         {
    //             url: "URL Foto",
    //             caption: "Keterangan Foto"
    //         },
    //        
    //     ]
    // }
            
    // Tambahkan album/folder lain di sini!
];

// Tampilkan daftar album
function showAlbums() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('albums').style.display = 'grid';
    document.getElementById('backBtn').style.display = 'none';

    const albumsDiv = document.getElementById('albums');
    albumsDiv.innerHTML = '';
    albumsData.forEach((album, idx) => {
        const div = document.createElement('div');
        div.className = 'album';
        div.textContent = album.name;
        div.onclick = () => showGallery(idx);
        albumsDiv.appendChild(div);
    });
}

// Tampilkan galeri foto dalam album yang dipilih
function showGallery(albumIdx) {
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = '';
    const album = albumsData[albumIdx];
    album.photos.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'photo';
        div.innerHTML = `
            <img src="${photo.url}" alt="Foto album">
            <div class="caption">${photo.caption}</div>
        `;
        // Event klik untuk lightbox
        div.querySelector('img').onclick = () => openLightbox(photo.url, photo.caption);
        galleryDiv.appendChild(div);
    });
    document.getElementById('albums').style.display = 'none';
    galleryDiv.style.display = 'grid';
    document.getElementById('backBtn').style.display = 'block';
}

// Lightbox logic
function openLightbox(imgUrl, caption) {
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImg').src = imgUrl;
    document.getElementById('lightboxCaption').textContent = caption;
    lightbox.style.display = 'flex';
}

// Tutup lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightboxImg').src = "";
    document.getElementById('lightboxCaption').textContent = "";
}

// Klik tombol close
document.getElementById('closeLightbox').onclick = closeLightbox;

// Klik di luar gambar untuk tutup lightbox
document.getElementById('lightbox').onclick = function(e) {
    if (e.target === this) closeLightbox();
};

// Tombol kembali ke daftar album
document.getElementById('backBtn').onclick = showAlbums;

// Mulai dengan menampilkan album
showAlbums();