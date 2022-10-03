import { useState } from "react";
import "../css/style.css";
import "../css/reset.css";
import setinha from "../media/setinha.png";

function QuestionStatus({ pergunta, index, descricao, resposta, total, setTotal, setIcon, setTexto, setComplemento }) {

    const [estado, setEstado] = useState("visivel");
    const [selecionado, setSelecionado] = useState(false);
    const vermelho = `vermelho ${selecionado ? "caixa-pergunta-fechada" : ""}`;
    const laranja = `alaranjado ${selecionado ? "caixa-pergunta-fechada" : ""}`;
    const verde = `verde ${selecionado ? "caixa-pergunta-fechada" : ""}`;

    pergunta = "Pergunta";

    if (estado === "visivel") {
        return (
            <div className="caixa-pergunta" onClick={() => setEstado("deck")}>
                <h3>{pergunta} {index}</h3>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        );
    } else if (estado === "deck") {
        return (
            <div className="caixa-pergunta-visivel">
                <p className="pergunta">{descricao}</p>
                <div className="caixa-pergunta-visivel-seta">
                    <img src={setinha} alt="Próxima etapa" onClick={() => setEstado("botoes")} />
                </div>
            </div>
        );
    } else if (estado === "botoes") {
        return (
            <div className="caixa-pergunta-final">
                <p className="pergunta">{resposta}</p>
                <div className="caixa-pergunta-visivel-botoes" >
                    <div onClick={() => setEstado("fechadoVermelho")}>
                        <button className={vermelho} onClick={() => {
                            setSelecionado(!selecionado)
                            setTotal(total + 1)
                            setIcon("vermelho")
                            setTexto()
                            setComplemento()
                        }}>Não lembrei</button>
                    </div>
                    <div onClick={() => setEstado("fechadoLaranja")}>
                        <button className={laranja} onClick={() => {
                            setSelecionado(!selecionado)
                            setTotal(total + 1)
                            setIcon("laranja")
                            setTexto()
                            setComplemento()
                        }}>Quase não lembrei</button>
                    </div>
                    <div onClick={() => setEstado("fechadoVerde")}>
                        <button className={verde} onClick={() => {
                            setSelecionado(!selecionado)
                            setTotal(total + 1)
                            setIcon("verde")
                            setTexto()
                            setComplemento()
                        }}>Zap!</button>
                    </div>
                </div>
            </div>
        );
    } else if (estado === "fechadoVermelho") {
        
        return (

            <div className="caixa-pergunta-linha-vermelha" >
                <h3>{pergunta} {index}</h3>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        );
    } else if (estado === "fechadoLaranja") {


        return (

            <div className="caixa-pergunta-linha-alaranjado">
                <h3>{pergunta} {index}</h3>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        );
    }
    else if (estado === "fechadoVerde") {

        return (

            <div className="caixa-pergunta-linha-verde">
                <h3>{pergunta} {index}</h3>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        );
    }
}


export default QuestionStatus;