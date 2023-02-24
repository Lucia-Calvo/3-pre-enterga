const cursor = document.querySelector('.cursor');
const navLink = document.querySelectorAll('.navbar__link')
const logo = document.querySelector('.header__logo');
const login = document.querySelector('.login');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

navLink.forEach(navHover => {
    navHover.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

navLink.forEach(navHover => {
    navHover.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

logo.addEventListener("mouseenter", () => {
    cursor.classList.add("large")
})

logo.addEventListener("mouseleave", () => {
    cursor.classList.remove("large")
})

login.addEventListener("mouseenter", () => {
    cursor.classList.add("large")
})

login.addEventListener("mouseleave", () => {
    cursor.classList.remove("large")
})
