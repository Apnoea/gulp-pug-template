import $ from "jquery";
import '@fancyapps/fancybox';
import Inputmask from 'inputmask';
import 'nouislider';
import 'select2';
import Swiper from 'swiper/bundle';
import 'tooltipster';
import './_backend';

$(document).ready(() => {
  $('select').select2({
    minimumResultsForSearch: -1
  });

  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
