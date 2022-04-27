import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import WebDesign from "../animation/WebDesign.json";
import DigitalMarketing from "../animation/DigitalMarketing.json";
import Branding from "../animation/Branding.json";
import EmailHost from "../animation/EmailHost.json";
import Photography from "../animation/Photography.json";
import CustomerCare from "../animation/CustomerCare.json";
import { contentData } from '../helper';

function Service() {
    const [title, setTitle] = useState([]);
    const [serviceP, setServiceP] = useState([]);
    const [card1, setCard1] = useState([]);
    const [card2, setCard2] = useState([]);
    const [card3, setCard3] = useState([]);
    const [card4, setCard4] = useState([]);
    const [card5, setCard5] = useState([]);
    const [card6, setCard6] = useState([]);

    useEffect(() => {
        async function service() {
            const serviceData = await contentData();
            //title
            const filterTitle = serviceData.filter((data) => data.meta_key === "service_title" && data);
            setTitle(filterTitle);
            //paragraph
            const filterP = serviceData.filter((data) => data.meta_key === "service_title_p" && data);
            setServiceP(filterP);
            //card1
            const filterCard1 = serviceData.filter((data) => data.meta_key === "service_card_1" && data);
            setCard1(filterCard1);
            //card2
            const filterCard2 = serviceData.filter((data) => data.meta_key === "service_card_2" && data);
            setCard2(filterCard2);
            //card3
            const filterCard3 = serviceData.filter((data) => data.meta_key === "service_card_3" && data);
            setCard3(filterCard3);
            //card3
            const filterCard4 = serviceData.filter((data) => data.meta_key === "service_card_4" && data);
            setCard4(filterCard4);
            //card3
            const filterCard5 = serviceData.filter((data) => data.meta_key === "service_card_5" && data);
            setCard5(filterCard5);
            //card3
            const filterCard6 = serviceData.filter((data) => data.meta_key === "service_card_6" && data);
            setCard6(filterCard6);
        }
        service()
    }, [])
    return (
        <div>
            <section id="ourServiceMain">
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-10'>
                            {title && title.length > 0 && title.map((head, id) => {
                                return (
                                    <div key={id}>
                                        <h1 id="serviceH1">{head.meta_value}</h1>
                                    </div>
                                )
                            })}
                            {serviceP && serviceP.length > 0 && serviceP.map((head, id) => {
                                return (
                                    <div key={id}>
                                        <p id="serviceP">{head.meta_value}</p>
                                    </div>
                                )
                            })}

                        </div>
                        <div className='col-md-2 pt-5 '>
                            <div id="viewBtn1">
                                <button id="viewBtn">VIEW ALL SERVICES</button>
                            </div>
                        </div>
                    </div>
                    <div className='row py-4' id="web-animation">
                        <div className='col-md-4 mb-5'>
                            <div className='flip-card'>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Lottie animationData={WebDesign} loop={true} autoplay={true} />
                                        <div className='flip-body'>
                                            <h1 className='flip-title'>Web Design and Development</h1>
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        {card1 && card1.length > 0 && card1.map((card, id) => {
                                            return (
                                                <div key={id}>
                                                    <p className='py-5' id="webParagraph">{card.meta_value}</p>
                                                </div>
                                            )
                                        })}
                                        <button id="webBtn">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='flip-card'>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Lottie animationData={DigitalMarketing} loop={true} autoplay={true} />
                                        <div className='flip-body'>
                                            <h1 className='flip-title'>Digital Marketing</h1>
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        {card2 && card2.length > 0 && card2.map((card, id) => {
                                            return (
                                                <div key={id}>
                                                    <p className='py-5' id="webParagraph">{card.meta_value}</p>
                                                </div>
                                            )
                                        })}
                                        <button id="webBtn">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='flip-card'>
                                <div className="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Lottie animationData={Branding} loop={true} autoplay={true} />
                                        <div className='flip-body'>
                                            <h1 className='flip-title'>Branding</h1>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        {card3 && card3.length > 0 && card3.map((card, id) => {
                                            return (
                                                <div key={id}>
                                                    <p className='py-5' id="webParagraph">{card.meta_value}</p>
                                                </div>
                                            )
                                        })}
                                        <button id="webBtn">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='flip-card'>
                                <div className="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Lottie animationData={EmailHost} loop={true} autoplay={true} id="hosing" />
                                        <div className='flip-body'>
                                            <h1 className='flip-title'>Web & Email Hosting</h1>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        {card4 && card4.length > 0 && card4.map((card, id) => {
                                            return (
                                                <div key={id}>
                                                    <p className='py-5' id="webParagraph">{card.meta_value}</p>
                                                </div>
                                            )
                                        })}
                                        <button id="webBtn">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='flip-card'>
                                <div className="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Lottie animationData={Photography} loop={true} autoplay={true} />
                                        <div className='flip-body'>
                                            <h1 className='flip-title'>Photography & Videography</h1>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        {card5 && card5.length > 0 && card5.map((card, id) => {
                                            return (
                                                <div key={id}>
                                                    <p className='py-5' id="webParagraph">{card.meta_value}</p>
                                                </div>
                                            )
                                        })}
                                        <button id="webBtn">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='flip-card'>
                                <div className="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Lottie animationData={CustomerCare} loop={true} autoplay={true} id="hosing1" />
                                        <div className='flip-body'>
                                            <h1 className='flip-title'>Customer Care</h1>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        {card6 && card6.length > 0 && card6.map((card, id) => {
                                            return (
                                                <div key={id}>
                                                    <p className='py-5' id="webParagraph">{card.meta_value}</p>
                                                </div>
                                            )
                                        })}
                                        <button id="webBtn">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Service
