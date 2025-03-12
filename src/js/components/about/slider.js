import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    slidesPerView: 1.5,
    spaceBetween: 32,
    autoplay: {
      delay: 35500,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay],
    breakpoints: {
      993: {
        slidesPerView: 2.5,
      },
      577: {
        slidesPerView: 2,
      }
    }
  });
} 