import "./index.css";
import React, { useState, useEffect } from "react";
import BannerLucas from "../../assets/banner-lucas.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LucasAraujo = () => {
    const azureCertificationsAmount = 10;

    const [age, setAge] = useState(0);

    useEffect(() => {
        const birthDate = '1999-12-07';
        const calculateAge = (birthDate) => {
            const today = new Date();
            const birthDateObj = new Date(birthDate);
            let age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDifference = today.getMonth() - birthDateObj.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
                age--;
            }
            return age;
        };
        setAge(calculateAge(birthDate));
    }, []);

    return(
        <section id="lucas_araujo">
            <div className="shape"></div>
            <div id="cta">
                <h1 className="title">Lucas Araújo</h1>
                
                <div class="social_media_buttons">
                    <a href="https://instagram.com/luks.araujo_/" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a href="https://www.youtube.com/@lucasaraujocloud" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>

                    <a href="https://www.linkedin.com/in/lucasarasouza/" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>

                <p className="description">
                    Aos {age} anos, Lucas Araújo é hoje considerado <b>um dos melhores
                    especialistas técnicos</b> e de instrução <b>em tecnologias Microsoft</b>
                    do Brasil.<br/><br/>Com mais de {azureCertificationsAmount} certificações
                    em todos os níveis de conhecimento do Microsoft Azure, Lucas <b>ensina de
                    uma maneira única</b> aplicando a técnica DDL (Depth Detailed Learning),
                    que foi trazida dos Estados Unidos e aprimorada pelo especialista
                    brasileiro, focando no <b>ensino profundo e detalhado dos conteúdos
                    abordados</b>, onde a teoria se une à prática e <b>capacita os melhores
                    profissionais do mercado</b>.<br/><br/><b>O DIFERENCIAL</b><br/><br/>
                    Lucas Araújo é um mestre no ensino da computação em nuvem, unindo sua
                    experiência prática em projetos das mais variadas complexidades e tamanhos,
                    realizados para inúmeras multinacionais, com a arte de ensinar, alcança
                    resultados excepcionais. Sua vasta experiência, somada à técnica DDL e
                    a sua cuidadosa atenção aos detalhes e a cada aluno em particular garantem
                    que cada indivíduo alcance o seu melhor potencial, tornando-se um profissional
                    devidamente qualificado.
                </p>
                
            </div>

            <div id="banner">
                <img src={BannerLucas} alt="Imagem do Lucas Araújo" />
            </div>
        </section>
    );
};

export default LucasAraujo;