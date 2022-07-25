import styled from 'styled-components';

export const ProductStyle = styled.div`
  hr {
    max-width: 1300px;
    margin: 0 auto;
    &:nth-of-type(2) {
      margin-bottom: 35px;
    }
  }
`;

// ProductPage Title
export const ProductTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1277px;
  margin: 0 auto;
  margin-top: 60px;
  span:first-child {
    margin-left: 0;
  }
  span:last-child {
    margin-right: 0;
  }
  button {
    border: none;
    padding: 0;
    background: #fff;
    cursor: pointer;
  }
  button:first-child {
    margin-right: 15px;
  }
  button:last-child {
    margin-left: 15px;
  }
  .hash-tag {
    display: inline-block;
    padding: 5px 14px;
    font-size: 16px;
    margin: 0 4px;
    margin-bottom: 20px;
    color: #0080c6;
    background: #e9f7ff;
    border-radius: 30px;
  }
  .title {
    font-size: 32px;
    font-weight: 700;
  }
  .price {
    margin-top: 16px;
    margin-bottom: 19px;
    font-size: 26px;
    font-weight: 700;
  }
`;

// Image[0] 및 Calendar
export const CalendarStyle = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 28px;
  margin-bottom: 50px;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  overflow: hidden;
  @media (max-width: 1277px) {
    display: block;
    text-align: center;
    img {
      display: block;
      margin: 0 auto;
    }
  }
  img {
    width: 629px;
    height: 530px;
    margin: 0 auto;
  }

  //달력

  .fc-event-title-container {
    display: inline;
    text-align: center;
    width: 88px;
    justify-content: center;
    align-items: center;
  }
  .fc-event-title {
    font-size: 16px;
    font-weight: 400;
  }
  .fc-header-toolbar {
    width: 622px;
    margin: 0 auto;
  }
  .fc-toolbar-title {
    font-size: 24px;
    font-weight: 700;
  }
  .fc-col-header-cell-cushion {
    color: #000;
  }
  #calendar {
    width: 1400px;
    height: 500px;
    margin: 0 auto;
  }
  .fc-view-harness {
    width: 622px;
    margin: 0 auto;
  }
  .fc-daygrid-day-top {
    position: relative;
    justify-content: left;
    font-size: 18px;
    font-weight: 500;
  }
  .fc-button {
    background-color: #fff;
    border: none;
    &:active {
      border: none;
      background: #fff;
    }
    &:focus {
      border: none;
    }
    &:hover {
      background-color: #fff;
    }
  }
  .fc-button-primary {
    &:active {
      border: none;
      background-color: #fff;
    }
  }

  .fc-daygrid-day-bottom {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }
  .fc-daygrid-day-events {
    width: 88px;
  }
  .fc-button-primary:not(:disabled) {
    &:active {
      background: #fff;
    }
    &:focus {
      box-shadow: none;
    }
  }
  .fc-button-active:focus {
    box-shadow: none;
  }
  .fc-button-primary:not(:disabled):active:focus {
    box-shadow: none;
  }
  .fc-next-button {
    &:active {
      border: none;
      background: #fff;
    }
    &:focus {
      border: none;
    }
    &:hover {
      background-color: #fff;
    }
  }
  .fc-icon {
    color: #000;
  }
  .fc-button-primary {
    background-color: #fff;
  }
  .fc-daygrid-day-frame {
    border: none;
    width: 88px;
    height: 63px;
    margin: 0;
  }
  .fc-daygrid-day {
    height: 63px;
  }
  .fc-scrollgrid-sync-inner {
    height: 63px;
    &:first-child {
      height: 20px;
    }
  }
  .fc-scrollgrid-sync-inner {
    &:first-child {
      margin-bottom: 9px;
    }
    text-align: left;
    margin-bottom: 0px;
  }
  .fc-col-header-cell-cushion {
    color: none;
  }
  .fc-daygrid-day {
    width: 88px;
    height: 63px;
    margin: 0;
    &:hover {
      background: #88888890;
    }
    &:focus {
      background: #88888890;
    }
  }
  .fc-day-other {
    &:hover {
      background: #fff;
    }
  }
  .fc-day-today {
    background-color: #ffeab6 !important;
  }
  .fc-daygrid-event {
    position: absolute;
    top: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 90px;
    border-radius: 0;
  }
  .fc-scrollgrid {
    width: 650px;
    height: 500px;
    border: none;
  }
  .fc-scroller {
    border: none;
    display: block;
    margin: 0 auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .fc-scrollgrid-section {
    border: none;
  }
  .fc-scrollgrid-section-header {
    border: none;
  }
  .fc-scroller-harness {
    border: none;
  }
  .fc-col-header {
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .fc-col-header-cell {
    margin-bottom: 10px;
  }
  .fc-daygrid-body {
    margin: 0 auto;
    border: none;
  }
  .fc-daygrid-body-unbalanced {
    border: none;
  }
  .fc-day {
    border: none;
  }
  .fc-day-sun {
    /* border: none; */
  }
  .fc-scrollgrid-section {
    border: none;
  }
  .fc-scrollgrid-section-body {
    border: none;
    height: 500px;
  }
  .fc-scrollgrid-section-liquid {
    border: none;
  }
  .fc {
    border: none;
  }
  .fc-media-screen {
    border: none;
  }
  .fc-direction-ltr {
    border: none;
  }
  .fc-theme-standard {
    border: none;
  }
  .fc-view-harness {
    border: none;
  }
  .fc-view-harness-active {
    border: none;
  }
  .fc-daygrid {
    border: none;
  }
  .fc-dayGridMonth-view {
    border: none;
    text-align: left;
  }
  .fc-view {
    border: none;
  }
  .fc-day-sun {
    text-align: left;
    color: #e96767;
  }
  .fc-day-mon {
    text-align: left;
  }
  .fc-day-tue {
    text-align: left;
  }
  .fc-day-wed {
    text-align: left;
  }
  .fc-day-thu {
    text-align: left;
  }
  .fc-day-fri {
    text-align: left;
  }
  .fc-day-sat {
    text-align: left;
    color: #0080c6;
  }
  .fc-col-header-cell {
    margin-bottom: 15px;
  }

  //달력

  .calendar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 670px;
    height: 630px;
    overflow: hidden;
    margin: 0 auto;
    .reservation {
      display: flex;
      width: 100%;
      height: 30px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #fff;
      margin-left: 16px;
      .plan {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0 10px;
        font-size: 18px;
        color: #888;
        #possible-box {
          height: 18px;
          width: 16px;
          border: none;
          background-color: #0080c6;
          margin-right: 8px;
        }
        #impossible-box {
          height: 18px;
          width: 16px;
          border: none;
          background-color: #888;
          margin-right: 8px;
        }
        #select-box {
          height: 18px;
          width: 16px;
          border: none;
          background-color: #e9f7ff;
          margin-right: 8px;
        }
        #today-box {
          height: 18px;
          width: 16px;
          border: none;
          background-color: #ffe4a1;
          margin-right: 8px;
        }
      }
    }
  }
`;

// 연관 상품 리스트 스타일 (기본 스타일)
export const RelatedStyle = styled.div`
  display: block;
  width: 100%;
  max-width: 1284px;
  margin: 100px auto;
  color: #000;
  .related-title {
    font-weight: 700;
    font-size: 24px;
    color: 24px;
    margin-bottom: 60px;
  }
  .related-card {
    text-align: center;
  }
  .react-calendar {
    width: 500px;
  }
`;
// 여행지 소식 리스트 스타일
export const TravelNewsStyle = styled(RelatedStyle)`
  .news-title {
    font-weight: 700;
    font-size: 24px;
    color: #000;
    margin-bottom: 30px;
  }
  .news-card {
    display: block;
    text-align: center;
  }
`;
