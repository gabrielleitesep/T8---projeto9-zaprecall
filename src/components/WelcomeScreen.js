import React from "react";
import "../css/style.css";
import "../css/reset.css";
import logo from "../media/logo.png";

function WelcomeScreen() {

    const [visivel, setVisivel] = React.useState(true);

    return visivel ? (
        <section className=" tela-fixa tela-inicial">
            <img src={logo} alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => setVisivel(false)}>Iniciar Recall!</button>
        </section>
    ) : (
        <></>
    );
}


export default WelcomeScreen;