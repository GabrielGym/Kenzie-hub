import styled from "styled-components";

export const SectionInfoStyled = styled.section`
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);

  > div {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 35px 10px;
    max-width: 780px;
    margin: 0 auto;
    gap:20px;
  }

  @media (min-width: 500px) {
    > div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
