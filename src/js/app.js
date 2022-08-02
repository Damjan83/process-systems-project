import {accordion, accArtical} from "./components/accordion";
import cSelect from "./components/select";
import {zenscroll} from "../../node_modules/zenscroll";

cSelect();


accordion();
accArtical();


const mobileMenu = document.querySelector('.mobile-menu__burger');
const nav = document.querySelector('.nav');
const closeIcon = document.querySelector('.close-icon');
const closeIconFilter = document.querySelector('.close-icon--filter');
const listGray = document.querySelector('.list-gray');
const listBlue = document.querySelector('.list-blue');
const gridGray = document.querySelector('.grid-gray');
const gridBlue = document.querySelector('.grid-blue');
const itemDesc = document.querySelectorAll('.item-desc');
const pagesNumber = document.querySelectorAll('.pagination__number');
const navFilter = document.querySelector('.nav--filter');
const btnFilter = document.querySelector('.btn--filter');
const navEnquiry = document.querySelector('.nav--enquiry');
const enquiry = document.querySelector('.artical-option__add-enquiry');
const closeIconEnquiry = document.querySelector('.close-icon--enquiry');
const mySliderCat = document.querySelector('.my-slider-cat');

if(enquiry) {
  enquiry.addEventListener('click' , function () {
    navEnquiry.style.display = 'block';
  })
}

if(closeIconEnquiry) {
  closeIconEnquiry.addEventListener('click' , function () {
    navEnquiry.style.display = 'none';
  });
}

if(mobileMenu) {
  mobileMenu.addEventListener('click' , function () {
    nav.style.display = 'block';
  });
}

if(closeIcon) {
  closeIcon.addEventListener('click' , function () {
    nav.style.display = 'none';
  });
}

if(closeIconFilter) {
  closeIconFilter.addEventListener('click' , function () {
    navFilter.style.display = 'none';
  });
}

if(btnFilter) {
  btnFilter.addEventListener('click' , function () {
    navFilter.style.display = 'block';
  });
}

if(listGray) {
  listGray.addEventListener('click' , function () {
    for(let i = 0; i < itemDesc.length; i++) {
      itemDesc[i].style.display = 'block'
    }
    listBlue.style.display = 'block';
    listGray.style.display = 'none';
    gridBlue.style.display = 'none';
    gridGray.style.display = 'block';
  });
}

if(gridGray) {
  gridGray.addEventListener('click' , function () {
    for(let i = 0; i < itemDesc.length; i++) {
      itemDesc[i].style.display = 'none'
    }
    listBlue.style.display = 'none';
    listGray.style.display = 'block';
    gridBlue.style.display = 'block';
    gridGray.style.display = 'none';
  });
}





for(let i = 0; i < pagesNumber.length; i++) {
  pagesNumber[i].addEventListener('click' , function () {
    for(let j = 0; j < pagesNumber.length; j++) {
      pagesNumber[j].classList.remove('is-active');
    }
    pagesNumber[i].classList.add('is-active');
  })
}


var slider = tns({
    "container": ".my-slider",
    "mouseDrag": true,
    "loop": false,
    "controls": false,
    "nav": false,
    "responsive": {
        "350": {
            "items": 1.4
        },
        "768": {
            "items": 3
        }
    },
    "swipeAngle": false,
    "speed": 400
});

if(mySliderCat) {
  var slider = tns({
    "container": ".my-slider-cat",
    "mouseDrag": true,
    "loop": false,
    "controls": false,
    "nav": false,
    "responsive": {
        "350": {
            "items": 1.4
        },
        "768": {
            "items": 3
        }
    },
    "swipeAngle": false,
    "speed": 400
});
}

