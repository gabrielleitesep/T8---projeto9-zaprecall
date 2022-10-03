import "../css/style.css";
import "../css/reset.css";
import logopequena from "../media/logo-pequeno.png";
import styled from "styled-components"

function Header(){
    return(
        <HeaderContainer>
            <div className="header">
                <img src={logopequena} alt="Logo ZapRecall"></img>
                <h1>ZapRecall</h1>
            </div>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`

    width: 100%;
    height: 120px;
    position: fixed;
    left: 0;
    top:0;
    z-index: 3;
    background-color: #FB6B6B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  

   .header {
    width: 300px;
    height: 60px;
    margin: 35px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

   .header img{
    width: 52px;
    height: 60px;
  }

   .header h1{
    font-family: 'Righteous', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
  }
`