# damien2333.github.io
title:Damien Breton
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Nom</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Nom du Directeur Artistique</h1>
        <p>Directeur artistique | Créatif | Designer</p>
    </header>
    
    <section id="about">
        <h2>À propos</h2>
        <p>Je suis un directeur artistique passionné par la création visuelle et l'innovation.</p>
    </section>
    
    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="grid">
            <div class="item"><img src="image1.jpg" alt="Projet 1"></div>
            <div class="item"><img src="image2.jpg" alt="Projet 2"></div>
            <div class="item"><img src="image3.jpg" alt="Projet 3"></div>
        </div>
    </section>
    
    <section id="contact">
        <h2>Contact</h2>
        <p>Email : <a href="mailto:contact@example.com">contact@example.com</a></p>
    </section>
    
    <footer>
        <p>&copy; 2025 - Nom du Directeur Artistique</p>
    </footer>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background: #333;
    color: white;
    padding: 20px;
}

section {
    padding: 40px;
}

.grid {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.item img {
    width: 200px;
    border-radius: 10px;
}

footer {
    background: #333;
    color: white;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
