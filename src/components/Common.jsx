import React, { useEffect, useState } from 'react';
import Home from './Home';

function Common() {
    const [state,setState] = useState([]);
    useEffect(() => {
        async function Images() {
            try {
                const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/mo/v1/images/attachment')
                const json = await response.json();
                console.log("JSON ====>", json)
               return setState(json)
            }
            catch (error) {
                console.log(" error ---->", error)
            }
        }
        Images()
    }, [])
  return (
        <Home props ={state}/>
  )
}

export default Common