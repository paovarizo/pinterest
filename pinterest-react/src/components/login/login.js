import React, { useState } from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import './login.scss'
import { BsGoogle,BsTwitter} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';


const Login =()=>{
    const [shLogin, setShLogin]=useState("none")
    const [shRegister, setShRegister]=useState("block")
    const showLogin=()=>{
        setShLogin("block")
        setShRegister("none")
    }
    const showRegister=()=>{
        setShLogin("none")
        setShRegister("block")
    }
    const [registerData, setRegisterData]=useState({
        name:"",
        email:"",
        password:""
    }
    )
    return(
        <>
        <div className="row row-center">
            <div className="col-8" style={{display:`${shRegister}`}}>
                <div className="center">
                    <h1 className="title"><strong>Create Account</strong></h1>
                </div>
                <div className="center">
                    <div className="row row-icons">
                        <div className="col">
                            <div>
                                <BsGoogle className="icon-circle"/>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <FaFacebookF className="icon-circle"/>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <BsTwitter className="icon-circle"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="center">
                    <p>or use your email for registration:</p>
                </div>
                <div>
                    <div className="center">
                        <input className="input" placeholder="Name" type="text"></input>
                    </div>
                    <div className="center">
                        <input className="input" placeholder="Email" type="email"></input>
                    </div>
                    <div className="center">
                        <input className="input" placeholder="Password" type="password"></input>
                    </div>
                </div>
                <div className="center">
                    <div className="checkbox-container">
                        <input type="checkbox"></input>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="center">
                    <div className="row row-buttons">
                        <div className="col">
                            <button className="button-fill">Sign up</button>
                        </div>
                        <div className="col">
                            <button className="button-outlined" onClick={showLogin}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-8" style={{display:`${shLogin}`}}>
                <div className="center">
                    <h1 className="title"><strong>Log in</strong></h1>
                </div>
                <div className="center">
                    <div className="row row-icons">
                        <div className="col">
                            <div>
                                <BsGoogle className="icon-circle"/>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <FaFacebookF className="icon-circle"/>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <BsTwitter className="icon-circle"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="center">
                    <p>or use your email for log in:</p>
                </div>
                <div>
                    <div className="center">
                        <input className="input" placeholder="Email" type="email"></input>
                    </div>
                    <div className="center">
                        <input className="input" placeholder="Password" type="password"></input>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="center">
                    <div className="row row-buttons">
                        <div className="col">
                            <button className="button-fill" onClick={showRegister}>Sign up</button>
                        </div>
                        <div className="col">
                            <button className="button-outlined">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="solid-red"></div>
            </div>
        </div>
        </>
    )
}
export default Login;