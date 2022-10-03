import "../css/style.css";
import "../css/reset.css";
import party from "../media/party.png";
import sad from "../media/sad.png";
const arr = [];
let cont = 0;
let img;

function Footer({ total, icon, texto, complemento,}) {


    if (icon === "vermelho") {

        arr.push(<ion-icon name="close-circle"></ion-icon>);
        cont++;

    } else if (icon === "laranja") {

        arr.push(<ion-icon name="help-circle"></ion-icon>);

    } else if (icon === "verde") {

        arr.push(<ion-icon name="checkmark-circle"></ion-icon>);

    }
    if (cont === 0 && total === 8) {
        img = <img src={party} alt="Putz" />;
        complemento = `Parabéns!`
        texto = `
        Você não esqueceu de nenhum 
        flashcard!`
    } else if (cont !== 0 && total === 8){
        img = <img src={sad} alt="Putz" />;
        complemento = `Putz...`
        texto = `
        Ainda faltam alguns...
        Mas não desanime!
        `
    }

return (

    <footer className="rodape">
        <div className="rodape-conteudo espaco">
        <div className="rodape-mensagem-final espaco negrito">{img} {complemento}</div>
                <div className="rodape-mensagem-final espaco">{texto}</div>
            <p>{total}/8 CONCLUÍDOS</p>
            <div>
                {arr}
            </div>
        </div>
    </footer>
);


}

export default Footer;