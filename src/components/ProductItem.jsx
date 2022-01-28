import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import styled from 'styled-components';

const ProductItem = ({props}) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const removeProduct = (id) => {
        dispatch({type: "REMOVE_PRODUCT", id})
    }
    return (
        <ProductWrap>
            <ProductPhoto>
                <img className={'card'} src={props.img} />
            </ProductPhoto>
            <h1 className="product-title" onClick={() => navigate('/' + props.id)}>
                {props.title}</h1>
            <div className="description">
                {props.desc}
            </div>
            <div className="product-price-old">₽ {props.oldPrice}</div>
            <div className="product-price-new">₽ {props.newPrice}</div>
            <div className="product-buttons">
                <button
                    onClick={() => {removeProduct(props.id)}}>
                    Положить в корзину
                </button>
                <button
                    style={{background: '#f0b4bf'}}
                    onClick={() => {removeProduct(props.id)}}>
                    Удалить из корзины
                </button>
            </div>
        </ProductWrap>
    );
};

const ProductWrap = styled.div`
  flex-direction: column;
  background: rgba(255, 255, 255, .7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-left: 50px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  font-family: Gill Sans, sans-serif;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.05);
  }

  .product-title {
    color: #785716;
    font-size: 24px;
    margin: 15px 0 5px;
    padding-bottom: 7px;
    display: block;
    position: relative;
    font-family: Brush Script MT, Brush Script Std, cursive;
  }

  .description {
    margin: 2px 4px;
    padding: 20px;
  }

  .product-price-old {
    font-size: 20px;
    font-weight: 700;
    color: #888;
    text-decoration: line-through;
  }

  .product-price-new {
    font-size: 25px;
    font-weight: 700;
    color: rgb(196, 124, 57);
  }

  .product-buttons button {
    color: #343030;
    background: #f6c662;
    font-size: 16px;
    line-height: 40px;
    display: block;
    margin: 5px;
    border-radius: 10px;
    border: none;
    width: 100%;
  }

  button:hover {
    background-color: #e9d7b2;
  }
`;
const ProductPhoto = styled.div`
  .card {
    width: 310px;
    height: 330px;
  }
`;

export default ProductItem;
