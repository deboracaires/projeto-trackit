import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLoginProvider } from "../contexts/LoginContext";

export default function Habitos() {

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [habit, setHabit] = useState("");
    const [days, setDays] = useState([]);
    const { token } = useLoginProvider();
    console.log(token);
    const [getHabit, setgetHabit] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);

    const [open, setOpen] = useState(false);

    function selectDay(i) {
        if (selectedDays.length === 0) {
            setSelectedDays([i]);
            return;
        }
        if (i === 0) {
            if (selectedDays.includes(0)) {
                const filtredArr = selectedDays.filter((day) => day != i)
                setSelectedDays(filtredArr);

                return;
            }

            else {
                const temp = selectedDays;
                temp.push(i);
                setSelectedDays(temp)
                return;
            }
        }
        
        
        if (i === 1) {
            if (selectedDays.includes(1)) {
                const filtredArr = selectedDays.filter((day) => day != i)
                setSelectedDays(filtredArr);

                return;
            }

            else {
                const temp = selectedDays;
                temp.push(i);
                setSelectedDays(temp)
                return;
            }
        }

        if (i === 2) {
            if (selectedDays.includes(2)) {
                const filtredArr = selectedDays.filter((day) => day != i)
                setSelectedDays(filtredArr);
                return;
            }

            else {
                const temp = selectedDays;
                temp.push(i);
                setSelectedDays(temp)
                return;
            }
        }

        if (i === 3) {
            if (selectedDays.includes(3)) {
                const filtredArr = selectedDays.filter((day) => day != i)
                setSelectedDays(filtredArr);
                return;
            }

            else {
                const temp = selectedDays;
                temp.push(i);
                setSelectedDays(temp)
                return;
            }
        }

        if (i === 4) {
            if (selectedDays.includes(4)) {
                const filtredArr = selectedDays.filter((day) => day != i)
                setSelectedDays(filtredArr);

                return;
            }

            else {
                const temp = selectedDays;
                temp.push(i);
                setSelectedDays(temp)
                return;
            }
        }

        if (i === 5) {
            if (selectedDays.includes(5)) {
                const filtredArr = selectedDays.filter((day) => day != i)
                setSelectedDays(filtredArr);

                return;
            }

            else {
                const temp = selectedDays;
                temp.push(i);
                setSelectedDays(temp)
                return;
            }
        }

        if (i === 6) {
            if (selectedDays.includes(6)) {
                const filtredArr = selectedDays.filter((day) => day != i)
                setSelectedDays(filtredArr);

                return;
            }

            else {
                const temp = selectedDays;
                temp.push(i);
                setSelectedDays(temp)
                return;
            }
        }
    }

    console.log(selectedDays);




    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name: habit,
            days: selectedDays,
        }

        console.log(body);

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
            .then(res => {
                setHabit(res.data);
                console.log(res);

            })
            .catch(err => alert(err.response.data))
    }

        useEffect(() => {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
    
               const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
                promise.then(res => {

                    setgetHabit(res.data) 
                  
                })
                promise.catch(err => console.log(err.response.data))
        }, [])
    


    return (
        <>
            <NavBar />
            <HabitosContainer>
                <Corpo>
                    <span>Meus Hábitos</span>
                    <button onClick={() => { setOpen(!open) }}>+</button>
                </Corpo>
                <CriaHabito>
                    <input onChange={(e) => setHabit(e.target.value)} name="name" type="text" placeholder="nome do hábito" />
                    <Days>
                        {weekdays.map((d, i) => (<button onClick={() => selectDay(i)} key={i}>{d}</button>))}
                    </Days>

                    <Cancel>
                        <span>Cancelar</span>
                        <button onClick={handleSubmit}>Salvar</button>
                    </Cancel>
                </CriaHabito>
                    {getHabit.length === 0 ? <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text> : <h1>Tô funcionando</h1>
 }

            </HabitosContainer>
            <Footer />
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
}`

const CriaHabito = styled.div`
    width: 340px;
    height: 180px;
    margin-top: 22px;

    background: #FFFFFF;
    border-radius: 5px;

    .open {
        display: none;
    }

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
    }`

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
    }`

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
    }`
const Text = styled.span`
    margin-top: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;

    width: 338px;
    height: 74px;`