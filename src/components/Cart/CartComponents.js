import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;

  /* h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  } */
`;

export const ProductList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  height: 100%;
  min-width: 300px;
  max-width: 400px;
  padding: 10px;
  margin: 15px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
`;

export const ImageContainer = styled.div`
`;

export const ProductDescription = styled.div`
  margin: 20px 15px 10px 15px;
  max-width: 270px;
  line-height: 1.2rem;
  font-weight: 500;
`;

export const ProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  box-shadow: 0 0 74px rgb(0 0 0 / 31%);
`;

export const AddToCardBtn = styled.button`
/* Adapt the colors based on primary prop */
background: #ffffff;
cursor: pointer;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid red;
border-radius: 8px;

&:hover {
  transition: 1s;
  border-color: palevioletred;
}
`;

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
