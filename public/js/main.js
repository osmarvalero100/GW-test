function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
}

(async () => {
    const products = await getProducts();

    if (products.nodes) {
        const slider = new Slider('slider_products');
        
        for (let i = 0; i < products.nodes.length; i++) {
            const product = products.nodes[i];
             
            let coverSize = ((i % 2) == 0) ? 'card__cover' : 'card__cover card__cover--xl';
            const btnText = (product.totalInventory > 0) ? 'Add to cart' : 'See more';
            const ratings = product.tags.filter(tag => (!isNaN(tag) && tag != ''));

            if (isMobile())
                coverSize = coverSize.replace(' card__cover--xl', '');

            const card = new Card()
                .setCover(product.featuredImage.url, coverSize)
                .setButton(btnText)
                .setTitle(product.title)
                .setRating(ratings)
                .setPrice(product.prices)
                .build();
            
            slider.setCard(card);
        }
    } 
    
})();
