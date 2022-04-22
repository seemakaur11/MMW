import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";
import Mmw from "./Mmw";
import Service from "./Service";
import ServiceDelivery from "./ServiceDelivery";
import Web from "./Web";
import Works from "./Works";
import Lottie from "lottie-react";
import Message from "../animation/Message.json";
import Contact from "../animation/Contact.json";

function Home() {
  const [videoData, setvideoData] = useState([]);

  useEffect(() => {
    async function images() {
      const videoData = await fetchData();
      const filtervideoData = videoData.filter(
        (data) => data.ID === "24610" && data
      );
      setvideoData(filtervideoData);
    }
    images();
  }, []);

  return (
    <div id="videoSection">
      {videoData &&
        videoData.length > 0 &&
        videoData.map((img, id) => {
          return (
            <div key={id}>
              <video
                loop
                muted
                autoPlay
                controls=""
                style={{ width: "100%", height: "20%" }}
              >
                <source src={img.guid} type="video/mp4"></source>
                <h1>jhgkj</h1>
              </video>
              <div id="lottieMessage"><Lottie animationData={Message} loop={true} autoplay={true} /></div>
              <div id="lottieContact"><Lottie animationData={Contact} loop={true} autoplay={true} /></div>
            </div>
          );
        })}
      <Web />
      <Service />
      <Works />
      <Mmw />
      <ServiceDelivery />
    </div>
  );
}

export default Home;
