import React from 'react';
import Header from "../components/Header";
import styled from 'styled-components';
import backImage from '../assets/back.jpg';
import aboutUs from '../assets/main.jpg';


const About = () => {
    return (
        <Container>
            <ContainerWrapper>
                <h1>О нас</h1>
                <ContainerText>
                    <img src={aboutUs} alt="cat" className={'ContainerImage'}/>
                    <p><span className={'TextSpan'}>Дорогой друг,
                        </span>
                        приветствуем Вас на страницах интернет - магазина Cat Market и
                        благодарим за интерес, проявленный к нашей компании!
                        <br className={'TextSpace'}/>
                        <br className={'TextSpace'}/>
                        Наш проект создан с любовью к животным и огромным желанием сделать их жизнь комфортной и
                        счастливой, ведь братья наши меньшие каждый день приносят радость в дом и наполняют наш с
                        вами мир безграничным позитивом и добром.
                        Я и моя команда стремится создать сервис с душевным подходом, который сможет Вам и вашему
                        котику принести удовольствие, поднять настроение и удовлетворить необходимые потребности.
                        Нам важно предложить качественный, безопасный товар и помочь сделать жизнь вашего любимца
                        еще счастливее.
                        <br className={'TextSpace'}/>
                        <br className={'TextSpace'}/>
                        На нашем интернет-портале и на страничках социальных сетей (Facebook, Twitter, Instagram) всегда
                        можно задать вопросы, поделиться опытом, советами и обсудить проблемы.
                        Мы хотим, чтобы Вы делились с нами отзывами и предложениями, чтобы мы могли стать еще
                        лучше для Вас и наших дорогих питомцев.
                        А мы всегда готовы прийти на помощь! И желаем, чтобы Ваша жизнь с любимым питомцем
                        становилась ярче с каждым днем!
                    </p>
                </ContainerText>
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
  margin: 40px;
  background: rgba(255, 255, 255, .7);

  h1 {
    font-size: 40px;
    font-family: Brush Script MT, Brush Script Std, cursive;
    color: #785716;
    text-align: center;
    margin-top: 50px;
  }
`;
const ContainerText = styled.div`
  font-size: 20px;
  font-family: Gill Sans, sans-serif;
  color: black;
  padding: 0 30px 30px 30px;

  .ContainerImage {
    width: 500px;
    height: 350px;
    float: right;
    margin: 20px;
  }

  .TextSpan {
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-size: 24px;
  }
  .TextSpace
`;
export default About;