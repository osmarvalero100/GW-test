class Card {

    constructor() {
        this.background = false;
        this.cover = false;
        this.button = false;
        this.title = false;
        this.rating = false;
        this.discount = false;
        this.price =  false;
        this.wrapper = true;
        this.#init();
    }

    #init() {
        this.wrapper =  document.createElement('div');
        this.wrapper.classList.add('card');
    }

    setCover(imageUrl, size) {
        this.cover = document.createElement('div');
        this.cover.classList.add('card__cover');
        this.cover.setAttribute('class', size);
        this.cover.style.backgroundImage = `url(${imageUrl})`;
        this.wrapper.appendChild(this.cover);
        return this;
    }

    setButton(text, type = 'secondary') {
        this.button = document.createElement('button');
        this.button.textContent = text;
        this.button.classList.add('btn');
        this.button.classList.add(`btn--${type}`);
        this.cover.appendChild(this.button);
        return this;
    }

    setTitle() {
        this.title = true;
        return this;
    }

    setRating(rating) {
        this.rating = rating;
        return this;
    }

    setDiscount(discount) {
        this.discount = document.createElement('div');
        this.discount.textContent = discount;
        this.discount.classList.add('discount');
        this.cover.appendChild(this.discount);
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    build() {
        return this.wrapper;
    }
}