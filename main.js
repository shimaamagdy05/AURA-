
    function AddToCart(itemId){
        const item=
        document.getElementById(itemId);
        if(item){
            item.innerText="added to cart";
        }else{
            console.error("element with id",itemId,"not found")
        }
}


