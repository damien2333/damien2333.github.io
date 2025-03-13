<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
        }
        header {
            background: #333;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .portfolio-item {
            display: inline-block;
            width: 30%;
            margin: 10px;
            background: white;
            border: 1px solid #ddd;
            padding: 20px;
            text-align: center;
        }
        .portfolio-item img {
            width: 100%;
            height: auto;
        }
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

    <header>
        <h1>Bienvenue sur mon Portfolio</h1>
    </header>

    <div class="container">
        <section>
            <h2>Mes Projets</h2>
            <div class="portfolio-item">
                <img src="project1.jpg" alt="Projet 1">
                <h3>Projet 1</h3>
                <p>Description du projet 1.</p>
            </div>
            <div class="portfolio-item">
                <img src="project2.jpg" alt="Projet 2">
                <h3>Projet 2</h3>
                <p>Description du projet 2.</p>
            </div>
            <div class="portfolio-item">
                <img src="project3.jpg" alt="Projet 3">
                <h3>Projet 3</h3>
                <p>Description du projet 3.</p>
            </div>
        </section>
    </div>

    <footer>
        <p>© 2025 Mon Portfolio</p>
    </footer>

</body>
</html>




