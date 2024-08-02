import React from "react";
import LucasAraujo from "../../components/HomeLucasAraujo";
//import ComunidadeCloudAlliance from "../../components/HomeComunidade";
import HomeCertificacaoEm4Semanas from "../../components/HomeCertificacaoEm4Semanas";
import HomeGarantiaCertificado from "../../components/HomeGarantiaCertificado";
import Footer from "../../components/HTMLComponents/Footer";

const HomePage = () => {
    return(
        <>
            <div id="content">
                <HomeCertificacaoEm4Semanas />
                <HomeGarantiaCertificado />
                <LucasAraujo />
                {/*<ComunidadeCloudAlliance />*/}
                <Footer />
            </div>
        </>
    );
};

export default HomePage;