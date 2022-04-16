import React, { useEffect, useState } from 'react';

function Navbar() {
    const [state, setState] = useState([]);

    useEffect(() => {
        async function images() {
            try {
                const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/mo/v1/images/attachment')
                const json = await response.json();
                console.log("JSON ====>", json)
                setState(json)
            }
            catch (error) {
                console.log(" error ---->", error)
            }
        }
        images()
    }, [])


    return (
        <section>
            <nav className='navbar navbar-expand-lg fixed-top navbar-light' id='nav-bar'>
                <div className='container'>
                    <a>
                        {!!state && state.length && state.map((img, id) => {
                            console.log(" images ===>", img)
                            if (img.ID === '1034') {
                                return (
                                    <div key={id}>
                                        <img src={img.guid} alt='logo-image' className='logo' />
                                    </div>
                                )
                            }
                        })
                        }
                    </a>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    ><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" color="white" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link active" id="li">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a href='/about' className="nav-link" id="li">ABOUT US</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/services" className="nav-link" id="li">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a href='/clients' className="nav-link" id="li">OUR PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a href='/contact' className="nav-link" id="li">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a href='/contact' className="nav-link" id="li">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>

    )
}

export default Navbar