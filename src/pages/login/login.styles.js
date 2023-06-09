import styled, {keyframes} from "styled-components";

const spin = keyframes`
  100% {transform: rotate(360deg)}
`

export const AuthStyle = {
    AuthContainer: styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
    `,

    AuthForm: styled.div`
      max-width: 550px;
      width: 550px;
      padding: 20px;

      & h1 {
        color: var(--color-black);
        font-size: 40px;
        font-weight: 700;
        letter-spacing: 0.2px;
        text-align: center;
      }

      & form {
        margin-top: 40px;
        width: 100%;
      }
    `,

    DoubleInput: styled.div`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      
      @media screen and (max-width: 680px){
        display: inline;
      }
    `,

    InputParent: styled.div`
      margin: 0 4px 20px 4px;

      & label {
        color: var(--color-black);
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        font-weight: 600;
        margin-bottom: 15px;
        display: inline-block;
      }
    `,

    Input: styled.div`
      position: relative;
      & input {
        width: 100%;
        background: rgb(255, 255, 255);
        border: 2px solid rgb(232, 232, 232);
        border-radius: 10px;
        outline: none;
        padding: 21px 25px;
        font-size: 15px;
        line-height: 16px;

        &:focus {
          border: 2px solid rgb(32, 145, 249);
        }
      }
    `,

    Eye: styled.div`
      cursor: pointer;
      position: absolute;
      right: 25px;
      top: 23px;
    `,

    ForgotPass: styled.span`
      text-align: left;
      text-decoration: none;
      color: rgb(115, 115, 115);
    `,

    Reset: styled.span`
      display: flex;
      justify-content: end;
      
      & a{
        color: var(--color-black);
        
        &:hover{
          text-decoration: underline;
        }
      }
    `,

    ErrorValid: styled.span`
      color: red;
      font-size: 15px;
      position: relative!important;
      top: 7px!important;
    `,

    Error: styled.span`
      color: red;
      font-size: 15px;
      text-align: center;
      display: block;
    `,

    Button: styled.button`
      color: var(--color-white);
      border-radius: 10px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      font-size: 16px;
      line-height: 24px;
      padding: 15px 30px;
      font-weight: 700;
      background: rgb(32, 145, 249);
      width: 100%;
      margin-top: 40px;
      position: relative;

      &:hover {
        background-color: rgb(6, 128, 246);
      }
      
      & > div{
        padding: 12px;
      }
      
      ${(props) => {
          if(props.loading){
              return`
                background-color: rgba(6, 128, 246, 0.80);
              `
          }
      }}
    `,

    Spinner: styled.div`
      display: block;
      width: 34px;
      height: 34px;
      position: absolute;
      top: 8px;
      left: calc(50% - 17px);
      background: transparent;
      box-sizing: border-box;
      border-top: 4px solid white;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-radius: 100%;
      animation: ${spin} 0.6s ease-out infinite;
    `,

    BottomText: styled.div`
      color: rgb(37, 43, 66);
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.2px;
      font-weight: 500;
      margin-top: 30px;
      text-align: center;

      & a {
        text-decoration: none;
        font-weight: 700;
        color: rgb(32, 145, 249);
      }
    `,

    Or: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 25px 0;
    `,

    OrLine: styled.div`
      background: rgb(218, 218, 218);
      width: 50%;
      height: 2px;
    `,

    OrText: styled.span`
      color: rgb(115, 115, 115);
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.2px;
      font-weight: 700;
      margin: 0 20px;
    `
}