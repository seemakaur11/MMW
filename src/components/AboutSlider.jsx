import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function AboutSlider() {
    const responsive = {
        margin: 30,
        loop: true,
        dots: false,
        nav: false,
        items: 2,
        stagePadding: 150,
        autoplay: true,
        autoplayTimeout: 2000,
    }
    const [videoData, setvideoData] = useState([]);
    const [slider1, setSlide1] = useState([]);
    const [slider2, setSlider2] = useState([]);
    const [slider3, setSlider3] = useState([]);
    const [slider4, setSlider4] = useState([]);

    useEffect(() => {
        async function video() {
            const sliderData = await fetchData();
            const filterVideoData = sliderData.filter((data) => data.ID === "26015" && data);
            setvideoData(filterVideoData);

            const filterSlider1 = sliderData.filter((data) => data.ID === "39752" && data);
            setSlide1(filterSlider1);

            const filterSlider2 = sliderData.filter((data) => data.ID === "26262" && data);
            setSlider2(filterSlider2);

            const filterSlider3 = sliderData.filter((data) => data.ID === "26267" && data);
            setSlider3(filterSlider3);

            const filterSlider4 = sliderData.filter((data) => data.ID === "26271" && data);
            setSlider4(filterSlider4);
        }
        video();
    }, []);
return (
        <div id="carosel11">
            {videoData &&
                videoData.length > 0 &&
                videoData.map((video, id) => {
                    return (
                        <div key={id}>
                            <video
                                loop
                                muted
                                autoPlay
                                controls=""
                                style={{ width: "100%" }}>
                                <source src={video.guid} type="video/mp4"></source>
                            </video>
                        </div>
                    );
                })}
            <div id="crouselSlide">
                <OwlCarousel {...responsive} className="owl-theme" >
                    <div>
                        {slider1 && slider1.length > 0 && slider1.map((slide, id) => {
                            return (
                                <div key={id}>
                                    <img src={slide.guid} className="img" alt="slide1" />
                                    <h3 className="pt-2" id="InfiniteH3">{slide.post_title}</h3>
                                    <a href="https://infinitelygreen.com.au" id="infiniteAnchor">https://infinitelygreen.com.au</a>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {slider2 && slider2.length > 0 && slider2.map((slide, id) => {
                            return (
                                <div key={id}>
                                    <img src={slide.guid} className="img" alt="slide1" />
                                    <h3 className="pt-2" id="InfiniteH3">{slide.post_title}</h3>
                                    <a href="https://infinitelygreen.com.au" id="infiniteAnchor">https://infinitelygreen.com.au</a>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {slider3 && slider3.length > 0 && slider3.map((slide, id) => {
                            return (
                                <div key={id}>
                                    <img src={slide.guid} className="img" alt="slide1" />
                                    <h3 className="pt-2" id="InfiniteH3">{slide.post_title}</h3>
                                    <a href="https://infinitelygreen.com.au" id="infiniteAnchor">https://infinitelygreen.com.au</a>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {slider4 && slider4.length > 0 && slider4.map((slide, id) => {
                            return (
                                <div key={id}>
                                    <img src={slide.guid} className="img" alt="slide1" />
                                    <h3 className="pt-2" id="InfiniteH3">{slide.post_title}</h3>
                                    <a href="https://infinitelygreen.com.au" id="infiniteAnchor">https://infinitelygreen.com.au</a>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {slider1 && slider1.length > 0 && slider1.map((slide, id) => {
                            return (
                                <div key={id}>
                                    <img src={slide.guid} className="img" alt="slide1" />
                                    <h3 className="pt-2" id="InfiniteH3">{slide.post_title}</h3>
                                    <a href="https://infinitelygreen.com.au" id="infiniteAnchor">https://infinitelygreen.com.au</a>
                                </div>
                            )
                        })}
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
 }
 export default  AboutSlider;