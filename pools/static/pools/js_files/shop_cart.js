// JavaScript код для добавления товара в корзину
let total = 0;
const cart = [];
let flag_cost = 0;
let all_cost = 0;
function addToCart(product, price, image) {
  let itemIndex = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product === product) {
      itemIndex = i;
      break;
    }
  }

  if (itemIndex === -1) {
    const item = { product, price, count: 1, image, total_price: 0 };
    item.total_price=item.price;
    all_cost+=item.price;
    cart.push(item);
  } else {
    cart[itemIndex].count++;
    cart[itemIndex].total_price=cart[itemIndex].price*cart[itemIndex].count;
    all_cost+=cart[itemIndex].price;
  }

  console.log(`Товар ${product} добавлен в корзину`);

}



function showCart() {
  const cartElement = document.getElementById('cartItems');
  const positionSelect = document.getElementById('position');
  let cartHTML = '';
  let costHTML = '';

  if (cart.length === 0) {
    cartHTML = '<p>Корзина пуста</p>';
  } else {
    cartHTML = '<ul>';
    for (let item of cart) {
      cartHTML += `<li><b>${item.product}</b> - ${item.total_price} ₽  <p>Количество: ${item.count}</p> <br> </br> </li>`;

    }
    cartHTML += '</ul>';
    costHTML +=`<p>Общая стоимость товаров: ${all_cost} ₽</p>`;
  }

  cartElement.innerHTML = cartHTML;
  positionSelect.innerHTML = costHTML;
}

showCart(); // вызываем функцию для отображения корзины при загрузке страницы (модальное окно)

const cartIcon = document.getElementById('cartItems');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const closeButton = document.querySelector('#cartModal .close');

/*cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
  showCartItems();
});*/

// закрываем по нажатию на фон
/*window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}*/

/*function showCartItems() {
  let cartHTML = '';

  if (cart.length === 0) {
    cartHTML = '<p>Корзина пуста</p>';
  } else {
    cartHTML = '<ul>';
    for (let item of cart) {

      cartHTML += `<li> <b>${item.product}</b> - ${item.price} ₽  <p>Количество: ${item.count}</p>  </li>`;
    }
    cartHTML += '</ul>';
  }

  cartItems.innerHTML = cartHTML;
}*/


closeButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

/*const cart = [];
let itemCount = 0;
let AllPrice = 0;
let flag_null=0;

alert("trash")
function addToCart(product, price, image) {
    alert("lol");
    let index = -1;

    //присваиваем индекс для товара
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product === product) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        const item = { product, price, count: 1, image };
        cart.push(item);
        console.log(item);
    } else {
        cart[index].count++;
    }

}

function showCart() {
    const itemsContainer = document.getElementById('cartItems');
    let cartHTML = "";

    if ((cart.length === 0) && ( flag_null !== 1)) {
        cartHTML = "<p id='empty'>Корзина пуста</p>";
        flag_null=1;
    } else if (cart.length > 0){
        if(flag_null===1){
            document.getElementById('empty').remove();
            flag_null=1;
        }

        cartHTML = `<ul>`;
        for (let i=0;i <cart.length;i++) {
            cartHTML += `<li>${cart[i].product} - ${cart[i].price}руб - ${cart[i].count}шт</li>`
/!*
            cartHTML += '<img src=${cart.item.image} width="50"/>';
             cartHTML += '</li>';*!/
            /!*AllPrice += cart.item.price * cart.item.count;*!/
        }
        cartHTML += `</ul>`;
    }

    itemsContainer.innerHTML += cartHTML;
}

showCart();*/

// JavaScript код для добавления товара в корзину
/*const cart = [];

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

  console.log("Товар ${product} добавлен в корзину");

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
   total += item.price * item.count;
    cartHTML += </ul>;
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
    cartHTML+=</ul>;
  }

  cartItems.innerHTML = cartHTML;
}


closeButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});*/
