import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledPhoto = styled(Slider)`
  &,
  img {
    width: 1440px;
    height: 755px;
  }
`;
