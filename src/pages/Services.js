import React from 'react';
import { Fade } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "react-slideshow-image/dist/styles.css";
// import serviceImg from '../images/hair+top+banner+image.jpg'
import { useTranslation } from 'react-i18next';




// function uses a react library to display a slideshow of our images and uses a fade away feature
const fadeImages = () => {

    const images = [
        require("../images/slideshow/IMG_4300.jpeg"),
        require("../images/slideshow/IMG_4301.jpeg"),
        require("../images/slideshow/IMG_4281.jpeg"),
        require("../images/slideshow/IMG_4283.jpeg"),
        require("../images/slideshow/IMG_4282.jpeg"),
        require("../images/slideshow/IMG_4321.jpeg"),
        require("../images/slideshow/IMG_4562.jpeg"),
        require("../images/slideshow/IMG_4637.jpeg"),
        require("../images/slideshow/IMG_4271.jpeg"),
        require("../images/slideshow/IMG_4272.jpeg")

    ];

    const nextArrow = <FontAwesomeIcon icon={faArrowRight} />
    const backArrow = <FontAwesomeIcon icon={faArrowLeft} />

    const properties = {
        prevArrow: <button className="slideShowButtons" >{backArrow}</button>,
        nextArrow: <button className="slideShowButtons" >{nextArrow}</button>
    }

    return (
        <div>
            <Fade nextArrow={properties.nextArrow} prevArrow={properties.prevArrow} duration={4000} pauseOnHover={false} >
                {
                    images.map((fadeImage, index) => (
                        <div className="each-slide" key={index}>
                            <div className="image-container">
                                <img className="slideShowImages" src={fadeImage} />
                            </div>
                        </div>
                    ))
                }
            </Fade >
        </div >
    );
};

export default function Services() {
    const { t } = useTranslation();
    return (
        <div className="pageContainer">
            <div className="mainContent">
                <div className="hairServices">
                    <div className="leftServices">


                        <div className="haircuts">
                            <h2 id="serviceTitle">{t('services:serviceTitle')}</h2>
                            <h1 className="serviceHeaders">{t('services:haircuts&styling')}</h1>
                            <p>
                                {t('services:haircutsMessage1')}

                            </p>
                        </div>
                        <hr className="innerLine"></hr>
                        <div className="chemicalServices">
                            <h1 className="serviceHeaders">{t('services:chemical')}</h1>
                            <p>
                                {t('services:chemicalpart1')}
                            </p>

                        </div>
                    </div>
                    <div className="prices">
                        <h3 className="pricesTitle">{t('services:prices')}</h3>
                        <hr className="priceLine"></hr>
                        <ul className="pricesList">
                            <li>
                                {t('services:mencut')}
                            </li>
                            <li>
                                {t('services:womencut')}
                            </li>
                            <li>
                                {t('services:kidscut')}
                            </li>
                            <li>
                                {t('services:perm')}
                            </li>
                            <li>
                                {t('services:haircolorretouch')}
                            </li>
                            <li>
                                {t('services:hightlightsretouch')}
                            </li>
                            <li>
                                {t('services:wax')}
                            </li>

                        </ul>
                    </div>


                </div>
                <hr className="footerLine"></hr>
                <div className="slideContainer">
                    {fadeImages()}
                </div>
                <hr className="footerLine"></hr>
            </div>
            <div className="foot">
                <p className="footAddress">
                    (707) 253-9312 <br></br>
                    <br></br>
                3046 Jefferson Street<br></br>
                Napa, CA 94558<br></br>
                    <br></br>
                    <br></br>
                </p>
                <p className="footer">

                    {t('home:foot')}
                </p>
            </div>
        </div>
    )
}
