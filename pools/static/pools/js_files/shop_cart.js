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
    all_cost+= Number(item.price);
    console.log(item.price, item.total_price, all_cost);
    cart.push(item);
  } else {
    cart[itemIndex].count++;
    cart[itemIndex].total_price=cart[itemIndex].price*cart[itemIndex].count;
    all_cost+= Number(cart[itemIndex].price);
  }

  console.log(`Товар ${product} добавлен в корзину`);

}

function removeCartItem(product) {
  const itemIndex = cart.findIndex(item => item.product === product);
  if (itemIndex !== -1) {
    if (cart[itemIndex].count === 1){
      all_cost-=cart[itemIndex].price;
      cart.splice(itemIndex, 1);
      console.log(`Товар ${product} удален из корзины`);
    }else if(cart[itemIndex].count > 1){
      cart[itemIndex].count--;
      cart[itemIndex].total_price-=cart[itemIndex].price;
      all_cost-=cart[itemIndex].price;
    }
  }
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
      cartHTML += `<li><b>${item.product}</b> - ${item.total_price} ₽  <button class="remove-item" data-product="${item.product}">✖</button> <p>Количество: ${item.count}</p> <br> </br> </li>`;

    }
    cartHTML += '</ul>';
    costHTML +=`<p>Общая стоимость товаров: ${all_cost} ₽</p>`;
  }

  cartElement.innerHTML = cartHTML;
  positionSelect.innerHTML = costHTML;
}

showCart(); // вызываем функцию для отображения корзины при загрузке страницы (модальное окно)



const cartIcon = document.getElementById('cartItems');
/*const cartModal = document.getElementById('cartModal');*/
const cartItems = document.getElementById('cartItems');
const closeButton = document.querySelector('#cartModal .close');

cartItems.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-item')) {
    const productName = event.target.dataset.product;
    removeCartItem(productName);
    showCart(); // Обновляем отображение корзины после удаления товара
  }
});
