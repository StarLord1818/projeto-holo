class MobileNavbar {
    constructor (mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
    this.navLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation =
                `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
}
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        document.body.classList.toggle("menu-open");
        this.animateLinks()
        this.mobileMenu.setAttribute(
    "aria-expanded",
    this.navList.classList.contains(this.activeClass)
        );
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init () {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

const imagensParallax = document.querySelectorAll("#imagem1, #imagem2");

function atualizarParallax() {
    imagensParallax.forEach(imagem => {
        const posicao = imagem.getBoundingClientRect();

        // Distância do centro da imagem até o centro da tela
        const distancia = posicao.top + posicao.height / 2 - window.innerHeight / 2;

        // Limita o movimento da imagem
        const movimento = Math.max(-40, Math.min(40, distancia * -0.12));

        imagem.style.setProperty("--parallax-y", `${movimento}px`);
    });
}

window.addEventListener("scroll", atualizarParallax);
window.addEventListener("resize", atualizarParallax);

atualizarParallax();