/* menu desplegable */
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

/* Cambie el delay de 500 a 300 ya que se hacia muy lenta hasta que se cargara */
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {
    delay: 300
});
ScrollReveal().reveal('.cards-baner-one', {
    delay: 300
});
ScrollReveal().reveal('.cards-banner-two', {
    delay: 300
});