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