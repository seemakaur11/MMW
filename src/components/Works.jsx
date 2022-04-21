import React from 'react'
import { fetchData, caseStudyData } from '../helper';
import { useState, useEffect } from 'react';

function Works() {
    //images hooks//
    const [unitedTools, setUnitedTools] = useState([]);
    const [corbins, setCorbins] = useState([]);
    const [rgland, setRgland] = useState([]);
    const [sunshine, setSunshine] = useState([]);
    const [ticgroup, setTicgroup] = useState([]);
    const [darebin, setDarebin] = useState([]);
    const [carrabba, setCarrabba] = useState([]);
    const [dal, setDal] = useState([]);
    //content hooks//
    const [unitedtitle, setUnitedTitle] = useState([]);
    const [daltitle, setDalTitle] = useState([]);
    const [cobrunstitle, setCobrunsTitle] = useState([])
    const [rglandtitle, setRglandTitle] = useState([])
    const [darebintitle, setDarebinTitle] = useState([])
    const [carabbatitle, setCarabbaTitle] = useState([])
    const [ticgrouptitle, setTicgroupTitle] = useState([])
    const [sunshinetitle, setSunshineTitle] = useState([])

    ///images
    useEffect(() => {
        async function images() {
            const unitedTools = await fetchData();
            const filterunitedTools = unitedTools.filter(data => data.ID === '42479' && data)
            setUnitedTools(filterunitedTools)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const corbins = await fetchData();
            const filtercorbins = corbins.filter(data => data.ID === '39121' && data)
            setCorbins(filtercorbins)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const rgland = await fetchData();
            const filterrgland = rgland.filter(data => data.ID === '39122' && data)
            setRgland(filterrgland)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const sunshine = await fetchData();
            const filtersunshine = sunshine.filter(data => data.ID === '39123' && data)
            setSunshine(filtersunshine)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const ticgroup = await fetchData();
            const filterticgroup = ticgroup.filter(data => data.ID === '39124' && data)
            setTicgroup(filterticgroup)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const darebin = await fetchData();
            const filterdarebin = darebin.filter(data => data.ID === '39126' && data)
            setDarebin(filterdarebin)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const carrabba = await fetchData();
            const filtercarrabba = carrabba.filter(data => data.ID === '39113' && data)
            setCarrabba(filtercarrabba)
        }
        images()
    }, [])
    useEffect(() => {
        async function images() {
            const dal = await fetchData();
            const filterdal = dal.filter(data => data.ID === '39120' && data)
            setDal(filterdal)
        }
        images()
    }, [])

    ///content 
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filterunitedtitle = caseStudy.filter(data => data.id === 33934 && data);
            filterunitedtitle.map((rest) => {
                return setUnitedTitle(rest.title.rendered);
            })
        }
        content()
    }, [])
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filterdaltitle = caseStudy.filter(data => data.id === 32859 && data);
            filterdaltitle.map((rest) => {
                return setDalTitle(rest.title.rendered);
            })
        }
        content()
    }, [])
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filtercobrunstitle = caseStudy.filter(data => data.id === 33093 && data);
            filtercobrunstitle.map((rest) => {
                return setCobrunsTitle(rest.title.rendered);
            })
        }
        content()
    }, [])
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filterrglandtitle = caseStudy.filter(data => data.id === 33880 && data);
            filterrglandtitle.map((rest) => {
                return setRglandTitle(rest.title.rendered);
            })
        }
        content()
    }, [])
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filterdarebintitle = caseStudy.filter(data => data.id === 33944 && data);
            filterdarebintitle.map((rest) => {
                return setDarebinTitle(rest.title.rendered);
            })
        }
        content()
    }, [])
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filtercarabbatitle = caseStudy.filter(data => data.id === 33066 && data);
            filtercarabbatitle.map((rest) => {
                return setCarabbaTitle(rest.slug);
            })
        }
        content()
    }, [])
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filterticgrouptitle = caseStudy.filter(data => data.id === 33916 && data);
            filterticgrouptitle.map((rest) => {
                return setTicgroupTitle(rest.title.rendered);
            })
        }
        content()
    }, [])
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filtersunshinetitle = caseStudy.filter(data => data.id === 33905 && data);
            filtersunshinetitle.map((rest) => {
                return setSunshineTitle(rest.title.rendered);
            })
        }
        content()
    }, [])

    return (
        <div>
            <div className='container-fluid' id='works'>
                <div className='container'>
                    <div className='py-5'>
                        <div id='heroTag'>
                            <h1>Latest Works</h1>
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className='col-md-3 mb-5' id="united">
                            <div className='single-album' >
                                <div className='album-img'>
                                    {unitedTools && unitedTools.length > 0 && unitedTools.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>                                       
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{unitedtitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-5'>
                        <div className='single-album' >
                                <div className='album-img'>
                                    {dal && dal.length > 0 && dal.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>                                        
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{daltitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-5'>
                        <div className='single-album' >
                                <div className='album-img'>
                                    {darebin && darebin.length > 0 && darebin.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>                                          
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{darebintitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-5'>
                        <div className='single-album' >
                                <div className='album-img'>
                                    {corbins && corbins.length > 0 && corbins.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{cobrunstitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-5'>
                        <div className='single-album' >
                                <div className='album-img'>
                                    {carrabba && carrabba.length > 0 && carrabba.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{carabbatitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-5'>
                        <div className='single-album' >
                                <div className='album-img'>
                                    {sunshine && sunshine.length > 0 && sunshine.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{sunshinetitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-5'>
                        <div className='single-album' >
                                <div className='album-img'>
                                    {ticgroup && ticgroup.length > 0 && ticgroup.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>                                        
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{ticgrouptitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-5'>
                        <div className='single-album' >
                                <div className='album-img'>
                                    {rgland && rgland.length > 0 && rgland.map((img, id) => {
                                        return (
                                            <div key={id}>
                                                <img id='works-cards-img' src={img.guid} className="img-fluid" alt=''></img>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="album-content">
                                    <div className="album-title">
                                        <h3>{rglandtitle}</h3>
                                    </div>
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