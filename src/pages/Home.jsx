import React from 'react';
import styled from 'styled-components';
import backImage from '../assets/back.jpg';
import homePage from '../assets/home_page2.jpg';

const Home = () => {
    return (
        <Container>
            <ContainerWrapper>
                <ContainerImage>
                    <ContainerImageText>
                        Порадуйте своего пушистого пирожочка красивой и теплой одеждой!
                        <br/>
                        В нашем интрнет-магазине Вы сможете найти костюмчики на любой вкус и цвет! Ваш котик будет
                        Вам благодарен и сделает Вам любовный кусь:)
                    </ContainerImageText>
                    <button className={'ContainerButton'}>За покупками!</button>
                    <img className={'homePage'} src={homePage} alt={'home_page picture'}/>
                </ContainerImage>
            </ContainerWrapper>
        </Container>
    );
};

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: url(${backImage});
  width: 100%;
  min-height: 100vh;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;
const ContainerImage = styled.div`
  .homePage {
    width: 100%;
    height: 675px;
    margin: 0 auto;
  }

  .ContainerButton {
    color: #424141;
    background: #f3c89c;
    width: 180px;
    height: 60px;
    font-size: 24px;
    line-height: 40px;
    position: absolute;
    margin-top: 530px;
    margin-left: 380px;
    padding-left: 10px;
    font-family: Brush Script MT, Brush Script Std, cursive;
    border: none;
    border-radius: 10px;
  }

  .ContainerButton:hover {
    opacity: 0.7;
  }
;
`;
const ContainerImageText = styled.text`
  background: rgba(255, 255, 255, .5);
  margin-top: 300px;
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 30px;
  padding: 20px;
  position: absolute;
`;

export default Home;
