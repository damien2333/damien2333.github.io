<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio - Directeur Artistique</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 50px 0;
        }
        header h1 {
            margin: 0;
            font-size: 36px;
        }
        nav {
            background-color: #444;
            padding: 10px 0;
            text-align: center;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-size: 18px;
        }
        nav a:hover {
            color: #f4b400;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px;
        }
        .portfolio-item {
            display: inline-block;
            width: 30%;
            margin: 15px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
        }
        .portfolio-item:hover {
            transform: translateY(-10px);
        }
        .portfolio-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .portfolio-item .content {
            padding: 15px;
        }
        .portfolio-item h3 {
            font-size: 24px;
            margin: 10px 0;
        }
        .portfolio-item p {
            font-size: 16px;
            color: #666;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

    <header>
        <h1>Portfolio - Directeur Artistique</h1>
    </header>

    <nav>
        <a href="#about">À propos</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
    </nav>

    <div class="container" id="about">
        <section>
            <h2>À propos de moi</h2>
            <p>Je suis un directeur artistique passionné par la création de concepts visuels innovants. Mon travail se concentre sur la conception d'expériences visuelles engageantes, qu'il s'agisse de branding, de design graphique ou de direction créative pour des projets divers.</p>
        </section>
    </div>

    <div class="container" id="portfolio">
        <section>
            <h2>Mes Projets</h2>
            <div class="portfolio-item">
                <img src="https://via.placeholder.com/500x300" alt="Projet 1">
                <div class="content">
                    <h3>Projet 1 - Branding</h3>
                    <p>Création de l'identité visuelle pour une marque de mode de luxe.</p>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="https://via.placeholder.com/500x300" alt="Projet 2">
                <div class="content">
                    <h3>Projet 2 - Design Web</h3>
                    <p>Refonte du site web pour un client dans l'industrie musicale.</p>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="https://via.placeholder.com/500x300" alt="Projet 3">
                <div class="content">
                    <h3>Projet 3 - Illustration</h3>
                    <p>Création d'illustrations pour une campagne de publicité.</p>
                </div>
            </div>
        </section>
    </div>

    <div class="container" id="contact">
        <section>
            <h2>Contactez-moi</h2>
            <p>Vous souhaitez collaborer avec moi ? N'hésitez pas à me contacter !</p>
            <form action="#" method="POST">
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="message">Message :</label><br>
                <textarea id="message" name="message" rows="4" required></textarea><br><br>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    </div>

    <footer>
        <p>© 2025 Portfolio - Directeur Artistique</p>
    </footer>

</body>
</html>

