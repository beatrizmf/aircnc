import { createGlobalStyle } from 'styled-components';

import bg from '../assets/img/background.jpg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #000 url(${bg}) no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  .container {
    margin: 80px auto 0;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    width: 100%;
    background: #fff;
    margin-top: 50px;
    border-radius: 4px;
    padding: 30px;

    p {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 30px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        font-size: 14px;
        color: #444;
        font-weight: bld;
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;

        span {
          font-weight: normal;
          color: #999;
          font-size: 12px;
        }

        input {
          margin-bottom: 20px;
          margin-top: 10px;
          border: 1px solid #ddd;
          border-radius: 2px;
          height: 45px;
          padding: 0 15px;
          font-size: 16px;
        }
      }
    }

    button.btn {
      border: 0;
      border-radius: 2px;
      width: 100%;
      height: 42px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: bold;
      background: #f05a5b;
      color: #fff;
      cursor: pointer;

      &:hover {
        background: #e14f50;
      }
    }
  }
`;
