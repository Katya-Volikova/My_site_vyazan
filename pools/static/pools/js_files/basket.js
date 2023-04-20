let cart = {
    'blue_switer': 0,
    'green_hat': 0,
    'white_switer': 0,
};

let basket_icon = document.getElementById("one_pict1");
basket_icon.onclick = event =>{
    console.log(event.target.classList);
//    if(event.target.classList.contains('plas_basket')){
//        plasFunction(event.target.dataset);
//    }
//    if(event.target.classList.contains('menos_basket')){
//        menosFunction(event.target.dataset);
//    }
//    if(event.target.classList.contains('cancel')){
//        canselFunction(event.target.dataset);
//    }
//   if(event.target.classList.contains('card-img_buy')){
//       event.stopPropagation();
    cart['blue_switer']++;
    console.log(cart);
      /* plasFunction(event.target.dataset);*/
// }
}

const plasFunction = id => {
    cart[1]++;
    console.log(cart[1]);
    console.log(cart);
 }

/*const menosFunction = id => {
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
}*/
/*
const renderCart = () => {
    const count = document.querySelector('#count')
    count.innerHTML = cart.blue_switer;
    console.log(cart);
}*/
