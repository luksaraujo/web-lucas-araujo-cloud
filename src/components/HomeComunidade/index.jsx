import "./index.css";
import React from "react";
import CCALogo from "../../assets/cloud-alliance-v1.0.png";

const CloudAlliance = () => {
    return(
        <section id="comunidade_cloud_alliance">
            <div id="home_cca_text">
                <div id="home_cca_title">
                    <h1><span>Comunidade</span><br />Cloud Alliance</h1>
                </div>
                <div id="home_cca_text_text">
                    <p>Participe da Comunidade Cloud Alliance, uma comunidade no WhatsApp com especialistas em Computação em Nuvem e profissionais renomados de tecnologia da informação.</p>
                </div>
                <div id="home_cca_cta">
                    <button id="home_cca_cta_button">Quero entrar pra cloud alliance</button>
                </div>
            </div>
            <div id="home_cca_img">
                <img src={CCALogo} alt="Cloud Alliance" />
            </div>
        </section>
    );
};

export default CloudAlliance;