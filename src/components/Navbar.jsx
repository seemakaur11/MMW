import React, { useEffect, useState } from 'react';
import { fetchData } from '../helper';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavbarData() {
    const [navData, setNavData] = useState([]);

    useEffect(() => {
        async function images() {
            const navData = await fetchData();
            const filterNavData = navData.filter(data => data.ID === '1034' && data)
            setNavData(filterNavData)
        }
        images()
    }, [])

    return (
        <Navbar expand="sm" fixed='top' id="#nav-bar" bg="dark">
            <Container>
                <Navbar.Brand href="#home">
                    {navData && navData.length > 0 && navData.map((img, id) => {
                        return (
                            <div key={id}>
                                <img src={img.guid} alt='logo-image' className='logo' />
                            </div>
                        )
                    })
                    }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" id="li">HOME</Nav.Link>
                        <Nav.Link href="#link" id="li">ABOUT US</Nav.Link>
                        <Nav.Link href="#link" id="li">SERVICES</Nav.Link>
                        <Nav.Link href="#link" id="li">OUR PORTFOLIO</Nav.Link>
                        <Nav.Link href="#link" id="li">BLOG</Nav.Link>
                        <Nav.Link href="#link" id="li">CONTACT US</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <Button size='lg' variant="outline-warning" id='pBtn'>1300 769 302</Button>
            </Container>
        </Navbar>
        // <section>
        //     <nav className='navbar navbar-expand-lg fixed-top navbar-light' id='nav-bar'>
        //         <div className='container'>
        //             <a>
        //                 {navData && navData.length > 0 && navData.map((img, id) => {
        //                         return (
        //                             <div key={id}>
        //                                 <img src={img.guid} alt='logo-image' className='logo' />
        //                             </div>
        //                         )
        //                 })
        //                 }
        //             </a>
        //             <button
        //                 className="navbar-toggler collapsed"
        //                 type="button"
        //                 data-toggle="collapse"
        //                 data-target="#navbarCollapse"
        //             ><span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="navbar-collapse collapse" color="white" id="navbarCollapse">
        //                 <ul className="navbar-nav ml-auto">
        //                     <li className="nav-item">
        //                         <a href="/" className="nav-link active" id="li">HOME</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a href='/about' className="nav-link" id="li">ABOUT US</a>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <a href="/services" className="nav-link" id="li">SERVICES</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a href='/clients' className="nav-link" id="li">OUR PORTFOLIO</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a href='/contact' className="nav-link" id="li">BLOG</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a href='/contact' className="nav-link" id="li">CONTACT US</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>

        // </section>

    )
}

export default NavbarData