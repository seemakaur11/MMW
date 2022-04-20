import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";

const ServiceDelivery = () => {
  const [unitedLogo, setUnitedLogo] = useState([]);
  const [pursueLogo, setPursueLogo] = useState([]);
  const [ticLogo, setTicLogo] = useState([]);
  const [dalLogo, setDalLogo] = useState([]);
  const [landLogo, setLandLogo] = useState([]);
  const [malvernLogo, setMalvernLogo] = useState([]);
  const [marksLogo, setMarksLogo] = useState([]);
  const [riseLogo, setRiseLogo] = useState([]);
  const [groupLogo, setGroupLogo] = useState([]);
  const [propertyLogo, setPropertyLogo] = useState([]);

  useEffect(() => {
    async function images() {
      const unitedData = await fetchData();
      const filterUnitedData = unitedData.filter(
        (data) => data.ID === "34062" && data
      );
      const filterPursueData = unitedData.filter(
        (data) => data.ID === "34060" && data
      );
      const filterDalData = unitedData.filter(
        (data) => data.ID === "34064" && data
      );
      const filterTicData = unitedData.filter(
        (data) => data.ID === "34061" && data
      );
      const filterLandData = unitedData.filter(
        (data) => data.ID === "34066" && data
      );
      const filterMalvernData = unitedData.filter(
        (data) => data.ID === "34068" && data
      );
      const filterMarksData = unitedData.filter(
        (data) => data.ID === "34070" && data
      );
      const filterRiseData = unitedData.filter(
        (data) => data.ID === "34076" && data
      );
      const filterGroupData = unitedData.filter(
        (data) => data.ID === "34074" && data
      );
      const filterPropertyData = unitedData.filter(
        (data) => data.ID === "34072" && data
      );
      setUnitedLogo(filterUnitedData);
      setPursueLogo(filterPursueData);
      setTicLogo(filterTicData);
      setDalLogo(filterDalData);
      setLandLogo(filterLandData);
      setMalvernLogo(filterMalvernData);
      setMarksLogo(filterMarksData);
      setRiseLogo(filterRiseData);
      setGroupLogo(filterGroupData);
      setPropertyLogo(filterPropertyData);
    }
    images();
  }, []);

  return (
    <div>
      <div className="container-fluid pl-5" id="service-delivery">
        <h5>
          <i class="fa-solid fa-circle-dot"></i>Service Delivery With A Sense Of
          Pride
        </h5>
        <h1>
          We’re trusted by these industry experts<br></br> Australia-wide!
        </h1>
        <div className="row justify-content-center pl-5">
          <div className="col-md-3">
            {unitedLogo &&
              unitedLogo.length > 0 &&
              unitedLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo1" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {pursueLogo &&
              pursueLogo.length > 0 &&
              pursueLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo2" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {ticLogo &&
              ticLogo.length > 0 &&
              ticLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo3" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {dalLogo &&
              dalLogo.length > 0 &&
              dalLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo4" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {landLogo &&
              landLogo.length > 0 &&
              landLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo5" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {malvernLogo &&
              malvernLogo.length > 0 &&
              malvernLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo6" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {marksLogo &&
              marksLogo.length > 0 &&
              marksLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo7" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {riseLogo &&
              riseLogo.length > 0 &&
              riseLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo8" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {groupLogo &&
              groupLogo.length > 0 &&
              groupLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo9" />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {propertyLogo &&
              propertyLogo.length > 0 &&
              propertyLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="logo10" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDelivery;
