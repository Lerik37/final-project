import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
            <ContainerFooter>
                <ContainerFooterFlex>
                    <ContainerFooterFirstBlock>
                        <h5>Каталог</h5>
                        <ul>
                            <li>
                                <FooterLink href={"#"}>Товары для кошек</FooterLink>
                            </li>
                            <li>
                                <FooterLink href={"#"}>Добавить карточку товара</FooterLink>
                            </li>
                        </ul>
                    </ContainerFooterFirstBlock>
                    <ContainerFooterSecondBlock>
                        <h5>Информация</h5>
                        <ul>
                            <li>
                                <FooterLink href={'/about'}>О нас</FooterLink>
                            </li>
                            <li>
                                <FooterLink href={"#"}>Способы доставки</FooterLink>
                            </li>
                            <li>
                                <FooterLink href={"#"}>Способы оплаты</FooterLink>
                            </li>
                            <li>
                                <FooterLink href={"#"}>Возврат товара</FooterLink>
                            </li>
                        </ul>
                    </ContainerFooterSecondBlock>
                    <ContainerFooterThirdBlock>
                        <h5>Мы в социальных сетях:</h5>
                        <ul>
                            <li>
                        <FooterLink href="https://www.facebook.com/groups/1443887372523459/" className={"faFacebook"} target="_blank">
                        Facebook</FooterLink>
                            </li>
                        <li>
                        <FooterLink href="https://twitter.com/Jollywollyshop" className={"faTwitter"} target="_blank">Twitter
                        </FooterLink>
                        </li>
                            <li>
                                <FooterLink href="https://www.instagram.com/zoomagazin_jollywolly" className={"faTwitter"} target="_blank">Instagram
                                </FooterLink> </li>
                        </ul>
                    </ContainerFooterThirdBlock>
                </ContainerFooterFlex>
                <ContainerFooterCopyright>
                    © 2021 Copyright:“Market cat” Все права защищены, 2021г.
                    Автор: Федорова В.И.
                </ContainerFooterCopyright>

            </ContainerFooter>
    );
};

const ContainerFooter = styled.div`
  background: #e8e1e1;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
`;

const ContainerFooterFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContainerFooterFirstBlock = styled.div`
  li {
      list-style-type: none;
    }
    ul {
        margin-left: 0;
        padding-left: 0;
    }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #785716;
`;

const ContainerFooterSecondBlock = styled.div`
  li {
    list-style-type: none;
  }
  ul {
    margin-left: 0;
    padding-left: 0;
  }
`;

const ContainerFooterThirdBlock = styled.div`
  a {
    text-decoration: none;
    color: #785716;
  }
  li {
    list-style-type: none;
  }
  ul {
    margin-left: 0;
    padding-left: 0;
  }
`;

const ContainerFooterCopyright = styled.div`
  display: block;
  margin: 20px 0 0 0;
  padding: 20px;
  color: #333333;
  background: rgba(255, 255, 255, .5);
`;

export default Footer;