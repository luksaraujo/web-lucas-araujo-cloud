import "./index.css";
import React from "react";
import CustomOrageButton from "../HTMLComponents/OrangeButton";
import BannerLucas from "../../assets/banner-lucas.jpg";

const HomeCertificacaoEm4Semanas = () => {
    return(
        <section id="home-four-weeks-certification">
            <div id="hfwc_image">
                <img src={BannerLucas} alt="Lucas Araújo" />
            </div>
            <div id="hfwc_text">
                <h1><span>Certifique-se em</span> até 04 semanas!</h1>
                <p>
                    Aqui você encontrará treinamentos preparatórios para as mais 
                    diversas e importantes certificações relacionadas à computação 
                    em nuvem, capazes de te preparar para o mercado de trabalho em 
                    tempo recorde. Todos os nossos treinamentos envolvem teoria, 
                    prática e simulados das provas oficiais.
                </p>
                <div id="hce4s-button">
                    <CustomOrageButton text="Acessar Treinamentos" />
                </div>
                
            </div>
        </section>
    );
};

export default HomeCertificacaoEm4Semanas;