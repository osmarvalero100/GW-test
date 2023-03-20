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

    setTitle(title) {
        const wrapperTitle = document.createElement('div');
        wrapperTitle.classList.add('cart__title');
        this.title = document.createElement('p');
        this.title.textContent = title;
        wrapperTitle.appendChild(this.title);
        this.wrapper.appendChild(wrapperTitle);
        return this;
    }

    setRating(rating) {
        if (rating.length == 0)
            return this;

        if (rating.length < 2) {
            rating = rating[0];
        } else {
            const total = rating.reduce((acc, num) => parseInt(acc) + parseInt(num), 0);
            rating = total / rating.length;
        }

        // There are no instructions for ranges greater than 500
        if (rating > 500)
            return this;

        let stars = {};

        switch (true) {
            case (rating >= 0 && rating <= 100):
                stars = 1;
                break;
            case (rating >= 101 && rating <= 200):
                stars = 2
                break;
            case (rating >= 201 && rating <= 300):
                stars = 3;
                break
            case (rating >= 301 && rating <= 400):
                stars = 4;
                break
            case (rating >= 401 && rating <= 500):
                stars = 5;
                break;
        }

        const wrapperRating = document.createElement('div');
        wrapperRating.classList.add('card__rating');
        
        let svgStar = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z" fill="#FFC658"/>
        </svg>`;

        for (let i = 0; i < stars; i++) {
            wrapperRating.innerHTML += svgStar;
        }

        const ratingValue = document.createElement('span');
        ratingValue.classList.add('card__rating_value');
        ratingValue.textContent = `(${rating})`;
        wrapperRating.appendChild(ratingValue);
        this.wrapper.appendChild(wrapperRating);
        
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
        const minAmount = parseFloat(price.min.amount).toFixed(2);
        const maxAmount = parseFloat(price.max.amount).toFixed(2);
        let discount = false;

        if (minAmount < maxAmount) {
            const discountPercetage = (100 * minAmount) / maxAmount;
            this.setDiscount(`-${discountPercetage.toFixed(2)}%`);
            discount = true;     
        }

        const wrapperPrice = document.createElement('div');
        wrapperPrice.classList.add('card__price');
        
        if (discount) {
            const spanDiscountPrice = document.createElement('span');
            spanDiscountPrice.classList.add('card__price__discount');
            spanDiscountPrice.textContent = minAmount;
            wrapperPrice.appendChild(spanDiscountPrice);
        }

        const spanOriginalPrice = document.createElement('span');
        spanOriginalPrice.classList.add('card__price__original');
        spanOriginalPrice.textContent = maxAmount;
        wrapperPrice.appendChild(spanOriginalPrice);

        this.wrapper.appendChild(wrapperPrice);
        
        return this;
    }

    build() {
        return this.wrapper;
    }
}