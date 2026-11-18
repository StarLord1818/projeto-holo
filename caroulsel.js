const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".card");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const dotsContainer = document.querySelector(".carousel-dots");

// Quantos cards aparecem ao mesmo tempo
const visibleCards = 3;

// Quantas posições diferentes existem
const totalPages = Math.max(1, cards.length - visibleCards + 1);

let currentPage = 0;

// Criando as bolinhas automaticamente
for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("button");

    dot.setAttribute("aria-label", `Ir para posição ${i + 1}`);

    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
        currentPage = i;
        updateCarousel();
    });
}

const dots = document.querySelectorAll(".carousel-dots button");

// Atualiza o carrossel
function updateCarousel() {

    const cardWidth = cards[0].offsetWidth;
    const gap = 12;

    track.scrollTo({
        left: currentPage * (cardWidth + gap),
        behavior: "smooth"
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentPage);
    });
}

// Avançar
nextButton.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateCarousel();
    }
});

// Voltar
prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updateCarousel();
    }
});

// Posição inicial
updateCarousel();