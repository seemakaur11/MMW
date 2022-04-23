import React from 'react'
import Lottie from "lottie-react";
import WebDesign from "../animation/WebDesign.json";
import DigitalMarketing from "../animation/DigitalMarketing.json";
import Branding from "../animation/Branding.json";
import EmailHost from "../animation/EmailHost.json";
import Photography from "../animation/Photography.json";
import CustomerCare from "../animation/CustomerCare.json";

function Service() {
    return (
        <div>
            <section id="ourServiceMain">
                <div className='container py-5'>
                    <div className='row'>
                      
                            <div className='col-md-10'>
                                <h1 id="serviceH1">Our Services</h1>
                                <p id="serviceP">Our focus is on designing stunning, professional, 
                                and optimised<br></br> websites to help you meet your business goals and succeed online.</p>
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
                                        <p className='py-5' id="webParagraph">Make My Website embraces technological advancement and puts forth what’s the best for your brand. Your online
                                            presence is important to your business,
                                            and to us for it exhibits our passion
                                            and creativity.</p>
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
                                        <p className='py-5' id="webParagraph">Even the best of websites without a good reach,
                                            drop bland into the market since it gets
                                            no audience to avail the purposes it is built for.</p>
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
                                        <p className='py-5' id="webParagraph">Branding in itself takes a
                                            lot of understanding of brand values and the identity
                                            you want the world to remember you with as a brand.
                                            Branding has various realms including designing logos, business cards
                                        </p>
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
                                        <p className='py-5' id="webParagraph">Your business’s online address is what is your base for starting everything.
                                            This address is nothing but your web hosting i.e.
                                            the space you have rented on the internet to store and
                                            showcase your business’s projects, deliverables and content.
                                        </p>
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
                                        <p className='py-5' id="webParagraph">Photography & Videography is a medium to visually represent your business.
                                            Make My Website and Make My Memories
                                            work collaboratively with a visionary
                                            approach to enhance your brand presence.
                                        </p>
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
                                        <p className='py-5' id="webParagraph">Support is highly crucial when running a website for your
                                            business and it is not feasible to handle all of it by yourself.
                                            Offering support for a domain and running its various functionalities
                                            optimally requires skill, expertise, and experience.</p>
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