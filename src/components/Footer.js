import styled from "styled-components";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

export default function Footer(){
    return (
        <FooterContainer>
            <span>Hábitos</span>
            <ContainerCircle>
            <CircularProgressbar
                value={0}
                text={"Hoje"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                })}
            />
            </ContainerCircle>
            <span>Histórico</span>
        </FooterContainer>
    )
}

const FooterContainer = styled.div `
position: absolute;
width: 100%;
height: 70px;
left: 0px;
bottom: 0px;
background: #FFFFFF;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;

display: flex;
justify-content: space-around;
align-items: center;
`

const ContainerCircle = styled.div`
    width: 80px;

`