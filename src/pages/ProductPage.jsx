import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ProductItem from "../components/ProductItem";
import styled from "styled-components";
import backImage from "../assets/back.jpg";
import ItemFeatures from "../components/ProductFeatures";

const ProductPage = () => {
    const params = useParams()
    const id = params.id - 1
    const product = useSelector(state => state.cards[id])
    return (
        <Container>
            <h1>Карточка товара</h1>
            <CardContainer>
                <ProductItem
                    key={product.id}
                    props={product}
                />
                <ItemFeatures>
                </ItemFeatures>
            </CardContainer>
        </Container>
    );
};

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: url(${backImage});
  width: 100%;
  min-height: 100vh;
  h1{
    color: #785716;
    text-align: center;
  }
`;
const CardContainer =styled.div`
display: flex;
justify-content: space-around;
`;
export default ProductPage;
