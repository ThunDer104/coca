import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

export const useOverviewSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1.5,
    spaceBetween: 32,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay],
    breakpoints: {
      769: {
        slidesPerView: 2.5,
      },
      577: {
        slidesPerView: 2,
      },
    }
  });
} 

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation],
    navigation: {
      nextEl: '.articles__navigation-arrow--next',
      prevEl: '.articles__navigation-arrow--prev',
      disabledClass: 'articles__navigation-arrow--disabled',
    },
    breakpoints: {
      993: {
        slidesPerView: 2.8,
      },
      577: {
        slidesPerView: 2,
      },
      430: {
        slidesPerView: 1.5,
      }
    }
  });
} 