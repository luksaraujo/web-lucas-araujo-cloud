import "./index.css";
import React from "react";
import BannerLucas from "../../assets/banner-lucas.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LucasAraujo = () => {
    return(
        <section id="lucas_araujo">
            <div className="shape"></div>
            <div id="cta">
                <h1 className="title">Lucas Araújo</h1>
                
                <div class="social_media_buttons">
                    <a href="https://instagram.com/luks.araujo_/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a href="https://www.youtube.com/@lucasaraujocloud">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>

                    <a href="https://www.linkedin.com/in/lucasarasouza/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>

                <p className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore labore aliquid consectetur hic est, illum totam laboriosam, sit cum nobis ratione molestiae debitis, earum dicta vero nisi tempore repellendus praesentium!
                </p>
                
            </div>

            <div id="banner">
                <img src={BannerLucas} alt="Imagem do Lucas Araújo" />
            </div>
        </section>
    );
};

export default LucasAraujo;