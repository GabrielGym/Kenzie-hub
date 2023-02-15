import styled from "styled-components";

export const SectionTecnologiasStyled = styled.section`
  box-sizing: border-box;
  padding: 30px 10px;
  max-width: 780px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;


  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3px;
    width: 33px;
    height: 32px;
    border: none;
    border-radius: 4px;
    background-color: var(--grey-3);
  }

  > ul {
    border-radius: 4px;
    background-color: var(--grey-3);
    box-sizing: border-box;
    padding: 30px 3%;

    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  > ul > li {
    min-width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: var(--grey-4);
  }

  > ul > li > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    min-height: 100%;
    border: none;
    border-radius: 4px;
    padding: 0px 20px;
    background-color: transparent;
  }

  > ul > li > button:hover {
    background-color: var(--grey-1);
    color: var(--grey-0);
    > p {
      color: var(--grey-0);
    }
  }
`;
