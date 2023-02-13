import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 10px;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  width: 100%;
  max-width: 370px;
  box-sizing: border-box;
  padding: 35px 15px;
  border-radius: 4px;
  gap: 20px;

  > button {
    height: 34px;
    border: none;
    width: 100%;
    border-radius: 4px;
    background-color: var(--grey-1);
    color: var(--grey-0);
  }

  > button:hover{
    background-color: var(--grey-2);

  }
`;
