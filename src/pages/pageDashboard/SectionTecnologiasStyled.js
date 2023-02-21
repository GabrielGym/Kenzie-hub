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
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  > ul > li > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    border: none;
    border-radius: 4px;
    padding: 0px 50px 0px 20px;
    background-color: transparent;
    background-color: var(--grey-4);
    text-decoration: none;
  }

  > ul > li:hover {
    background-color: var(--grey-1);

    > a {
      background-color: var(--grey-1);
    }

    > a > p {
      color: var(--grey-0);
    }
  }

  > ul > li > button {
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
  }
`;
