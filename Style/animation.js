// Fade in when 70% is visible
const fadeOut = 0.50;
// Fade out once 60% is left
const FadeIn = 0.40;

const observer = new IntersectionObserver((entries, obs)=> {
    // track what elements appear
    entries.forEach((entry)=> {
            if (entry.intersectionRatio >= FadeIn) {
                entry.target.classList.add("visible", entry.isIntersecting)
            } else if (entry.intersectionRatio <= fadeOut) {
                entry.target.classList.remove("visible", entry.isIntersecting)
            }
    })
}, { threshold: [fadeOut, FadeIn] })

const sections = document.querySelectorAll(".fadein")
sections.forEach(el => observer.observe(el));