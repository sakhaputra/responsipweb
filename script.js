document.addEventListener('DOMContentLoaded', function() {
    const animeContainer = document.getElementById('anime-container');
    const favoritesList = document.getElementById('favorites-list');
    const exportButton = document.getElementById('export-favorites');
    const exportStatus = document.getElementById('export-status');
    
    let favorites = [];

    // Simulasi data anime dengan URL gambar dan episode (gantilah dengan pemanggilan API sebenarnya)
    const animeData = [
        { 
            id: 1, 
            title: 'One Piece', 
            genre: 'Action, Adventure', 
            studio: 'Toei Animation', 
            image: '73245.jpg',
            episodes: ['Episode 1: Im Luffy!', 'Episode 2: Enter Zoro', 'Episode 3: Morgan vs Luffy']
        },
        { 
            id: 2, 
            title: 'Attack on Titan', 
            genre: 'Action, Dark Fantasy', 
            studio: 'Wit Studio', 
            image: '47347.jpg',
            episodes: ['Episode 1: To You, 2000 Years Later', 'Episode 2: That Day', 'Episode 3: A Dim Light Amid Despair']
        },
        { 
            id: 3, 
            title: 'My Hero Academia', 
            genre: 'Superhero, Comedy', 
            studio: 'Bones', 
            image: '78745.jpg',
            episodes: ['Episode 1: Izuku Midoriya: Origin', 'Episode 2: What It Takes to Be a Hero', 'Episode 3: Roaring Muscles']
        },
        {
            id: 4,
            title: 'Demon Slayer',
            genre: 'Adventure, Dark Fantasy, Martial Arts',
            studio: 'ufotable',
            image: '99889.jpg',
            episodes: ['Episode 1: Cruelty', 'Episode 2: Trainer Sakonji Urokodaki', 'Episode 3: Sabito and Makomo']
        },
        {
            id: 5,
            title: 'Death Note',
            genre: 'Mystery, Psychological Thriller, Supernatural',
            studio: 'Madhouse',
            image: '9453.jpg',
            episodes: ['Episode 1: Rebirth', 'Episode 2: Confrontation', 'Episode 3: Dealings']
        },
        {
            id: 6,
            title: 'Fullmetal Alchemist: Brotherhood',
            genre: 'Adventure, Dark Fantasy, Steampunk',
            studio: 'Bones',
            image: '96541.jpg',
            episodes: ['Episode 1: Fullmetal Alchemist', 'Episode 2: The First Day', 'Episode 3: City of Heresy']
        },
        {
            id: 7,
            title: 'Naruto',
            genre: 'Adventure, Fantasy, Martial Arts',
            studio: 'Pierrot',
            image: '17405.jpg',
            episodes: ['Episode 1: Enter: Naruto Uzumaki!', 'Episode 2: My Name is Konohamaru!', 'Episode 3: Sasuke and Sakura: Friends or Foes?']
        },
        {
            id: 8,
            title: 'Steins;Gate',
            genre: 'Science Fiction, Thriller',
            studio: 'White Fox',
            image: '73199.jpg',
            episodes: ['Episode 1: Turning Point', 'Episode 2: Time Travel Paranoia', 'Episode 3: Parallel World Paranoia']
        }
    ];

    // Tampilkan daftar anime
    function displayAnimeList() {
        animeContainer.innerHTML = '';
        animeData.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.className = 'anime-card';
            animeCard.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}" class="anime-image" data-id="${anime.id}">
                <div class="anime-info">
                    <h3>${anime.title}</h3>
                    <p>Genre: ${anime.genre}</p>
                    <p>Studio: ${anime.studio}</p>
                    <button class="favorite-btn" data-id="${anime.id}">Add to Favorites</button>
                </div>
                <div class="episode-list" id="episodes-${anime.id}" style="display: none;">
                    <h4>Episodes:</h4>
                    <ul>
                        ${anime.episodes.map(episode => `<li>${episode}</li>`).join('')}
                    </ul>
                </div>
            `;
            animeContainer.appendChild(animeCard);
        });

        // Tambahkan event listener untuk tombol favorit
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', addToFavorites);
        });

        // Tambahkan event listener untuk gambar anime
        document.querySelectorAll('.anime-image').forEach(img => {
            img.addEventListener('click', toggleEpisodes);
        });
    }

    // Toggle tampilan episode
    function toggleEpisodes(e) {
        const animeId = e.target.getAttribute('data-id');
        const episodeList = document.getElementById(`episodes-${animeId}`);
        if (episodeList.style.display === 'none') {
            episodeList.style.display = 'block';
        } else {
            episodeList.style.display = 'none';
        }
    }

    // Tambahkan ke favorit
    function addToFavorites(e) {
        const animeId = parseInt(e.target.getAttribute('data-id'));
        const anime = animeData.find(a => a.id === animeId);
        
        if (!favorites.some(fav => fav.id === animeId)) {
            favorites.push(anime);
            updateFavoritesList();
        }
    }

    // Perbarui daftar favorit
    function updateFavoritesList() {
        favoritesList.innerHTML = '';
        favorites.forEach(anime => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}" class="favorite-image">
                <span>${anime.title}</span>
            `;
            favoritesList.appendChild(li);
        });
    }

    // Ekspor favorit
   exportButton.addEventListener('click', function() {
        if (favorites.length === 0) {
            exportStatus.textContent = "No favorites to export.";
            return;
        }

        const favoriteTitles = favorites.map(anime => anime.title).join('\n');
        const blob = new Blob([favoriteTitles], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'favorite_anime.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        exportStatus.textContent = "Favorites exported successfully!";
        setTimeout(() => {
            exportStatus.textContent = "";
        }, 3000);
    });

    // Inisialisasi tampilan
    displayAnimeList();
});