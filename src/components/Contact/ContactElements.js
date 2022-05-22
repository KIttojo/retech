import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 2.5rem;
    }
  }
`;
