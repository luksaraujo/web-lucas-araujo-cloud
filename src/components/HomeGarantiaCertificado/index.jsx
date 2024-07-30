import "./index.css";
import React from "react";
import SeloGarantia from "../../assets/selo-garantia.png";
import CertificateIcon from "../../assets/certificate.png";
import WhatsAppIcon from "../../assets/whatsapp-icon.png";
import DiscountIcon from "../../assets/discount.png";

const HomeGarantiaCertificado = () => {
    return (
        <section id="garantia-certificado">
            <div id="hgc-title">
                <h1>Benefícios Exclusivos</h1>
            </div>
            <div class="hgc-container-content">
                <div className="hgc-left">
                    <img src={CertificateIcon} alt="Ícone de Certificado" />
                    <h1>Certificado</h1>
                    <p>
                        Ao final de cada treinamento ou mentoria,
                        você receberá um certificado de conclusão
                        que poderá ser utilizado para comprovar
                        suas horas de estudo e conhecimento adquirido.
                    </p>
                </div>
                <div className="hgc-divisor"></div>
                <hr className="hgc-hr-divisor" />
                <div className="hgc-right">
                    <img src={SeloGarantia} alt="Selo de Garantia de 7 Dias" />
                    <h1>Garantia de 7 Dias</h1>
                    <p>
                        Se os treinamentos ou mentorias não
                        forem para você, basta falar com a
                        gente dentro do prazo de 07 (sete)
                        dias que devolveremos o seu dinheiro.
                    </p>
                </div>
            </div>
            <hr />
            <div className="hgc-container-content" id="hgc-last-container-content">
                <div className="hgc-left">
                    <img src={WhatsAppIcon} alt="Logo do Whatsapp" />
                    <h1>Comunidade Privada</h1>
                    <p>
                        Além de todo o conteúdo dos treinamentos
                        e mentorias, você terá acesso a uma comunidade
                        privada com os melhores especialistas da área 
                        de Computação em Nuvem e Tecnologia da Informação.
                    </p>
                </div>
                <div className="hgc-divisor"></div>
                <hr className="hgc-hr-divisor" />
                <div className="hgc-right" id="hgc-discount">
                    <img src={DiscountIcon} alt="Ícone de desconto" />
                    <h1>Descontos Futuros</h1>
                    <p>
                        Ao final do seu primeiro treinamento conosco, 
                        ganhe um cupom de 15% de desconto válido por 
                        um ano para usar em qualquer mentoria futura.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeGarantiaCertificado;