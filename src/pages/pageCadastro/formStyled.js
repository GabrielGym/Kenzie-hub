import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 10px;

  > label {
    margin-top: 10px;
  }

  > input {
    height: 34px;
  }

  > select {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-0);
    border-radius: 4px;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.3rem;
    padding-left: 10px;
    height: 34px;
    color: var(--grey-1);
  }

  > button {
    margin-top:8px;
    background-color: var(--color-rosa-desativo);
    border:none;
    border-radius:4px;
    height:34px
  }

  > button:hover{
    background-color: var(--color-rosa-ativo);

  }
`;
