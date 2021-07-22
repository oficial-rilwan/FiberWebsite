const navLinks = document.getElementById('nav-links')
const toggleBtn = document.getElementById('toggle-btn')

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu')
})