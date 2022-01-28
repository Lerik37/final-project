import React from 'react';
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";
import styled from "styled-components";


const ProductCatalog = () => {
    const product = useSelector(state => state.cards)
    return (
        <Content>
            {product.map(item =>
                <ProductItem
                    key={item.id}
                    props = {item}
                />
            )}
        </Content>
    );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default ProductCatalog;
