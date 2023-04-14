const productsContainer = document.querySelector("#product_container");
const cartContent = document.querySelector("#cart-content_container");
const cartProduct = document.querySelector(".cart-product");
function getLSContent() {
  // get contents from local storage.
  // if nothing is there, create an empty array
  const lsContent = JSON.parse(localStorage.getItem("products")) || [];
  return lsContent;
}

function setLSContent(lsContent) {
  // save content inside local storage
  localStorage.setItem("products", JSON.stringify(lsContent));
}

// // Save product in cart and Local Storage
// // when add to cart button is clicked
// productsContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("add-to-cart")) {
//     e.preventDefault();
//     const clickedBtn = e.target;
//     saveProduct(clickedBtn);
//   }
// });

function saveProduct(clickedBtn) {
  // save selected product in local storage and display it in the cart together\

  const card =
    clickedBtn.parentElement.parentElement.parentElement.parentElement;
  const productImage = card.querySelector("img").src;
  const productName = card.querySelector(".product_content a").textContent;
  const productPrice = card.querySelector(".product_price").innerText;
  const productQuantity = 1;

  // get local storage array
  const lsContent = getLSContent();
  lsContent.push({
    name: productName,
    image: productImage,
    price: productPrice,
    quantity: productQuantity,
  });

  // add product into into local storage
  setLSContent(lsContent);
  // update the display of courses in the shopping cart
  displayProducts();
}

function displayProducts() {
  // display all products in the cart

  // get contents from local storage
  const lsContent = getLSContent();
  // console.log(lsContent);
  let carts = "";
  for (const product of lsContent) {
    carts += `
      <div class="item-product-cart">
      <div class="checked-product-cart">
        <input type="checkbox" />
      </div>

      <div class="img-product-cart">
        <a href="" class="product-image">
          <img
            src="${product.image}"
            alt=""
            width="80"
            height="120"
          />
        </a>
      </div>

      <div class="group-product-info">
        <div class="info-product-cart">
          <h2 class="product-name">
            <a href="">${product.name}</a>
          </h2>

          <div class="cart-price">
            <p>${product.price}</p>
          </div>
        </div>

        <div class="number-product-cart">
          <div class="product-quantity-box">
            <input type="number" min="1" placeholder="1"  class = "quantity-changed" value = '${product.quantity}'/>
          </div>

          <div class="cart-price-total">
            <p>${product.price}</p>
          </div>
        </div>
      </div>

      <div class="btn-remove-cart ">
        <i class="fa-solid fa-trash-can remove-item "></i>
      </div>
    </div>

    <div class="border-product"></div>`;
  }
  cartContent.innerHTML = carts;
}
document.addEventListener("DOMContentLoaded", function (e) {
  // display list of products in cart, if any, on page load
  displayProducts();
  // display cart total
  totalPrice();
});

function totalPrice() {
  const lsContent = getLSContent();
  let total = 0;

  for (const product of lsContent) {
    let cells = product.price.replace(/[^0-9]/g, "");
    total += 1 * cells * product.quantity;
  }
  document.querySelector(".tota-cart-right").innerText = `${total} đ`;
  document.querySelector(".final-total-right").innerText = `${total} đ`;
}
totalPrice();

function removeProduct(productBtn) {
  const productCart = productBtn.parentElement.parentElement;
  productCart.remove();
  const lsContent = getLSContent();

  let productName = productCart.querySelector(".product-name a").innerText;
  // console.log(productName);
  let products = lsContent.find((product) => {
    return product.name === productName;
  });

  console.log(lsContent.indexOf(products));
  lsContent.splice(lsContent.indexOf(products), 1);
  setLSContent(lsContent);
  totalPrice();
}

cartContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    e.preventDefault();
    const productBtn = e.target;
    removeProduct(productBtn);
  }
});
