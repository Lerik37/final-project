import React from 'react';
import ProductCatalog from "../components/ProductCatalog";
import styled from 'styled-components';
import backImage from "../assets/back.jpg";


const ProductList = () => {
    return (
        <Container>
                <h1>Каталог товаров</h1>
                <ProductCatalog/>
        </Container>
    );
};
const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: url(${backImage});
  width: 100%;
  min-height: 100vh;

  h1 {
    font-family: Gill Sans, sans-serif;
    color: #8a6c3e;
    text-align: center;
  }
`;

export default ProductList;
