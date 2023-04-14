var left_btn = document.querySelector(".left");
var right_btn = document.querySelector(".right");
var img_slider = document.querySelector(".imgslider");

var img_arr = [
  "./assets/img/img-cuahang/__original_drawn_by_xingzhi_lv__sample-173e1bae2ad046b91a2ffb15d84159b4.jpg",
  "./assets/img/img-cuahang/art-inz-devushka-derevo-knigi.jpg",
  "./assets/img/img-cuahang/d52hqe7-efa627d0-78d7-401f-af82-dfa24876a877.png",
  "./assets/img/img-cuahang/jevb7y0nyo871.jpg",
];

var i = 0;

function next() {
  if (i >= img_arr.length) {
    i = 0;
  }
  img_slider.src = img_arr[i];
  i++;
}

function prev() {
  i--;
  console.log(i);
  if (i < 0) {
    i = img_arr.length - 1;
    console.log(i);
  }
  img_slider.src = img_arr[i];
}

setInterval(next, 2000);
