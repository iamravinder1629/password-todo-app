import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import lightlogo from '../image/project log.png'
import '../components/Rnavbar.css';
import { GoHome } from "react-icons/go";
import { GoTasklist } from "react-icons/go"
import { PiPasswordFill } from "react-icons/pi"
import { Link } from 'react-router-dom';
import darklogo from '../image/dark logo.png'
import { BiSolidSun } from 'react-icons/bi'
import { BsFillMoonStarsFill } from 'react-icons/bs'
function Rnavbar(props) {
    const mytoggle = () => {
        const myicon = document.querySelector(".fa");
        myicon.classList.contains("fa-bars") ? myicon.classList.remove("fa-bars") || myicon.classList.add("fa-close") : myicon.classList.remove("fa-close") || myicon.classList.add("fa-bars")
    }
    return (
        <>
            <Navbar expand="lg" className="navbg">
                <Container>
                    <Navbar.Brand href="#home">{props.logo === true ? <img className='logo' src={lightlogo} alt="LOGO" /> : <img className='logo' src={darklogo} alt="LOGO" />}</Navbar.Brand>
                    <div class="form-check form-switch bg-transparent text-warning position-absolute border-0 top-0 start-0">
                        {props.themeicon ? <BsFillMoonStarsFill onClick={props.changetheme} style={{ color: "black" }} /> : <BiSolidSun onClick={props.changetheme} />}

                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <i className="fa fa-bars" onClick={mytoggle}></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="mx-auto p-2 ">
                            <ul className='listcolor d-flex m-0 list-unstyled mx-auto' >
                                <li>
                                    <Nav.Link className='lighticon' as={Link} to={"/"} ><GoHome /></Nav.Link>
                                </li>
                                <li >

                                    <Nav.Link className='lighticon' as={Link} to={"/todo"} ><GoTasklist /></Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link className='lighticon' as={Link} to={"/password"} ><PiPasswordFill /></Nav.Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default Rnavbar
