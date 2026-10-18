document.querySelectorAll("[data-href]").forEach(link => {
    const value = Links[link.dataset.href];
    if (value) link.href = value;
});