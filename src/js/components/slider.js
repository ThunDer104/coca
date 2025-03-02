import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay],
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    }
  });
} 

