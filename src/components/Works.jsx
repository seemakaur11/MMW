import React from 'react'
import { fetchData } from '../helper';
import { useState, useEffect } from 'react';

function Works() {
  const [unitedTools, setUnitedTools] = useState([]);
  const [corbins, setCorbins] = useState([]);
  const [rgland, setRgland] = useState([]);
  const [sunshine, setSunshine] = useState([]);
  const [ticgroup, setTicgroup] = useState([]);
  const [darebin, setDarebin] = useState([]);
  const [carrabba, setCarrabba] = useState([]);
  const [dal, setDal] = useState([]);

  useEffect(() => {
    async function images() {
      const unitedTools = await fetchData();
      const filterunitedTools = unitedTools.filter(data => data.ID === '33078' && data)
      setUnitedTools(filterunitedTools)
    }
    images()
  }, [])
  useEffect(() => {
    async function images() {
      const corbins = await fetchData();
      const filtercorbins = corbins.filter(data => data.ID === '33078' && data)
      setCorbins(filtercorbins)
    }
    images()
  }, [])
  useEffect(() => {
    async function images() {
      const rgland = await fetchData();
      const filterrgland = rgland.filter(data => data.ID === '33078' && data)
      setRgland(filterrgland)
    }
    images()
  }, [])
  useEffect(() => {
    async function images() {
      const sunshine = await fetchData();
      const filtersunshine = sunshine.filter(data => data.ID === '33078' && data)
      setSunshine(filtersunshine)
    }
    images()
  }, [])
  useEffect(() => {
    async function images() {
      const ticgroup = await fetchData();
      const filterticgroup = ticgroup.filter(data => data.ID === '33078' && data)
      setTicgroup(filterticgroup)
    }
    images()
  }, [])
  useEffect(() => {
    async function images() {
      const darebin = await fetchData();
      const filterdarebin = darebin.filter(data => data.ID === '33078' && data)
      setDarebin(filterdarebin)
    }
    images()
  }, [])
  useEffect(() => {
    async function images() {
      const carrabba = await fetchData();
      const filtercarrabba = carrabba.filter(data => data.ID === '33078' && data)
      setCarrabba(filtercarrabba)
    }
    images()
  }, [])
  useEffect(() => {
    async function images() {
      const dal = await fetchData();
      const filterdal = dal.filter(data => data.ID === '33078' && data)
      setDal(filterdal)
    }
    images()
  }, [])

  return (
    <div>
      <div className='container-fluid' id='works'>
        <div className='container'>
          <div className='py-5'>
            <div>
              <h1>Latest Work</h1>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-3'>
              <div className='card'>
                <div className='card-body'>
                  {unitedTools && unitedTools.length > 0 && unitedTools.map((img, id) => {
                    return (
                      <div key={id}>
                        <img src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' >
                <div className='card-body'>
                  {corbins && corbins.length > 0 && corbins.map((img, id) => {
                    return (
                      <div key={id}>
                        <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' >
                <div className='card-body'>
                  {rgland && rgland.length > 0 && rgland.map((img, id) => {
                    return (
                      <div key={id}>
                        <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' >
                <div className='card-body'>
                  {sunshine && sunshine.length > 0 && sunshine.map((img, id) => {
                    return (
                      <div key={id}>
                        <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' >
                <div className='card-body'>
                  {ticgroup && ticgroup.length > 0 && ticgroup.map((img, id) => {
                    return (
                      <div key={id}>
                        <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' >
                <div className='card-body'>
                  {darebin && darebin.length > 0 && darebin.map((img, id) => {
                    return (
                      <div key={id}>
                        <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' >
                <div className='card-body'>
                  {carrabba && carrabba.length > 0 && carrabba.map((img, id) => {
                    return (
                      <div key={id}>
                        <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' >
                <div className='card-body'>
                  {dal && dal.length > 0 && dal.map((img, id) => {
                    return (
                      <div key={id}>
                        <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Works