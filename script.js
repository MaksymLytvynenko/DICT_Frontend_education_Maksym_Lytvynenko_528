const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "Switch to Light Mode" :
            "Switch to Dark Mode";
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
