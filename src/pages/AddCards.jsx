import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import backImage from "../assets/back.jpg";
import styled from "styled-components";

const AddCards = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const dispatch = useDispatch()

    const addProduct = (e) => {
        e.preventDefault()
        const data = {
            id: Date.now(),
            title: title,
            desc: desc,
            price: `${price}`,
            img: file,
        }
        dispatch({type: "CREATE_PRODUCT", data})
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <>
            <Container>
                <h1>Параметры карточки товара:</h1>
                <form className={"formInput"}>
                    <div className={"title"} >
                        <label>Название товара</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className={"description"} >
                        <label>Описание товара</label>
                        <input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
                    </div>
                    <div className={"price"} >
                        <label>Стоимость товара</label>
                        <input type="text" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                    </div>
                    <div className={"formFile"} >
                        <label>Выберите файл</label>
                        <input type="file" onChange={selectFile}/>
                    </div>
                    <button className={'formButton'} type={'submit'} onClick={addProduct}>Добавить карточку</button>
                </form>
            </Container>
        </>
    );
};
const Container = styled.div`
  background: url(${backImage});
  width: 100%;
  min-height: 100vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  .formInput {
    width: 740px;
    height: 498px;
    padding: 20px;
    margin-left: 250px;
    position: relative;
    background: rgba(255, 255, 255, .7);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h1 {
    color: #785716;
    font-family: Brush Script MT, Brush Script Std, cursive;
    text-align: center;
    margin-left: 350px;
    margin-top: 5px;
    position: absolute;
    z-index: 10;
  }

  label {
    display: block;
    padding: 20px 0 5px 0;
    color: #312f2f;
    font-size: 14px;
  }

  input {
    padding: 7px 7px 7px 7px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ffc047;
    box-shadow: 3px 2px 10px rgb(176, 140, 68);
    outline: #987229;
  }

  .formFile {
    input {
      background: rgb(255, 220, 151);
    }
  }
  .formButton {
    background: #cc975a;
    padding: 7px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 10px 180px;
    font-size: 18px;
  }
  button:hover {
    background-color: #e9d7b2;
  }
`;
export default AddCards;
