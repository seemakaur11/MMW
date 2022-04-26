import React from 'react'
import { useState, useEffect } from 'react'

import { fetchData , testimonials } from '../helper'

function Customer() {

    //images////
    const [dal, setDal] = useState([]);
    const [oneStep, setOneStep] = useState([]);
    const [sunShine, setSunShine] = useState([]);
    const [vintage, setVintage] = useState([])
    const [orena, setOrena] = useState([])
    const [loans, setLoans] = useState([])
    useEffect(() => {
        async function images(){
            const Img = await fetchData();
            
            const filterDal = Img.filter(data => data.ID === "34892" )
            setDal(filterDal);

            const filteroneStep = Img.filter(data => data.ID === '34894' && data)
            setOneStep(filteroneStep);

            const filtersunShine = Img.filter(data => data.ID === '34896' && data)
            setSunShine(filtersunShine)

            const filtervintage = Img.filter(data => data.ID === '34893' && data)
            setVintage(filtervintage)

            const filterorena = Img.filter(data => data.ID === '34895' && data)
            setOrena(filterorena)

            const filterloans = Img.filter(data => data.ID === '34891' && data)
            setLoans(filterloans)
        }
       images()
    }, [])
    ///contents///
    const [content, setContent] = useState([]);
    const [content1, setContent1] = useState([]);
    const [content2, setContent2] = useState([]);
    const [content3, setContent3] = useState([]);
    const [content4, setContent4] = useState([]);
    const [content5, setContent5] = useState([]);
    const [title , setTitle] = useState([])
    const [title1 , setTitle1] = useState([])
    const [title2 , setTitle2] = useState([])
    const [title3 , setTitle3] = useState([])
    const [title4, setTitle4] = useState([])
    const [title5 , setTitle5] = useState([])
    useEffect(() => {
        async function content() {
            const testimonial = await testimonials();
            const filtercontent = testimonial.filter(data => data.id === 43832 && data);
            filtercontent.map((title) =>{
                 return setContent(title.title.rendered)
            }) 
            const filtertitle = testimonial.filter(data => data.id === 43832 && data);
            filtertitle.map((title) =>{
                 return setTitle(title.content.rendered)
            }) 
            const filtercontent1 = testimonial.filter(data => data.id === 43836 && data);
            filtercontent1.map((title) =>{
                 return setContent1(title.title.rendered)
            }) 
            const filtertitle1 = testimonial.filter(data => data.id === 43836 && data);
            filtertitle1.map((title) =>{
                 return setTitle1(title.content.rendered)
            }) 
            const filtercontent2 = testimonial.filter(data => data.id === 43838 && data);
            filtercontent2.map((title) =>{
                 return setContent2(title.title.rendered)
            }) 
            const filtertitle2 = testimonial.filter(data => data.id === 43838 && data);
            filtertitle2.map((title) =>{
                 return setTitle2(title.content.rendered)
            }) 
            const filtercontent3 = testimonial.filter(data => data.id === 43842 && data);
            filtercontent3.map((title) =>{
                 return setContent3(title.title.rendered)
            }) 
            const filtertitle3 = testimonial.filter(data => data.id === 43842 && data);
            filtertitle3.map((title) =>{
                 return setTitle3(title.content.rendered)
            }) 
            const filtercontent4 = testimonial.filter(data => data.id === 43840 && data);
            filtercontent4.map((title) =>{
                 return setContent4(title.title.rendered)
            }) 
            const filtertitle4 = testimonial.filter(data => data.id === 43840 && data);
            filtertitle4.map((title) =>{
                 return setTitle4(title.content.rendered)
            }) 
            const filtercontent5 = testimonial.filter(data => data.id === 43830 && data);
            filtercontent5.map((title) =>{
                 return setContent5(title.title.rendered)
            })
            const filtertitle5 = testimonial.filter(data => data.id === 43830 && data);
            filtertitle5.map((title) =>{
                 return setTitle5(title.content.rendered)
            })  
            
        }
        content()
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
            <div  id="demo" className="carousel slide" data-ride="carousel" style={{ backgroundColor: "black" }}>
                <div className="carousel-inner py-5">
                    <div className="carousel-item active">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                       <button sr id='titlebtn' className='button py-1'>{content}</button>
                                    </div>
                                    <div>
                                        <p id='content'>{title}</p>
                                    </div>
                                    <div>
                                      <h5 id='customername'>- Julia Edwards <a href='https://www.dal.com.au/'>https://www.dal.com.au/</a></h5> 
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
                                    <button id='titlebtn' className='button py-1'>{content1}</button>
                                    </div>
                                    <div>
                                        <p id='content'>{title1}</p>
                                    </div>
                                    <h5 id='customername'>- Sami Bitar <a href="https://www.onestepcare.com.au/">https://www.onestepcare.com.au/</a></h5> 
                                </div>
                                <div className='col-lg-6'>
                                    {oneStep && oneStep.length > 0 && oneStep.map((img, id) => {
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
                                    <button id='titlebtn' className='button py-1'>{content2}</button>
                                    </div>
                                    <div>
                                        <p id='content'>{title2}</p>
                                    </div>
                                    <div>
                                    <h5 id='customername'>- Jayden Healey <a href="https://www.sunshinec.com.au/">https://www.sunshinec.com.au/</a></h5>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {sunShine && sunShine.length > 0 && sunShine.map((img, id) => {
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
                                    <button id='titlebtn' className='button py-1'>{content3}</button>
                                    </div>
                                    <div>
                                        <p id='content'>{title3}</p>
                                    </div>
                                    <div>
                                      <h5 id='customername'>- erah Corazza <a href="https://www.propertyselectadvisory.com/">https://www.propertyselectadvisory.com/</a></h5> 
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
                                    <button id='titlebtn' className='button py-1'>{content4}</button>
                                    </div>
                                    <div>
                                        <p id='content'>{title4}</p>
                                    </div>
                                    <div>
                                      <h4 id='customername'>- Ekta Gill <a href="https://www.propertyselectadvisory.com/"> https://www.101loans.com.au/</a></h4> 
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
                                    <button id='titlebtn' className='button py-1'>{content5}</button>
                                    </div>
                                    <div>
                                        <p id='content'>{title5}</p>
                                    </div>
                                    <div>
                                      <h4 id='customername'>- Mara Luglio <a href="https://www.lalunavintage.com.au/"> https://www.lalunavintage.com.au/</a></h4> 
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