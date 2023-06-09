import styled from "styled-components";

export const SearchBarStyles = {
    Search: styled.div`
      position: relative;
      height: 38px;
      width: 100%;

      ${(props) => {
        if (props.fullscreen === true) {
          return `
              @media screen and (max-width: 820px) {
                position: fixed;
                top: 87px;
                width: 100vw !important;
                z-index: 20000;                
              }
            `
        }
      }};

      & form {
        position: relative;
        height: 38px;
        width: 100%;
        
        ${(props) => {
          if (props.fullscreen === true) {
            return `
              @media screen and (max-width: 820px) {
                z-index: 10010 !important;
                top: -65px;
                width: 86%;
                left: 20px
              }
            `
          }
        }};
      }

      & input {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(118, 121, 127, 0.3);
        font-weight: 400;
        font-size: .875rem;
        font-family: Inter, sans-serif;
        outline: none;
        padding: 0 calc(15% + 38px) 0 16px;
        background-color: #fff;
        vertical-align: top;
        box-shadow: 0 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 8%);
        transition: box-shadow .2s ease;
        border-radius: 4px;
        position: relative;

        ${(props) => {
          if(props.showSearchBar) {
            return `
                border-radius: 4px 4px 0 0 !important;
              `
          }
        }};

        ${(props) => {
          if (props.fullscreen === true) {
            return `
              @media screen and (max-width: 820px) {
                border-radius: 9px !important;
              }
            `
          }
        }};
        

        @media screen and (max-width: 820px) {
          background-color: #eaeaea;
          border-radius: 9px;
          border: 1px solid rgba(118, 121, 127, 0.13);
        }
      }
    `,

    Span: styled.span`
      font-size: 13px;
      font-weight: 500;
      position: relative;
      right: 10px;
      color: grey;

      @media screen and (max-width: 990px) {
        display: none;
      }
    `,

    BackIcon: styled.div`
      cursor: pointer;
      z-index: 4000 !important;
      position: absolute;
      top: -54px;
      display: none;

      ${(props) => {
        if (props.fullscreen === true) {
          return `
              @media screen and (max-width: 820px) {
                display: block !important;
              }
            `
        }
      }};
    `,

    SearchBar: styled.div`
      width: 100%;
      position: absolute;
      top: calc(100%);
      background-color: #fff;
      visibility: hidden;
      opacity: 0;
      z-index: 10;
      border: 1px solid rgba(118, 121, 127, 0.3);
      border-top: none;
      box-sizing: border-box;
      box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
      border-radius: 0 0 12px 12px;
      padding: 10px 0 25px 0;

      ${(props) => {
        if (props.fullscreen === true) {
          return `
              @media screen and (max-width: 820px) {
                width: 100vw !important;
                height: 100vh;
                left: -16px !important;
                top: -87px !important;
                z-index: 1005 !important;
                border-radius: 0 !important;
                padding: 70px 0 25px 0;
               }
            `
        }
      }}
      & h4 {
        color: #464646;
        font-size: 15px;
        font-weight: 600;
      }

      & i {
        color: grey;
        padding-right: 15px;
        font-size: 15px;
        font-weight: 500;
      }

      & span {
        font-size: 14px;
        color: #464646;
        font-weight: 500;
      }

      ${props => {
        if (props.showSearchBar) {
          return `
                visibility: visible;
                opacity: 1
             `
        }
      }};

      @media screen and (max-width: 990px) {
        left: 0;
      }
    `,

    RecentlySearched: styled.div`
      & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
      }
    `,

    Title: styled.div`
      padding: 0 17px;

      & span {
        cursor: pointer;
        font-weight: 600;
      }
    `,

    SearchedList: styled.div`
      width: 100%;
      margin: 5px 0;
    `,

    ResentList: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;
      padding: 0 17px;

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        cursor: pointer;
      }

      & i {
        cursor: pointer;
      }
    `,

    PopularSearched: styled.div`
      & h4 {
        padding: 0 17px;
        margin-top: 15px;
      }
    `,
    PopularList: styled.ul`

      & li {
        margin: 10px 0;
        padding: 7px 17px;

        &:hover {
          background-color: var(--color-grey);
          cursor: pointer;
        }
      }
    `,


    SearchBtn: styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      z-index: 1;
      width: 15%;
      border-radius: 0 4px 4px 0;
      background-color: rgba(49, 49, 196, 0.05);
      height: 38px;
      cursor: pointer;

      & i {
        color: black;
        opacity: .6;
        font-size: 16px;
        font-weight: 400;
      }

      @media screen and (max-width: 990px) {
        right: 0;
      }
    `,

    ClearBtn: styled.span`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 70px;
      border: none;
      z-index: 1;
      width: 15%;
      height: 40px;

      & i {
        cursor: pointer;
        color: #8d8d8d;
      }

      @media screen and (max-width: 990px) {
        right: 50px;
      }
      
      @media screen and (max-width: 820px) {
        right: 70px;
      }
      
      @media screen and (max-width: 650px) {
        right: 60px !important;
      }

      @media screen and (max-width: 470px) {
        right: 45px !important;
      }
    `,
}