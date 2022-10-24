import styled from "styled-components";
import userImage from "../assets/images/user.png"
import { useLoginProvider } from "../contexts/LoginContext";

export default function NavBar(){

    const {user, handleLogin} = useLoginProvider();

    return (
        <Header>
            <h1>TrackIt</h1>
            <img data-identifier="avatar" src={user.image} alt="imagem usuario"/>
        </Header>
    )
}

const Header = styled.div`
width: 100%;
height: 70px;
position: fixed;
left: 0px;
top: 0px;

display: flex;
align-items: center;
justify-content: space-between;

background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

h1{
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;

    margin-left: 15px;
}

img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 15px;
    object-fit: cover;
}
`;