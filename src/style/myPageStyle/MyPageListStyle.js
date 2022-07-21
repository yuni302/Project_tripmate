import styled from 'styled-components';

export const ReservationStyle = styled.div`
  .list-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    width: 1280px;
    height: 57px;
    border: 1px solid #afafaf;
    border-left: none;
    border-right: none;
    margin: 0 auto;
    background: #f8f8f8;
    span {
      text-align: center;
      width: 200px;
    }
    #info {
      width: 680px;
    }
  }

  .list-content {
    border: 1px solid #afafaf;
    border-left: none;
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
    height: 174px;
    margin: 0 auto;

    div {
      text-align: center;
      width: 200px;
      font-size: 16px;
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 680px;
      height: 174px;
      div {
        position: relative;
        width: 506px;
        height: 174px;
        text-align: left;

        .title {
          position: absolute;
          top: 16px;
          font-size: 18px;
          font-weight: 700;
        }
        .price {
          position: absolute;
          top: 49px;
          font-size: 18px;
          font-weight: 700;
        }
        .information {
          position: absolute;
          top: 82px;
          font-size: 16px;
          font-weight: 500;
          color: #afafaf;
        }
        .check {
          position: absolute;
          top: 139px;
          color: #0080c6;
        }
      }
      img {
        display: inline-block;
        margin: 16px;
        border-radius: 8px;
        width: 142px;
        height: 142px;
      }
    }
  }
`;

export const WishListStyle = styled(ReservationStyle)`
  .list-content {
    justify-content: left;
    div {
      position: relative;
      text-align: left;
      width: 1106px;
      height: 174px;
      .title {
        position: absolute;
        top: 16px;
        font-size: 18px;
        font-weight: 700;
      }
      .price {
        position: absolute;
        top: 49px;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }

  img {
    display: inline;
    border-radius: 8px;
    width: 142px;
    height: 142px;
    margin: 16px;
  }
`;

export const PointListStyle = styled(ReservationStyle)`
  #break-down {
    width: 680px;
  }
  .list-content {
    height: 60px;
    .break-down {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 680px;
      height: 60px;
    }
    .plus {
      color: #0080c6;
    }
  }
`;

export const InfoListStyle = styled(ReservationStyle)`
  .btn-group {
    display: block;
    text-align: center;
    margin: 0 auto;
    width: 1280px;
    .btn {
      width: 640px;
      display: inline-block;
      margin: 0 auto;
      background: #fff;
      border-radius: 0px;
      border-bottom: 1px solid #afafaf;
    }
    .active {
      border-bottom: 5px solid #0080c6;
      color: #1b1b1b;
    }
  }
`;

export const KeywordListStyle = styled(ReservationStyle)`
  display: block;
  .keyword-title {
    display: block;
    margin: 60px auto;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top: 60px 0 20px 0;
  }
  .keyword {
    display: block;
    margin: 40px auto 20px auto;
    width: 470px;
    height: 21px;
    font-size: 18px;
    font-weight: 500;
    color: #888;
  }
  .keyword-select {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    text-align: left;
    background-color: #fff;
    border: 1px solid #afafaf;
    padding: 20px;
    width: 470px;
    height: 60px;
    span {
      color: #afafaf;
    }
    cursor: pointer;
  }
  .btn-modify {
    display: block;
    background-color: #0080c6;
    color: #fff;
    text-align: center;
    border: none;
    border-radius: 8px;
    margin: 50px auto 0 auto;
    width: 150px;
    height: 60px;
  }
  .select-box {
    position: absolute;
    width: 100%;
    display: block;
    margin: 0 auto;
    z-index: 2;
    p {
      display: inline;
      margin-left: 8px;
    }
  }
  .select {
    width: 470px;
    height: 60px;
    margin: 0 auto;
    display: block;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  }
`;
