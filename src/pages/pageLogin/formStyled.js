import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  gap: 8px;

  > label {
    margin-top: 10px;
  }

  > input {
    height: 34px;
  }

  > button {
    margin-top: 15px;
    height: 34px;
    background-color: var(--color-rosa);
    border: none;
    border-radius: 4px;
    color: var(--grey-0);
  }

  > button:hover{
    background-color: var(--color-rosa-ativo);
  }
`;
