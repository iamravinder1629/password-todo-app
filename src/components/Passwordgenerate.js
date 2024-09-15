import React, { useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import '../components/passwordgenerate.css'
import usePasswordGen from "../hooks/usegenpasswordhook.js";
import { IoMdCopy } from 'react-icons/io'
import { FcCheckmark } from 'react-icons/fc'
function Passwordgenerate() {
    const [length, setlength] = useState(5);
    const [copyied, setcopyied] = useState(false);
    const [checkboxdata, setcheckboxdata] = useState([
        { title: "Upper Case", state: false },
        { title: "Lower Case", state: false },
        { title: "Numbers", state: false },
        { title: "Symbols", state: false },
    ]);
    const handelcheckboxdata = (index) => {
        const updatecheckboxdata = [...checkboxdata];
        updatecheckboxdata[index].state = !updatecheckboxdata[index].state;
        setcheckboxdata(updatecheckboxdata);
    };

    const handelcopy = () => {
        navigator.clipboard.writeText(password);
        setcopyied(true);
        setTimeout(() => {
            setcopyied(false);
        }, 1000);
    };
    const { password, generatePassword } = usePasswordGen();


    return (
        <Container className="hello" fluid>
            <Row>
                <Col lg={7} md={8} xs={ 11 } className="mx-auto text-center password my-4">
                    <div className=" py-5 px-2">
                        <div className="justify-content-between d-flex  mx-auto w-75">
                            <input type="text" className="w-75 inpt" value={password} disabled />
                            <button onClick={handelcopy} className="border-0 bg-transparent">
                                {copyied ? <FcCheckmark className="icon"/> : <IoMdCopy className="icon"/>}
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <div className="list-group w-75 ">
                                <label className="list-group-item border-0 rangebox">
                                    <div className="d-flex justify-content-between">
                                        <h6>Password Range </h6>
                                        <h6>{length}</h6>
                                    </div>
                                    <input
                                        className="w-100"
                                        min="4"
                                        max="20"
                                        type="range"
                                        onChange={(e) => setlength(e.target.value)}
                                        value={length}
                                    />
                                </label>

                                <div className="checkboxes">
                                    {checkboxdata.map((checkbox, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="d-flex justify-content-between p-2">
                                                    <h6>{checkbox.title}</h6>
                                                    <input
                                                        type="checkbox"
                                                        checked={checkbox.state}
                                                        onChange={() => handelcheckboxdata(index)}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <button onClick={() => generatePassword(checkboxdata, length)} className="btnbtn">
                                    GENERATE PASSWORD
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Passwordgenerate;