function changeImage(id) {
  let imagePath = document.getElementById(id).getAttribute("src");
  document.getElementById("img-main").setAttribute("src", imagePath);
}

//----------------------//
// Product
const productsList = document.querySelector("#product_container");
function getProducts() {
  // get contents from local storage.
  // if nothing is there, create an empty array
  const productsCart = JSON.parse(localStorage.getItem("carts")) || [];
  return productsCart;
}

function setProducts(productsCart) {
  // save content inside local storage
  localStorage.setItem("carts", JSON.stringify(productsCart));
}

function saveProductCart(clickedShow) {
  const productCart = clickedShow.parentElement.parentElement.parentElement;
  const productNameCart =
    productCart.querySelector(".product_content a").innerText;
  const productImageCart = productCart.querySelector(
    ".product_thumbnail a img"
  ).src;
  const productPriceCart =
    productCart.querySelector(".product_price").innerText;

  const productsCart = getProducts();
  productsCart.push({
    name: productNameCart,
    image: productImageCart,
    price: productPriceCart,
  });

  console.log(productsCart.length);
  if (productsCart.length != 1) {
    productsCart.splice(0, 1);
  }

  console.log(productsCart);

  setProducts(productsCart);

  displayProductsCart();
}

// Add product to cart
function addCart() {
  const productsCart = getProducts();
  console.log(productsCart[0].name);
  const lsContent = getLSContent();
  lsContent.push({
    name: productsCart[0].name,
    image: productsCart[0].image,
    price: productsCart[0].price,
    quantity: 1,
  });

  console.log(lsContent);
  // add product into into local storage
  setLSContent(lsContent);
}

function displayProductsCart() {
  const productsCart = getProducts();
  let product = "";
  for (const products of productsCart) {
    product = `<div class="product-gallery">
          <img
            src="${products.image}"
            alt=""
            id="img-main"
            height="400px"
            width="257px"
          />

          <div class="gallery-image">
            <img
              src="${products.image}"
              alt=""
              width="60px"
              onclick="changeImage('img1')"
              id="img1"
            />
            <img
              src="./assets/img/img-sanpham/img1.jpg"
              alt=""
              width="60px"
              onclick="changeImage('img2')"
              id="img2"
            />
            <img
              src="./assets/img/img-sanpham/img2.jpg"
              alt=""
              width="60px"
              onclick="changeImage('img3')"
              id="img3"
            />
            <img
              src="./assets/img/img-sanpham/img3.jpg"
              alt=""
              width="60px"
              onclick="changeImage('img4')"
              id="img4"
            />
          </div>
        </div>

        <div class="product-info">
          <h1>${products.name}</h1>
          <p class="product_meta">
            Nhà phát hành: <a href="#">NXB Kim Đồng</a>
          </p>
          <h4 class="product-price">${products.price}</h4>
          <div class="product-desc">
            <ul class="list-dot">
              <li>Tác giả: Tomohito Oda</li>
              <li>ISBN: 978-604-2-23681-2</li>
              <li>Ngày xuất bản: 19-05-2020</li>
              <li>Số trang: 192</li>
            </ul>
          </div>

          <div class="product-shopping">
            <figure>
              <figcaption>Số lượng</figcaption>
              <div class="form-group_number">
                <input
                  type="number"
                  min="1"
                  value="1"
                  class="form-control"
                />
              </div>
            </figure>

            <a href="#" class="btn-cart" onclick="addCart()">Thêm vào giỏ hàng</a>
            <a href="#" class="btn-buy">Mua ngay</a>
          </div>

          <div class="product-specification">
            <p>Thể loại:</p>
            <a href="#">MANGA</a>
          </div>

          <div class="product-sharing">
            <div
              class="fb-share-button"
              data-href="http://127.0.0.1:5500/sanpham.html#"
              data-layout="button"
              data-size="small"
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore"
                >Chia sẻ</a
              >
            </div>
          </div>
        </div>`;
  }

  console.log(product);
  document.querySelector(".product-briefing").innerHTML = product;
}
displayProductsCart();
