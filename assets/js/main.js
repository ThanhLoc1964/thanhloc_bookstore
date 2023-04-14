let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Product
var product_show = document.getElementById("product_show");
var products = "";
for (let i = 0; i < productItems.length; i++) {
  products += `<div class="product show-cart">
            <div class="product_thumbnail show-cart">
                <a href="./sanpham.html" >
                    <img src="${productItems[i].img}"
                        alt="" class = "show-cart">
                </a>
            </div>

            <a href="./sanpham.html" class="product_category">${productItems[i].category}</a>


            <div class="product_content">
                <a href="./sanpham.html">${productItems[i].name}</a>
            </div>

            <p class="product_price">
                ${productItems[i].price}
            </p>

        </div>`;
}
product_show.innerHTML = products;

// product-actions

var products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.innerHTML += `<ul class="product-actions">
            <li>
            <a href="#" title="Thêm vào giỏ hàng">
                <i class="fa-solid fa-bag-shopping add-to-cart"></i>
            </a>
            </li>
            <li>
            <a href="#" title="Xem qua" class = 'quick-view-btn'>
                <i class="fa-regular fa-eye show-cart"></i>
            </a>
            </li>
            <li>
            <a href="#" title="Yêu thích">
                <i class="fa-regular fa-heart"></i>
            </a>
            </li>
            <li>
            <a href="#" title="So sánh">
                <i class="fa-solid fa-chart-simple"></i>
            </a>
            </li>
        </ul>`;
});

const product_actions = document.querySelectorAll(".product-actions");
for (let i = 0; i < products.length; i++) {
  products[i].onmouseenter = function (e) {
    product_actions[i].style.display = "block";
    product_actions[i].style.animationName = "go_up";
  };

  products[i].onmouseleave = function (e) {
    product_actions[i].style.animationName = "go_back";
  };
}

// Save product in cart and Local Storage
// when add to cart button is clicked
productsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    e.preventDefault();
    const clickedBtn = e.target;
    saveProduct(clickedBtn);
  }
});

// Save product in cart and Local Storage
// when add to cart button is clicked
productsList.addEventListener("click", function (e) {
  // e.preventDefault();
  const clickedShow = e.target;
  saveProductCart(clickedShow);
});

// Show toast notification when click add shopping cart button
const addToCartBtns = document.querySelectorAll(".add-to-cart");
const toastNotification = document.querySelector(".toast-notification");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");

for (const addToCartBtn of addToCartBtns) {
  addToCartBtn.addEventListener("click", () => {
    toastNotification.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
      toastNotification.classList.remove("active");
    }, 5000);

    setTimeout(() => {
      progress.classList.remove("active");
    }, 5000);
  });

  closeIcon.addEventListener("click", () => {
    toastNotification.classList.remove("active");

    progress.classList.remove("active");
  });
}

//Show Quick view
const quick_view_btns = document.querySelectorAll(".quick-view-btn");
const img_product = document.querySelector(".product_thumbnail_quickv img");
const product_price = document.querySelector(".product_price_q");
const name_product = document.querySelector(".name-product");
const modal = document.querySelector(".modal");
const exit_btn = document.querySelector(".exit_btn");
const modal_container = document.querySelector(".modal-container");

console.log(product_price);
for (const quick_view_btn of quick_view_btns) {
  quick_view_btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    modal.classList.add("open_modal");
  });

  exit_btn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", () => {
    modal_container.pr;
    modal.style.display = "none";
  });

  modal_container.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("show-cart")) {
    const product_quick =
      e.target.parentElement.parentElement.parentElement.parentElement;
    let img_product_quick = product_quick.querySelector(
      ".product_thumbnail a img"
    ).src;

    let product_content_quick =
      product_quick.querySelector(".product_content a").innerText;

    let product_price_quick =
      product_quick.querySelector(".product_price").innerText;
    console.log(product_price_quick);

    img_product.src = img_product_quick;
    product_price.innerHTML = product_price_quick;
    name_product.innerHTML = product_content_quick;
  }
});
