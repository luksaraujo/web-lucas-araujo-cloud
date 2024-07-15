import React from "react";
import Header from "../../components/Header";
import LucasAraujo from "../../components/HomeLucasAraujo";

const HomePage = () => {
    return(
        <>
            <Header />
            <div id="content">
                <LucasAraujo />
            </div>
        </>
    );
};

export default HomePage;