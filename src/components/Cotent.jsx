import React, { useEffect, useState } from 'react';
import { caseStudyData } from '../helper'

function Cotent() {
    const [webData, setwebData] = useState([]);

    
    useEffect(() => {
        async function content() {
            const caseStudy = await caseStudyData();
            const filterwebData = caseStudy.filter(data => data.id === 33934 && data);
            filterwebData.map((rest)=>{
                setwebData(rest.title.rendered);
            })
        }
        content()
    }, [])
  return (
    <div>
        <div>
            <h1>{webData}</h1></div>                   
    </div>
  )
}

export default Cotent