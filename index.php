<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Otakuverse</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="page-container">
        <div id="content-wrap">
            <header>
                <h1>Otakuverse</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#anime-list">Anime List</a></li>
                        <li><a href="#favorites">Favorites</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="anime-list">
                    <h2>Anime This Season</h2>
                    <div id="anime-container"></div>
                </section>

                <section id="favorites">
                    <h2>My Favorites</h2>
                    <ul id="favorites-list"></ul>
                </section>

                <section id="export-section">
                    <h2>Export Favorites</h2>
                        <div id="export-container">
                        <button id="export-favorites">Export to TXT</button>
                        <p id="export-status"></p>
                        </div>
                </section>
            </main>
        </div>
        <footer>
            <p>Visit Count: <span id="hit-counter">0</span></p>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>