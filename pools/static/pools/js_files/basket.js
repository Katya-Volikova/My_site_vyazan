
let flag = 0;
function openForm() {
  if(flag == 0){
    document.getElementById("popupForm").style.display = "block";
    flag = 1;
  }
}
      function openPopup() {
        if(flag == 0) document.getElementById("popupFormMain").style.display = "block";
        flag = 1;
      }
      function openPopup2() {
        if(flag == 0) document.getElementById("popupFormMain2").style.display = "block";
         flag = 1;
      }
       function openPopup3() {
        if(flag == 0) document.getElementById("popupFormMain3").style.display = "block";
        flag = 1;
      }
      function openPopup4() {
        if(flag == 0) document.getElementById("popupFormMain4").style.display = "block";
        flag = 1;
      }
      function openPopup5() {
        if(flag == 0) document.getElementById("popupFormMain5").style.display = "block";
        flag = 1;
      }
      function openPopup6() {
        if(flag == 0) document.getElementById("popupFormMain6").style.display = "block";
        flag = 1;
      }
      function openPopup7() {
        if(flag == 0) document.getElementById("popupFormMain7").style.display = "block";
        flag = 1;
      }
      function openPopup8() {
        if(flag == 0) document.getElementById("popupFormMain8").style.display = "block";
        flag = 1;
      }
      function openPopup9() {
        if(flag == 0) document.getElementById("popupFormMain9").style.display = "block";
        flag = 1;
      }
      function openPopup10() {
        if(flag == 0) document.getElementById("popupFormMain10").style.display = "block";
        flag = 1;
      }
      function openPopup11() {
        if(flag == 0) document.getElementById("popupFormMain11").style.display = "block";
        flag = 1;
      }
      function openPopup12() {
        if(flag == 0) document.getElementById("popupFormMain12").style.display = "block";
        flag = 1;
      }
      function openPopup13() {
        if(flag == 0) document.getElementById("popupFormMain13").style.display = "block";
        flag = 1;
      }
      function openPopup14() {
        if(flag == 0) document.getElementById("popupFormMain14").style.display = "block";
        flag = 1;
      }
      function openPopup15() {
        if(flag == 0) document.getElementById("popupFormMain15").style.display = "block";
        flag = 1;
      }
      function openPopup16() {
        if(flag == 0) document.getElementById("popupFormMain16").style.display = "block";
        flag = 1;
      }
      function openPopup17() {
        if(flag == 0) document.getElementById("popupFormMain17").style.display = "block";
        flag = 1;
      }
      function openPopup18() {
        if(flag == 0) document.getElementById("popupFormMain18").style.display = "block";
        flag = 1;
      }
       function openPopup19() {
        if(flag == 0) document.getElementById("popupFormMain19").style.display = "block";
        flag = 1;
      }
      function openPopup20() {
        if(flag == 0) document.getElementById("popupFormMain20").style.display = "block";
        flag = 1;
      }
      function openPopup21() {
        if(flag == 0) document.getElementById("popupFormMain21").style.display = "block";
        flag = 1;
      }
      function closePopup() {
        document.getElementById("popupFormMain").style.display = "none";
        document.getElementById("popupFormMain2").style.display = "none";
        document.getElementById("popupFormMain3").style.display = "none";
        document.getElementById("popupFormMain4").style.display = "none";
        document.getElementById("popupFormMain5").style.display = "none";
        document.getElementById("popupFormMain6").style.display = "none";
        document.getElementById("popupFormMain7").style.display = "none";
        document.getElementById("popupFormMain8").style.display = "none";
        document.getElementById("popupFormMain9").style.display = "none";
        document.getElementById("popupFormMain10").style.display = "none";
        document.getElementById("popupFormMain11").style.display = "none";
        document.getElementById("popupFormMain12").style.display = "none";
        document.getElementById("popupFormMain13").style.display = "none";
        document.getElementById("popupFormMain14").style.display = "none";
        document.getElementById("popupFormMain15").style.display = "none";
        document.getElementById("popupFormMain16").style.display = "none";
        document.getElementById("popupFormMain17").style.display = "none";
        document.getElementById("popupFormMain18").style.display = "none";
        document.getElementById("popupFormMain19").style.display = "none";
        document.getElementById("popupFormMain20").style.display = "none";
        document.getElementById("popupFormMain21").style.display = "none";
        document.getElementById("popupForm").style.display = "none";
        flag = 0;
      }


// JavaScript код для добавления товара в корзину

/*
const cart = [];

function addToCart(product, price, image) {
  let itemIndex = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product === product) {
      itemIndex = i;
      break;
    }
  }

  if (itemIndex === -1) {
    const item = { product, price, count: 1, image };
    cart.push(item);
  } else {
    cart[itemIndex].count++;
  }

  console.log(Товар ${product} добавлен в корзину);

}

function showCart() {
  const cartElement = document.getElementById('cart');
  let cartHTML = '';

  if (cart.length === 0) {
    cartHTML = '<p>Корзина пуста</p>';
  } else {
    cartHTML = '<ul>';
    for (let item of cart) {
      cartHTML += <li><img src="${item.image}" width="50"> ${item.product} - ${item.price} руб. x ${item.count}</li>;
      total += item.price * item.count
    }
    cartHTML += '</ul>';
  }

  cartElement.innerHTML = cartHTML;
}

showCart(); // вызываем функцию для отображения корзины при загрузке страницы (модальное окно)

const cartIcon = document.getElementById('cart');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const closeButton = document.querySelector('#cartModal .close');

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
  showCartItems();
});

// закрываем по нажатию на фон
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = 'none';
  }
}


function showCartItems() {
  let cartHTML = '';

  if (cart.length === 0) {
    cartHTML = '<p>Корзина пуста</p>';
  } else {
    cartHTML = '<ul>';
    for (let item of cart) {

      cartHTML += <li><img src="${item.image}" width="50"> ${item.product} - ${item.price} руб. x ${item.count}</li>;

    }
    cartHTML += '</ul>';
  }

  cartItems.innerHTML = cartHTML;
}


closeButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});
*/


















/*let cart = {
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
      /!* plasFunction(event.target.dataset);*!/
// }
}

const plasFunction = id => {
    cart[1]++;
    console.log(cart[1]);
    console.log(cart);
 }*/

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
