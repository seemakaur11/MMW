import React, { useEffect, useState } from 'react';
import { fetchData } from '../helper';

function Home() {
    const [videoData, setvideoData] = useState([]);

    useEffect(() => {
        async function images() {
            const videoData = await fetchData();
            const filtervideoData = videoData.filter(data => data.ID === '24610' && data)
            setvideoData(filtervideoData)
        }
        images()
    }, [])
    return (
        <div>
           
               {videoData && videoData.length > 0 && videoData.map((img,id) => {
                   return (
                       <div key={id}>
                           <video loop muted autoPlay controls = '' style={{ width: "100%" ,height:"20%" }}>
                           <source src={img.guid} type="video/mp4" ></source>
                           </video>
                       </div>
                   )
               })

               }
               
        </div>
    )
}

export default Home