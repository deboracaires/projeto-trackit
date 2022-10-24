import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Habitos(){
    return (
       <>
            <NavBar/>
            <HabitosContainer>
                <Corpo>
                    <span>Meus Hábitos</span>
                    <button>+</button>
                </Corpo>    
                <CriaHabito>
                    <input name="name" type="text" placeholder="nome do hábito"/>
                    <Days>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </Days>

                    <Cancel>
                        <span>Cancelar</span>
                        <button>Salvar</button>
                    </Cancel>
                </CriaHabito>

                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                
                </HabitosContainer>
            <Footer/>
       </>
    )
}

const HabitosContainer = styled.div`
    height: 90vh;
    width: 100%;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Corpo = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top: 90px;

button{
    margin-left: 60px;
    width: 40px;
    height: 35px;
    color: white;
    border: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 29px;

    text-align: center;

    background: #52B6FF;
    border-radius: 4.63636px;
}

`

const CriaHabito = styled.div`
    width: 340px;
    height: 180px;
    margin-top: 22px;

    background: #FFFFFF;
    border-radius: 5px;

    input{
        margin: 18px 0 0 19px;
        width: 303px;
        height: 40px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 8px;
    }

    input::placeholder{    
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    input:focus {
        padding: 8px;
    }
`

const Days = styled.div`
    margin-top: 10px;

    button{
    width: 30px;
    height: 30px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    padding: 2px;
    color: #DBDBDB;
    margin-right: 5px;
    }

    button:nth-child(1){
        margin-left: 19px;
    }
`

const Cancel = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;

    button {
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    }
`
const Text = styled.span`
    margin-top: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;

    width: 338px;
    height: 74px;

`