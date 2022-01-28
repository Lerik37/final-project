import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import icon from '../assets/logo.png';
const Header = () => {
    return (
        <header>
            <Menu>
                <img className={'icon'} src={icon} alt={'cat_logo'}/>
                <LinkStyle to='/'>Главная страница</LinkStyle>
                <LinkStyle to='/auth'>Авторизация</LinkStyle>
                <LinkStyle to='/catalog'>Каталог</LinkStyle>
                <LinkStyle to='/about'>О нас</LinkStyle>
                <LinkStyle to='/cards'>Добавить карточку</LinkStyle>
            </Menu>
        </header>

    );
};

const Menu = styled.div`
  background-color: #333;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  .icon{
    width: 50px;
    height: 50px;
    float: left;
  }
  a:hover {
    background-color: #ddd;
    color: black;
  }
`;

const LinkStyle = styled(Link)`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  &:active{
    background-color: #68ac93;
    color: white;
`;

export default Header;
