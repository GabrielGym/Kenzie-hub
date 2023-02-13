import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 100%;
  max-width:370px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 30px;
  box-sizing: border-box;
  padding: 40px 15px;

  > img {
    width: 98px;
  }

  > button {
    position: absolute;
    right: 15px;
    top: 32px;

    width: 80px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: none;
    border-radius: 4px;
    height: 32px;
  }

  > button:hover{
    background-color: var(--grey-2);
  }

  > div {
    background-color: var(--grey-3);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 35px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  >div>p{
    font-size:0.6rem;
  }
`;
