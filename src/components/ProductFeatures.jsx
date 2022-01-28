import React from 'react';
import styled from 'styled-components';
import sizePhoto from "../assets/cat_size.png";

const Features = () => {
    return (
        <ItemFeatures>
            <ProductSize>
                <ProductSizePicture>
            <img src={sizePhoto} className={"sizePhoto"} alt={'size'}/>
                <p className={'SizePhotoDescription'}>
                    Пожалуйста измерьте длину спины и обхват груди вашей кошки, чтобы подобрать
                    наиболее подходящий размер:)
                </p>
            </ProductSizePicture>
                <SizeSelectForm>
                    <label>Выберите размер:</label>
                    <select name="select" className="SizeSelectOptions">
                        <option value={'value1'}>S</option>
                        <option value={'value2'}>M</option>
                        <option value={'value3'}>L</option>
                        <option value={'value4'}>XL</option>
                    </select>
                </SizeSelectForm>
            </ProductSize>
        </ItemFeatures>

    );
};

const ItemFeatures = styled.div`
  background: white;
  margin-top: 50px;
  margin-right: 50px;
  width: 600px;
  height: 300px;
  padding: 20px;
 h1{
        font-size: 40px;
        font-family: Brush Script MT, Brush Script Std, cursive;
        color: #785716;
        text-align: center;
        margin-top: 50px;
    }
 `;
const ProductSizePicture = styled.div`
.sizePhoto{
        width: 550px;
        height: 150px;
        margin-top: 20px;
    }
  &:hover{
    transform: scale(1.05);
  }
.SizePhotoDescription{
 font-size: 12px; 
  color: #785716;
}
`;
const ProductSize = styled.div`

`;
const SizeSelectForm = styled.div`
    .SizeSelectOptions{
      width: 140px;
      outline: none;
      margin: 10px;
    }
`;

export default Features;