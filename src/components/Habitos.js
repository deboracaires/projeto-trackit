import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Habitos(){
    return (
        <HabitosContainer>
            <NavBar/>

                <Corpo> 
                    <span>Meus Hábitos</span>
                    <button>+</button>
                </Corpo>

            <Footer/>
        </HabitosContainer>
    )
}

const HabitosContainer = styled.div`
    height: 100vh;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
`

const Corpo = styled.div`
    height: 34px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;

    display: flex;
    justify-content: space-around;
    margin-top: 90px;

button{
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