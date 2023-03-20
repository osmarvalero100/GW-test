class Slider {

    constructor(id) {
        this.id = id;
    }

    getContainerSlides() {
        const slider = document.getElementById(this.id);
        return slider.querySelector('.slider__slides');
    }
    
    setCard(card) {
        const slidersConatiner = this.getContainerSlides();
        slidersConatiner.appendChild(card);
    }
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function getDataSlides(slider) {
    let data = {}
    const containerCard = slider.querySelector('.slider__slides');
    const firstCard = containerCard.querySelector('.card');
    const lastCard = containerCard.lastChild;
    const spaceBetweenCards = 32;
    const displacement = firstCard.clientWidth * 2 + spaceBetweenCards;
    const currentTranslate = containerCard.style.translate.replace('px', '') || 0;

    data.containerCard = containerCard;
    data.displacement = parseInt(displacement);
    data.currentTranslate = parseInt(currentTranslate);
    data.firstCard = firstCard;
    data.lastCard = lastCard;

    return data;
}

const leftNavs = document.querySelectorAll('.slider .arrows__nav__left');

if (leftNavs) {
    leftNavs.forEach(left => {
        left.addEventListener('click', (e) => {
            const dataSlides = getDataSlides(e.target.closest('.slider'));
            if (!isInViewport(dataSlides.firstCard)) {
                const currentTranslate = dataSlides.currentTranslate;
                const displacement = currentTranslate + dataSlides.displacement;
                dataSlides.containerCard.style.translate = `${displacement}px`;
            }
            // const displacement = currentTranslate + dataSlides.displacement;
            // dataSlides.containerCard.style.translate = `${displacement}px`;
        });
    })
}

const rightNavs = document.querySelectorAll('.slider .arrows__nav__right');

if (rightNavs) {
    rightNavs.forEach(right => {
        right.addEventListener('click', (e) => {
            const dataSlides = getDataSlides(e.target.closest('.slider'));
            if (!isInViewport(dataSlides.lastCard)) {
                const currentTranslate = dataSlides.currentTranslate;
                const displacement = currentTranslate - dataSlides.displacement;
                dataSlides.containerCard.style.translate = `${displacement}px`;
            }
        });
    })
}

