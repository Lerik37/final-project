import React, {useEffect, useState} from 'react';
import backImage from "../assets/back.jpg";
import styled from "styled-components";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState("Вы не ввели Email")
    const [passwordError, setPasswordError] = useState("Вы не ввели пароль")
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

const emailHandler = (e)=> {
    setEmail(e.target.value)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
        setEmailError('Неккоректный email')
    } else {
        setEmailError('')
    }
}

const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8){
        setPasswordError('Пароль должен быть длинее 3 и меньше 8 символов')
        if(!e.target.value){
            setPasswordError('Вы не ввели пароль')
        }
    }else{
        setPasswordError('')
    }
}

const blurHandler = (e) => {
    switch (e.target.name){
        case 'email':
        setEmailDirty(true)
            break
        case 'password':
         setPasswordDirty(true)
            break
    }
}
    return (
        <Container>
                <ContainerForm>
                    <div className={"FormTitle"}>Авторизация</div>
                    <div className={"FormBlockFlex"}>
                        <label>Email</label>
                        {(emailDirty && emailError) && <div style ={{color: 'red'}}>{emailError}</div>}
                        <input onChange={e=> emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name ={"email"} type={"text"} placeholder={"Введите email"} />
                    </div>
                    <div className={"FormBlockFlex"}>
                        <label>Пароль</label>
                        {(passwordDirty && passwordError) && <div style ={{color: 'red'}}>{passwordError}</div>}
                        <input onChange={e=> passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name ={"password"} type={'password'} placeholder={"Введите пароль"}/>
                    </div>
                    <div className={"FormBlock"}>
                        <input type={"checkbox"} className={"CheckboxMark"}/>
                            <label>Я согласен с Правилами пользования
                                приложением </label>
                    </div>
                    <button disabled={!formValid} className="FormButton" type={"submit"}>Регистрация</button>
                </ContainerForm>
        </Container>
    );
};

const Container = styled.div`
  background: url(${backImage});
  position: relative;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
  width: 100%;
  height: 100vh;
}

a {
  cursor: pointer;
  color: #fdfdfd;
}
`;

const ContainerForm = styled.div`
  width: 600px;
  min-height: 150px;
  margin: 0 auto;
  border-radius: 30px;
  background: rgba(255, 255, 255, .8);
  padding: 80px;

  .FormTitle {
    font-size: 38px;
    text-align: center;
    margin: 0 0 10px 0;
    color: #785716;
    font-family: Brush Script MT, Brush Script Std, cursive;
  }

  .FormBlockFlex label {
    display: block;
    padding: 20px 0 5px 0;
  }

  input {
    padding: 7px 7px 7px 7px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ffc047;
    box-shadow: 3px 2px 10px rgb(176, 140, 68);
    outline: #987229;
  }

  .CheckboxMark {
    border: 2px solid #787878;
    margin: 10px;
    width: auto;
  }

  label {
    color: #312f2f;
    font-size: 14px;
  }
  a{
    color: #312f2f;
  }

  .FormButton {
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

export default Auth;
