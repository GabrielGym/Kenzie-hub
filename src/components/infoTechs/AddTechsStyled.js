import styled from "styled-components";

export const DivStyledAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    background-color: var(--grey-3);
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 4px;
  }

  > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 4px 4px 0px 0px;
    background-color: var(--grey-2);
  }

  > div > div > button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div > form {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    gap: 10px;
  }

  > div > form > input {
    height: 32px;
    margin-bottom:10px;
    padding-left: 15px;
  }

  > div > form > select{
    height: 38px;
    margin-bottom:10px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-0);
    border-radius: 4px;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.3rem;
    padding-left:15px;

    color: var(--grey-0);
    background-color: var(--grey-2); 
  }

  > div > form > button {
    background-color: var(--color-rosa);
    border:none;
    height: 38px;
    border-radius: 4px;
    margin-bottom:10px;

  }
`;
