// Fade in when 60% is visible
const fadeOut = 0.60;
// Fade out once 40% is left
const FadeIn = 0.40;

const FadeObserver = new IntersectionObserver((entries)=> {
    // track what elements appear
    entries.forEach((entry)=> {
            // How much of the screen is filled
    const ScreenCovered = entry.rootBounds ? entry.intersectionRect.height / entry.rootBounds.height : 0;

            if (entry.intersectionRatio >= FadeIn || ScreenCovered >= FadeIn) {
                entry.target.classList.add("visible", entry.isIntersecting)
            } else if (entry.intersectionRatio <= fadeOut) {
                entry.target.classList.remove("visible", entry.isIntersecting)
            }
    })
}, { threshold: Array.from({ length: 101 }, (_, i) => i / 100)})

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