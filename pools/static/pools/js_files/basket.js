let cart = {
    'blue_switer': 0,
};

document.onclick = event =>{
    console.log(event.target.classList);
    if(event.target.classList.contains('plas_basket')){
        plasFunction(event.target.dataset);
    }
    if(event.target.classList.contains('menos_basket')){
        menosFunction(event.target.dataset);
    }
    if(event.target.classList.contains('cancel')){
        canselFunction(event.target.dataset);
    }
}

const plasFunction = id => {
console.log(id);
    cart[id.id]++;
    renderCart();
}

const menosFunction = id => {
    if(cart[id.id]-1==0){
        deleteFunction(id);
        return true;
    }
    cart[id.id]--;
    renderCart();
}

const deleteFunction = id => {
    delete id.id;
    const cartItem = document.querySelector(".construct__wrapper-text_basket");
    cartItem.classList.add('non_visible');
    renderCart();
}

const canselFunction = id => {
    delete id.id;
    const cartItem = document.querySelector(".construct__wrapper-text_basket");
    cartItem.classList.add('non_visible');
    renderCart();
}
const renderCart = () => {
    const count = document.querySelector('#count')
    count.innerHTML = cart.blue_switer;
    console.log(cart);
}