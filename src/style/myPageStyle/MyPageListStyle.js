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
    border-top: none;
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
    &:checked {
      background: #000;
    }
    p {
      font-size: 18px;
      font-weight: 400;
    }
    input[type='checkbox']:checked {
      color: #fff;
      background: #000;
    }
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
    font-size: 18px;
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
    font-weight: 600;
    font-size: 20px;
  }
  div {
    position: relative;
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

export const PrivacyStyle = styled(ReservationStyle)`
  display: block;
  .privacy-title {
    display: block;
    margin: 60px auto;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top: 60px 0 20px 0;
  }
  .profile-photo {
    display: block;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    margin: 35px auto 0 auto;
  }
  .user-name {
    display: block;
    margin: 0 auto;
    text-align: center;
    margin: 20px auto 8px auto;
    width: 300px;
    height: 24px;
    font-weight: 700;
    font-size: 20px;
  }

  .photo {
    font-weight: 600;
    font-size: 16px;
    margin: 0 auto;
    margin-bottom: 50px;
    text-align: center;
    color: #0080c6;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  .input-title {
    display: block;
    margin: 10px auto;
    width: 470px;
    height: 21px;
    font-size: 18px;
    font-weight: 500;
  }
  .input {
    display: block;
    width: 470px;
    height: 60px;
    background: #ffffff;
    border: 1px solid #0080c6;
    border-radius: 4px;
    color: #1b1b1b;
    font-size: 18px;
    font-weight: 500;
    padding: 20px;
    margin: 0 auto;
    color: #888;
  }
  .input-check {
    display: block;
    width: 470px;
    height: 60px;
    background: #ffffff;
    border: 1px solid #0080c6;
    border-radius: 4px;
    color: #1b1b1b;
    font-size: 18px;
    font-weight: 500;
    padding: 20px;
    margin: 0 auto;
    color: #888;
    margin-bottom: 47px;
  }
  .input-birth {
    display: inline-block;
    width: 150px;
    height: 60px;
    background: #ffffff;
    border: 1px solid #0080c6;
    border-radius: 4px;
    color: #1b1b1b;
    font-size: 18px;
    font-weight: 500;
    padding: 20px;
    margin: 0 auto;
    color: #888;
    margin: 5px 0;
    margin-bottom: 47px;
  }
  .birth-check {
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
    text-align: center;
    width: 470px;
  }
  .gender {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 22px;
    span {
      margin-left: 7.5px;
      font-weight: 500;
      font-size: 18px;
    }
  }
  .gender-club {
    margin: 0 auto;
    width: 470px;
  }
  .terms {
    display: block;
    margin: 60px auto;
    width: 470px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    span {
      color: #0080c6;
    }
  }
  .btn-modify {
    display: block;
    background-color: #0080c6;
    color: #fff;
    text-align: center;
    border: none;
    border-radius: 8px;
    margin: 0 auto;
    width: 150px;
    height: 60px;
    font-weight: 600;
    font-size: 20px;
  }
  .gender-select {
    width: 21px;
    height: 21px;
    margin: 3px;
  }
`;
