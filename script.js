function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById("dynamic-content").innerHTML = html;
        })
        .catch(error => console.error("Erreur de chargement :", error));
}
