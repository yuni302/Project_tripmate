import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlider = styled(Slider)`
  position: absolute;
  top: 30%;
  left: 5%;
  z-index: 1;
  width: 410px;

  color: #ffffff;
  a,
  p {
    font-size: 20px;
    font-weight: 600;
    height: 24px;
    text-decoration: none;
    color: #ffffff;
    font-family: pretendard;
  }
  h1 {
    white-space: break-spaces;
    line-height: 150%;
    font-size: 40px;
    font-weight: 700;
    margin: 10px 0;
    font-family: pretendard;
  }
  .slick-dots {
    bottom: -59px;
    li {
      width: 10px;
      height: 10px;
      button {
        width: 10px;
        height: 10px;
        &::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 5.5px;
          background-color: #ffffff;
          opacity: 40%;
        }
      }
    }
    .slick-active {
      margin-right: 17px;
      button {
        &::before {
          content: '';
          width: 27px;
          height: 10px;
          border-radius: 5.5px;
          opacity: 100%;
        }
      }
    }
  }
`;
