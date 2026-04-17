// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os cards de vídeo
    const videoCards = document.querySelectorAll('.video-card');

    // Configura o observador para checar quando os elementos aparecem na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o card entrar na área visível da tela
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar depois que a animação rodar uma vez
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15 // Dispara quando 15% do card estiver visível
    });

    // Adiciona a classe inicial de animação e começa a observar
    videoCards.forEach(card => {
        card.classList.add('fade-up');
        observer.observe(card);
    });
});