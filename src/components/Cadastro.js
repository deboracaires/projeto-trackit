import styled from "styled-components";
import logo from "../assets/images/logotrackit.png"
import { Link } from "react-router-dom";


export default function Cadastro() {
    return (
        <CadastroContainer>
            <img src={logo} />
            <Form>
                <form >
                    <div>
                        <input type="email" placeholder="email" />
                    </div>
                    <div>
                        <input type="password" placeholder="senha" />
                    </div>
                    <div>
                        <input placeholder="nome" />
                    </div>
                    <div>
                        <input placeholder="foto" />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </Form>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </CadastroContainer>

    )
};

const CadastroContainer = styled.div`
display: flex;
flex-direction: column;
img{
    margin: 50px auto;
}
a{
    text-decoration-line: underline;
    color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px auto;
    font-family: 'Lexend Deca';
}
`

const Form = styled.div`
input{
    display: flex;
    margin:  6px auto;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    padding: 8px;
    
}
input::placeholder{
    color:#DBDBDB;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
}

input:focus{
    padding: 8px;
}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:  auto;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 20.976px;
    line-height: 26px;
}
`