import React from "react";
import LucasAraujo from "../../components/HomeLucasAraujo";
import ComunidadeCloudAlliance from "../../components/HomeComunidade";

const HomePage = () => {
    return(
        <>
            <div id="content">
                <ComunidadeCloudAlliance />
                <LucasAraujo />
            </div>
        </>
    );
};

export default HomePage;