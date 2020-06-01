$(document).ready(function () {
  $("#first").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    navText: [
      '<i class="fas fa-chevron-circle-left"></i>',
      '<i class="fas fa-chevron-circle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  });
});

/*Adding New hedar*/
$(document).ready(function () {
  //responsive menu toggle
  $("#menutoggle").click(function () {
    $(".xs-menu").toggleClass("displaynone");
  });
  //add active class on menu
  $("ul li").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  //drop down menu
  $(".drop-down").hover(function () {
    $(".mega-menu").addClass("display-on");
  });
  $(".drop-down").mouseleave(function () {
    $(".mega-menu").removeClass("display-on");
  });
});

//click me
const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", e => {
  e.preventDefault();
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

//mause click with out are than working

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

//shopping bag

const shopBox = document.querySelector("#cart-div");
const shoppingBoxPopup = document.querySelector(".shopping-box");
const off = document.querySelector(".box-close");

shopBox.addEventListener("click", e => {
  e.preventDefault();
  shoppingBoxPopup.style.display = "block";
  shopBox.setAttribute("style", "display:none !important");
});
off.addEventListener("click", () => {
  shoppingBoxPopup.style.display = "none";
  shopBox.setAttribute("style", "display:block !important");
});



//massage box

const mydivTwo = document.querySelector("#massage");
const massagePopup = document.querySelector(".massage-box");
const colseTwo = document.querySelector(".massage-close");

mydivTwo.addEventListener("click", e => {
  e.preventDefault();
  massagePopup.style.display = "block";
  mydivTwo.setAttribute("style", "display:none !important");
});
colseTwo.addEventListener("click", () => {
  massagePopup.style.display = "none";
  mydivTwo.setAttribute("style", "display:block !important");
});

//under massage box two

var massageBox = document.querySelector('.connect-box');
var massBoxPopup = document.querySelector('#massage-box');
var massBoxClose = document.querySelector('.massage-close2');

massageBox.addEventListener("click", e => {
  e.preventDefault();
  massBoxPopup.style.display = "block";
});

massBoxClose.addEventListener("click", () => {
  massBoxPopup.style.display = "none";

});

//under shopping box

var shoppingBox2 = document.querySelector('.shopping-under-box');
var shoppingBoxPopup2 = document.querySelector('#shopping-box');
var shoppingBoxClose = document.querySelector('.box-close2');

shoppingBox2.addEventListener("click", (e) => {
  shoppingBoxPopup2.style.display = "block";
});

shoppingBoxClose.addEventListener("click", () => {
  shoppingBoxPopup2.style.display = "none";
});








//menu

$('.menu, .overlay').click(function () {
    $('.menu').toggleClass('clicked');
    
    $('#nav').toggleClass('show');
    
});

//
//Product Request popup

var ProductRequestBox = document.querySelector('.productBox');
var ProductRequestBoxPopup = document.querySelector('.product-wrapper');
var ProductRequestBoxClose = document.querySelector('.product-request-box-close');

ProductRequestBox.addEventListener('click', (e) => {
  ProductRequestBoxPopup.style.display = 'block';
});

ProductRequestBoxClose.addEventListener('click', () => {
  ProductRequestBoxPopup.style.display = 'none';
});


// ProductRequestBoxPopup.addEventListener("click", () => {
//   ProductRequestBoxPopup.style.display = "none";
// });


