import Question from "./Question";
import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";
import "../css/style.css";
import "../css/reset.css";
import styled from "styled-components"

function FlashCards() {

    const [total, setTotal] = useState(0);
    const [icon, setIcon] = useState("");
    const [texto, setTexto] = useState("");
    const [complemento, setComplemento] = useState("");

    return (
        <>
            <Header />
            <TelaContainer>
                <Question total={total} setTotal={setTotal} setIcon={setIcon} setTexto={setTexto} setComplemento={setComplemento}/>
            </TelaContainer>
            <Footer total={total} icon={icon} texto={texto} complemento={complemento}/>
        </>
    );

}

export default FlashCards;

const TelaContainer = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
`