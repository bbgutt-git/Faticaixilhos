// Menu Mobile Interativo
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Simulador de Preços em Euros
const serviceSelect = document.getElementById('service-select');
const priceDisplay = document.getElementById('price-display');

serviceSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    if (value === "0") {
        priceDisplay.textContent = "0€";
    } else {
        // Animação simples de contagem
        let currentPrice = 0;
        const targetPrice = parseInt(value);
        const interval = setInterval(() => {
            if (currentPrice >= targetPrice) {
                clearInterval(interval);
            } else {
                currentPrice += Math.ceil(targetPrice / 20);
                if (currentPrice > targetPrice) currentPrice = targetPrice;
                priceDisplay.textContent = `${currentPrice}€`;
            }
        }, 30);
    }
});

// Scroll suave suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});