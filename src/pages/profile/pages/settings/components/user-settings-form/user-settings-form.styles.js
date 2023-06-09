import styled from "styled-components";


export const UserSettingsFormStyle = styled.div`
  width: 100%;
`

export const UserSettingsInputs = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
`

export const UserSettingsInput = styled.div`
  max-width: 300px;
  width: 300px;
  margin-bottom: 20px;
  padding-right: 0.25rem;
  padding-left: 0.25rem;

  &:nth-child(6) {
    text-align: right;
  }


  @media screen and (max-width: 888px) {
    max-width: 270px;
    width: 270px;
  }

  @media screen and (max-width: 820px) {
    max-width: 300px;
    width: 300px;
  }

  @media screen and (max-width: 630px) {
    max-width: 260px;
    width: 260px;
  }

  @media screen and (max-width: 549px) {
    width: 100%;
    max-width: 100%;
  }

  & label {
    font-weight: 400;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
    display: block;
    padding-bottom: 3px;
  }

  & input {
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-weight: 400;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.87);
    text-indent: 1rem;
    padding: 0;
    width: 100%;
    height: 2.5rem;
    border-radius: 4px;
    font-family: Roboto, sans-serif;

    &:focus {
      outline: 1px solid var(--color-blue);
    }

    &::placeholder {
      color: rgba(128, 128, 128, 0.47);
    }
  }

  & a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding: 12px;
    background-color: rgba(128, 128, 128, 0.10);
    border-radius: 4px;
  }

  & button {
    background-color: var(--color-blue);
    color: white;

    &:hover {
      background-color: rgb(17, 111, 197);
    }

    @media screen and (max-width: 549px) {
      width: 100%;
    }
  }
`

export const BottomItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: start;
    flex-direction: column;

    button {
      font-weight: 600;
      font-size: 15px;
      border: none;
      cursor: pointer;
      width: 100%;
      margin-bottom: 20px;

      @media screen and (max-width: 820px) {
        &:nth-child(1) {
          display: none;
        }
      }

      &.btn-cancel {
        background-color: rgba(255, 0, 0, 0.1);
        margin: 0 0 20px 0;
        color: red;

        &:hover {
          background-color: red;
          color: white;
        }
      }
    }
  }
`