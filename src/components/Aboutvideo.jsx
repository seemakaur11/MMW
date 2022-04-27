import React, { useEffect, useState } from "react";
import { fetchData, aboutData } from "../helper";

function Aboutvideo() {
  ///vedio_section///
  const [aboutVideo, setAboutVideo] = useState([]);

  useEffect(() => {
    async function images() {
      const aboutVideo = await fetchData();
      const filtervideo = aboutVideo.filter(
        (data) => data.ID === "34528" && data
      );
      setAboutVideo(filtervideo);
    }
    images();
  }, []);
  ///content_section///
  const [vedioText, setVedioText ] = useState([])
  const [vedioText1, setVedioText1 ] = useState([])
  const [vedioTitle, setVedioTitle ] = useState([])

  useEffect(() => {
    async function content() {
      const vedioText = await aboutData();
      const filtervedioText =vedioText.filter(
        (data) => data.meta_key === "do_paragraph" && data
      );
      setVedioText(filtervedioText);
      const filtervedioText1 =vedioText.filter(
        (data) => data.meta_key === "do_paragraph1" && data
      );
      setVedioText1(filtervedioText1);
      const filtervedioTitle =vedioText.filter(
        (data) => data.meta_key === "do_title" && data
      );
      setVedioTitle(filtervedioTitle);
      
    }
    content();
  }, []);

  return (
    <div>
      {aboutVideo &&
        aboutVideo.length > 0 &&
        aboutVideo.map((img, id) => {
          return (
            <div key={id} id="about-video-container">
              <video loop muted autoPlay controls="" id="about-video" height='100%' width='100%'>
                <source src={img.guid} type="video/mp4"></source>
              </video>
              <div id="video-para">
                <h1>
                {vedioTitle &&
                vedioTitle.length > 0 &&
                vedioTitle.map((head, id) => {
                  return (
                    <div key={id}>
                      {head.meta_value}
                    </div>
                  );
                })}
                </h1>
                <p>
                {vedioText &&
                vedioText.length > 0 &&
                vedioText.map((head, id) => {
                  return (
                    <div key={id}>
                      {head.meta_value}
                    </div>
                  );
                })}
                </p>
                <p>
                {vedioText1 &&
                vedioText1.length > 0 &&
                vedioText1.map((head, id) => {
                  return (
                    <div key={id}>
                      {head.meta_value}
                    </div>
                  );
                })}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Aboutvideo;
