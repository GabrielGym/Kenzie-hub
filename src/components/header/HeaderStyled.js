import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width:780px;
  margin:0 auto;
  padding: 30px 10px;
  box-sizing: border-box;

  > nav {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > nav > button {
    width:56px;
    height:32px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    border:none;
    border-radius:4px;
  }

  > nav > button:hover{
    background-color: var(--grey-2);
  }
`;
