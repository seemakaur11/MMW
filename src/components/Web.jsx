import React, { useEffect, useState } from "react";
import { fetchData, contentData } from "../helper";
import CountUp from "react-countup";

function Web() {
  // images hooks
  const [webData, setwebData] = useState([]);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [star, setStar] = useState([]);
  const [clients, setClients] = useState([]);

  // content hooks
  const [title, setTitle] = useState([]);
  const [pTag, setPTag] = useState([]);
  const [pTag1, setPTag1] = useState([]);
  const [paragraph, setParagraph] = useState([]);
  const [paragraph1, setParagraph1] = useState([]);
  const [count1, setCount1] = useState([]);
  const [count2, setCount2] = useState([]);
  const [count3, setCount3] = useState([]);
  const [count4, setCount4] = useState([]);
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    async function content() {
      const contData = await contentData();
      // title
      const filterTitle = contData.filter(
        (data) => data.meta_key === "section_1_title" && data
      );
      setTitle(filterTitle);
      // p tag
      const filterTag = contData.filter(
        (data) => data.meta_key === "section_1_tag_1" && data
      );
      setPTag(filterTag);
      //ptag1
      const filterTag1 = contData.filter(
        (data) => data.meta_key === "section_1_tag_2" && data
      );
      setPTag1(filterTag1);
      // paragraph
      const filterP = contData.filter(
        (data) => data.meta_key === "section_1_p_1" && data
      );
      setParagraph(filterP);
      // paragraph 1
      const filterP1 = contData.filter(
        (data) => data.meta_key === "section_1_p_2" && data
      );
      setParagraph1(filterP1);
      //count1
      const filterCount1 = contData.filter(
        (data) => data.meta_key === "section_1_count1" && data
      );
      setCount1(filterCount1);
      //count2
      const filterCount2 = contData.filter(
        (data) => data.meta_key === "section_1_count2" && data
      );
      setCount2(filterCount2);
      //count3
      const filterCount3 = contData.filter(
        (data) => data.meta_key === "section_1_count3" && data
      );
      setCount3(filterCount3);
      //count4
      const filterCount4 = contData.filter(
        (data) => data.meta_key === "section_1_count4" && data
      );
      setCount4(filterCount4);
      //slider
      const filterSlider = contData.filter(
        (data) => data.meta_key === "section_1_slider_items" && data
      );
      setSlide(filterSlider);
    }
    content();
  }, []);
  useEffect(() => {
    async function images() {
      const webData = await fetchData();
      const filterwebData = webData.filter(
        (data) => data.ID === "34517" && data
      );
      setwebData(filterwebData);
      // user
      const userFilterData = webData.filter(
        (data) => data.ID === "36928" && data
      );
      setUser(userFilterData);
      //users
      const usersFilterData = webData.filter(
        (data) => data.ID === "36929" && data
      );
      setUsers(usersFilterData);
      //stars
      const starFilterData = webData.filter(
        (data) => data.ID === "36930" && data
      );
      setStar(starFilterData);
      //clients
      const clientsFilterData = webData.filter(
        (data) => data.ID === "36931" && data
      );
      setClients(clientsFilterData);
    }
    images();
  }, []);

  return (
    <div className="webSection m-0 p-0">
      <section>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6" id="web-img-big">
              {webData &&
                webData.length > 0 &&
                webData.map((img, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={img.guid}
                        alt="web-image"
                        className="img-fluid rounded-pill"
                      />
                      <div id="web-img-small">
                        <p id="web-img-small1">Trusted by</p>
                        <p id="web-img-small2">800 +</p>
                        <p id="web-img-small3">clients</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-lg-6">
              {title &&
                title.length > 0 &&
                title.map((head, id) => {
                  return (
                    <div key={id} id="h1content">
                      <h5>
                        <i
                          aria-hidden="true"
                          className="fas fa-dot-circle mx-2"
                          id="true-circle"
                        ></i>
                        {head.meta_value}{" "}
                      </h5>
                    </div>
                  );
                })}
              <div className="py-3">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      {slide &&
                        slide.length > 0 &&
                        slide.map((value, id) => {
                          const slider = value.meta_value;
                          const slideVal = slider.split(/[.,!,?]/);
                          const slide1 = slideVal;
                          return (
                            <div key={id}>
                              <h1 id="sliderTag">{slide1[0]}</h1>
                            </div>
                          );
                        })}
                    </div>
                    <div className="carousel-item">
                      {slide &&
                        slide.length > 0 &&
                        slide.map((value, id) => {
                          const slider = value.meta_value;
                          const slideVal = slider.split(/[.,!,?]/);
                          const slide2 = slideVal;
                          return (
                            <div key={id}>
                              <h1 id="sliderTag">{slide2[1]}</h1>
                            </div>
                          );
                        })}
                    </div>
                    <div className="carousel-item">
                      {slide &&
                        slide.length > 0 &&
                        slide.map((value, id) => {
                          const slider = value.meta_value;
                          const slideVal = slider.split(/[.,!,?]/);
                          const slide3 = slideVal;
                          return (
                            <div key={id}>
                              <h1 id="sliderTag">{slide3[2]}</h1>
                            </div>
                          );
                        })}
                    </div>
                    <div className="carousel-item">
                      {slide &&
                        slide.length > 0 &&
                        slide.map((value, id) => {
                          const slider = value.meta_value;
                          const slideVal = slider.split(/[.,!,?]/);
                          const slide4 = slideVal;
                          return (
                            <div key={id}>
                              <h1 id="sliderTag">{slide4[3]}</h1>
                            </div>
                          );
                        })}
                    </div>
                    <div className="carousel-item">
                      {slide &&
                        slide.length > 0 &&
                        slide.map((value, id) => {
                          const slider = value.meta_value;
                          const slideVal = slider.split(/[.,!,?]/);
                          const slide5 = slideVal;
                          return (
                            <div key={id}>
                              <h1 id="sliderTag">{slide5[4]}</h1>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 mb-3">
                    {pTag &&
                      pTag.length > 0 &&
                      pTag.map((head, id) => {
                        return (
                          <div key={id}>
                            <p className="py-2 " id="pTag">
                              <i
                                aria-hidden="true"
                                className="fas fa-check mx-2"
                                id="right-tic"
                              ></i>
                              {head.meta_value}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                  <div className="col-lg-5 mb-5">
                    {pTag1 &&
                      pTag1.length > 0 &&
                      pTag1.map((head, id) => {
                        return (
                          <div key={id}>
                            <p className="py-2 mx-1" id="pTag">
                              <i
                                aria-hidden="true"
                                className="fas fa-check mx-2"
                                id="right-tic"
                              ></i>
                              {head.meta_value}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="row">
                {paragraph &&
                  paragraph.length > 0 &&
                  paragraph.map((paragraph, id) => {
                    return (
                      <div key={id}>
                        <p className="pt-4" id="paragraph">
                          {paragraph.meta_value}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <div className="row">
                {paragraph1 &&
                  paragraph1.length > 0 &&
                  paragraph1.map((paragraph, id) => {
                    return (
                      <div key={id}>
                        <p id="paragraph">{paragraph.meta_value}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5" id="web-star">
          <div className="row py-5" id="row-star">
            <div className="col-lg-3 mb-5" id="borderLine">
              {user &&
                user.length > 0 &&
                user.map((img, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={img.guid}
                        alt="user-image"
                        className="user-img"
                      />
                    </div>
                  );
                })}
              <div>
                <h2 className="pt-4" id="countUp">
                  <CountUp start={0} end={10} duration={1} />+
                </h2>
                {count1 &&
                  count1.length > 0 &&
                  count1.map((value, id) => {
                    return (
                      <div key={id}>
                        <h2 className="pt-3" id="clientTag">
                          {value.meta_value}
                        </h2>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-3 mb-5" id="borderLine">
              {users &&
                users.length > 0 &&
                users.map((img, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={img.guid}
                        alt="users-image"
                        className="users-img"
                      />
                    </div>
                  );
                })}
              <div>
                <h2 className="pt-4" id="countUp">
                  <CountUp start={0} end={100} duration={1} />+
                </h2>
                {count2 &&
                  count2.length > 0 &&
                  count2.map((value, id) => {
                    return (
                      <div key={id}>
                        <h2 className="pt-3" id="clientTag">
                          {value.meta_value}
                        </h2>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-3 mb-5" id="borderLine">
              {star &&
                star.length > 0 &&
                star.map((img, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={img.guid}
                        alt="user-image"
                        className="user-img"
                      />
                    </div>
                  );
                })}
              <div>
                <h2 className="pt-4" id="countUp">
                  <CountUp start={0} end={5} duration={1} />
                  -Star rated
                </h2>
                {count3 &&
                  count3.length > 0 &&
                  count3.map((value, id) => {
                    return (
                      <div key={id}>
                        <h2 className="pt-3" id="clientTag">
                          {value.meta_value}
                        </h2>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              {clients &&
                clients.length > 0 &&
                clients.map((img, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={img.guid}
                        alt="clients-image"
                        className="clients-img"
                      />
                    </div>
                  );
                })}
              <div>
                <h2 className="pt-4" id="countUp">
                  <CountUp start={0} end={800} duration={1} />+
                </h2>
                {count4 &&
                  count4.length > 0 &&
                  count4.map((value, id) => {
                    return (
                      <div key={id}>
                        <h2 className="pt-3" id="clientTag">
                          {value.meta_value}
                        </h2>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Web;
