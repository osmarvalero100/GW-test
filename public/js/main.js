(async ()=> {
    const products = await getProducts();

    if (products.nodes) {
        const slider = new Slider('slider_products');
        
        for (let i = 0; i < products.nodes.length; i++) {
            const product = products.nodes[i];
             
            const coverSize = ((i % 2) == 0) ? 'card__cover' : 'card__cover card__cover--xl';
            const btnText = (product.totalInventory > 0) ? 'Add to cart' : 'See more';

            const card = new Card()
                .setCover(product.featuredImage.url, coverSize)
                .setDiscount(20)
                .setButton(btnText)
                .build();
            
            slider.setCard(card)
        }
    } 
    
})();
