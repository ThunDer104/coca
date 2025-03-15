import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    slidesPerView: 1.5,
    spaceBetween: 32,
    autoplay: {
      delay: 3500,
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

export const useOurTeamSlider = () => {
  new Swiper('.ourteam__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay],
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 2,
      },
      375: {
        slidesPerView: 1.5,
      }
    }
  });
} 