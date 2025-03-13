function loadPage(page) {
    const content = document.getElementById("dynamic-content");
    content.classList.add("fade-out");

    setTimeout(() => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                content.classList.remove("fade-out");
                content.classList.add("fade-in");
            });
    }, 500);
}
