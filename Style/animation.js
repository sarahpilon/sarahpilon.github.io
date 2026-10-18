// Fade in when 70% is visible
const fadeOut = 0.50;
// Fade out once 60% is left
const FadeIn = 0.40;

const FadeObserver = new IntersectionObserver((entries)=> {
    // track what elements appear
    entries.forEach((entry)=> {
            if (entry.intersectionRatio >= FadeIn) {
                entry.target.classList.add("visible", entry.isIntersecting)
            } else if (entry.intersectionRatio <= fadeOut) {
                entry.target.classList.remove("visible", entry.isIntersecting)
            }
    })
}, { threshold: [fadeOut, FadeIn] })

const sectionsFade = document.querySelectorAll(".fadein")
sectionsFade.forEach(el => FadeObserver.observe(el));


// For links in navigation
const NavLink = document.querySelectorAll(".Nav-Center a")

const NavObserver = new IntersectionObserver((entries)=> {
    // track what elements appear
    entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }

            NavLink.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") == "#" + entry.target.id)
            })
    })
}, { rootMargin: "-50% 0px -50% 0px" })

const NavSections = document.querySelectorAll("#AboutMe, #Projects, #Skills, #ContactMe")
NavSections.forEach(section => NavObserver.observe(section));