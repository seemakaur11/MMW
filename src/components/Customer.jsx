import React from 'react'
import { useState, useEffect } from 'react'
import { fetchData,testimonials } from '../helper'

function Customer() {
    const [dal, setDal] = useState([]);
    const [onestep, setOnestep] = useState([]);
    const [sunshine, setSunshine] = useState([]);
    const [vintage, setVintage] = useState([])
    const [orena, setOrena] = useState([])
    const [loans, setLoans] = useState([])


    //useeffect images///
    useEffect(() => {
        async function testimonials() {
            const dal = await testimonials();
            const filterdal = dal.filter(data => data.title === '34892' && data)
            setDal(filterdal)
        }
       testimonials()
    }, [])
    useEffect(() => {
        async function images() {
            const onestep = await fetchData();
            const filteronestep = onestep.filter(data => data.ID === '34894' && data)
            setOnestep(filteronestep)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const sunshine = await fetchData();
            const filtersunshine = sunshine.filter(data => data.ID === '34896' && data)
            setSunshine(filtersunshine)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const vintage = await fetchData();
            const filtervintage = vintage.filter(data => data.ID === '34893' && data)
            setVintage(filtervintage)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const orena = await fetchData();
            const filterorena = orena.filter(data => data.ID === '34895' && data)
            setOrena(filterorena)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const loans = await fetchData();
            const filterloans = loans.filter(data => data.ID === '34891' && data)
            setLoans(filterloans)
        }
        images()
    }, [])
    return (
        <div className='container-fluid' style={{backgroundColor:"black"}}>
            <div className='container'>
                <div className='row justify-content-center py-5'>
                     <div id='Heading'>
                         <p> <i
                          aria-hidden="true"
                          className="fas fa-dot-circle mx-2"
                          id="true-circle"
                        ></i> Customer Feedback</p>
                        <div>
                            <h1>
                                Hear from those who’ve had first-hand experiences with us
                            </h1>
                        </div>
                     </div>
                </div>
            </div>
            <div id="demo" className="carousel slide" data-ride="carousel" style={{ backgroundColor: "black" }}>
                <div className="carousel-inner py-5">
                    <div className="carousel-item active">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                        <button></button>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {dal && dal.length > 0 && dal.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                        <h3>Los Angeles</h3>
                                        <p>We had such a great time in LA!</p>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {onestep && onestep.length > 0 && onestep.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                        <h3>Los Angeles</h3>
                                        <p>We had such a great time in LA!</p>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {sunshine && sunshine.length > 0 && sunshine.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                        <h3>Los Angeles</h3>
                                        <p>We had such a great time in LA!</p>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {orena && orena.length > 0 && orena.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                        <h3>Los Angeles</h3>
                                        <p>We had such a great time in LA!</p>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {loans && loans.length > 0 && loans.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container'>
                            <div className='row py-5'>
                                <div className='col-lg-6'>
                                    <div>
                                        <button>101 Loans & 101 Support </button>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {vintage && vintage.length > 0 && vintage.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
}
export default Customer