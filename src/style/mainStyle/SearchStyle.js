import styled from 'styled-components';

export const SearchStyle = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  background-color: #fff;
  box-shadow: 0px 5px 20px #bbbbbb10;
  border-radius: 8px;
  .search-box {
    width: 530px;
    height: 595px;
    span {
      font-size: 18px;
      color: #888888;
    }
    .where {
      .locate {
        display: flex;
        flex-direction: column;
        .where-title {
          font-size: 24px;
          font-weight: 700;
          margin: 30px 30px 20px 30px;
        }
        .where-sub-title {
          margin: 0 30px;
        }
        input {
          box-sizing: border-box;
          width: 470px;
          height: 60px;
          margin: 12px auto 20px auto;
          border: 0.97885px solid #afafaf;
          border-radius: 4px;
          padding-left: 20px;
          font-size: 18px;
          color: #1b1b1b;
        }
      }
      .fav-locate {
        display: flex;
        align-items: center;
        span {
          margin-left: 30px;
        }
        ul.fav-locate-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding-left: 20px;
        }
        li {
          button {
            &:first-child {
              margin-left: 0;
            }
            margin: 0 5px;
            font-size: 18px;
            color: #0080c6;
            border: none;
            background-color: #ffffff;
          }
        }
      }
    }
    hr {
      border: 0.97px solid #afafaf;
      margin: 20px 30px;
    }
    .who {
      .who-title {
        font-size: 24px;
        font-weight: 700;
        margin: 10px 30px 20px 30px;
      }
      .who-sub-title {
        margin: 0 30px;
      }
      .select {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 7px 0;

        button {
          margin: 5px;
          width: 150px;
          height: 60px;
          background-color: #fff;
          border: 1px solid #afafaf;
          border-radius: 4px;
          font-size: 18px;
          color: #afafaf;
        }
        .active {
          border-color: #0080c6;
          color: #0080c6;
        }
      }
    }
    .search {
      width: 470px;
      height: 60px;
      margin: 20px 30px 0 30px;

      background-color: #0080c6;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
    }
    .search[disabled] {
      background-color: #afafaf;
    }
  }
`;
