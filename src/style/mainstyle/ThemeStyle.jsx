import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ThemeSlider = styled(Slider)`
  outline: none;
  max-width: 1280px;
  overflow: hidden;
  .slick-list {
    //슬라이드 스크린
    height: 471px;
  }
  .slick-slide.slick-active {
    margin-right: 7px;
  }
  .slick-slide {
    //슬라이더
    div {
      //슬라이더 컨텐츠
      cursor: pointer;
      outline: none;
      width: 302px;
      margin-left: 8px;
    }
    img {
      width: 100%;
    }
  }
  .slick-track {
    width: 100%;
    margin: 0;
    div {
      transform: translate(-5px);
    }
  }

  /* arrow button */
  .slick-prev,
  .slick-next {
    z-index: 1;
    &::before {
      opacity: 0.7;
    }
  }
  .slick-next {
    background-image: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    &button {
      right: -25px;
    }
    height: 471px;
    width: 150px;
    &::before {
      content: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23ECECEC'/%3E%3Cpath d='M19.2473 12.3092C19.0888 12.5114 19 12.7828 19 13.0654C19 13.348 19.0888 13.6194 19.2473 13.8215L28.106 25.1388L19.2473 36.4537C19.0888 36.6559 19 36.9273 19 37.2099C19 37.4925 19.0888 37.7639 19.2473 37.966C19.3244 38.0646 19.4166 38.1429 19.5183 38.1964C19.6201 38.2499 19.7295 38.2775 19.84 38.2775C19.9505 38.2775 20.0598 38.2499 20.1616 38.1964C20.2634 38.1429 20.3555 38.0646 20.4326 37.966L29.8531 25.9289C30.0185 25.7175 30.1111 25.4339 30.1111 25.1388C30.1111 24.8436 30.0185 24.56 29.8531 24.3486L20.4326 12.3115C20.3555 12.2129 20.2634 12.1346 20.1616 12.0811C20.0598 12.0276 19.9505 12 19.84 12C19.7295 12 19.6201 12.0276 19.5183 12.0811C19.4166 12.1346 19.3244 12.2129 19.2473 12.3115V12.3092Z' fill='black'/%3E%3C/svg%3E");
    }
  }
  .slick-prev {
    left: 25px;
    &::before {
      content: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='25' transform='matrix(-1 0 0 1 25 25)' fill='%23ECECEC'/%3E%3Cpath d='M29.7527 12.3092C29.9112 12.5114 30 12.7828 30 13.0654C30 13.348 29.9112 13.6194 29.7527 13.8215L20.894 25.1388L29.7527 36.4537C29.9112 36.6559 30 36.9273 30 37.2099C30 37.4925 29.9112 37.7639 29.7527 37.966C29.6756 38.0646 29.5834 38.1429 29.4817 38.1964C29.3799 38.2499 29.2705 38.2775 29.16 38.2775C29.0495 38.2775 28.9402 38.2499 28.8384 38.1964C28.7366 38.1429 28.6445 38.0646 28.5674 37.966L19.1469 25.9289C18.9815 25.7175 18.8889 25.4339 18.8889 25.1388C18.8889 24.8436 18.9815 24.56 19.1469 24.3487L28.5674 12.3115C28.6445 12.2129 28.7366 12.1346 28.8384 12.0811C28.9402 12.0276 29.0495 12 29.16 12C29.2705 12 29.3799 12.0276 29.4817 12.0811C29.5834 12.1346 29.6756 12.2129 29.7527 12.3115V12.3092Z' fill='black'/%3E%3C/svg%3E");
    }
  }
`;
