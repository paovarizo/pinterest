import React, { useEffect, useState } from "react";
import './login.scss'
import { BsGoogle,BsTwitter} from 'react-icons/bs';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, FacebookAuthProvider, TwitterAuthProvider} from "firebase/auth"
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom"


const Login =()=>{
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess]=useState(false)
    const [registerSuccess, setRegisterSuccess]=useState(false)
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
    })
    const [loginData, setLoginData]=useState({
        email:"",
        password:""
    })
    const handleChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeLogin = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        if(loginSuccess || registerSuccess){
            navigate('/')
        }
    }, [loginSuccess,registerSuccess]);
    const register= async()=>{
        if((registerData.email.trim() && registerData.password.trim() && registerData.name.trim())!==""){
            if(registerData.password.length > 6){
                try{
                    const user = await createUserWithEmailAndPassword(auth,registerData.email,registerData.password);
                    console.log(user)
                }catch(error){
                    console.log(error.message)
                    if(error.message ==="Firebase: Error (auth/email-already-in-use)."){
                        alert("El email que ingresaste ya esta registrado")
                    }
                }
            }else{
                alert("La contraseña debe ser de al menos 6 caracteres")
            }
        }else{
            alert("Por favor llena todos los campos")
        }
    };
    const registerWithGoogle=async()=>{
            const provider = new GoogleAuthProvider
            signInWithPopup(auth,provider)
                .then((result)=>{
                    navigate('/')
                }).catch((error)=>{
                    alert(error.message)
                })
    }
    const registerWithFacebook=async()=>{
        const provider = new FacebookAuthProvider
        signInWithPopup(auth,provider)
    }
    const registerWithTwitter=async()=>{
        const provider = new TwitterAuthProvider
        signInWithPopup(auth,provider)
    }
    const login=async()=>{
        if((loginData.email.trim() && loginData.password.trim())!==""){
            if(loginData.password.length > 6){
                try{
                    const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
                    console.log(user)
                    setLoginSuccess(true)
                }catch(error){
                    setLoginSuccess(false)
                    console.log(error.message)
                    if(error.message=== "Firebase: Error (auth/user-not-found)."){
                        alert("No se encontró usuario")
                    }
                    if(error.message=== "Firebase: Error (auth/wrong-password)."){
                        alert("Contraseña no valída")
                    }
                }
            }else{
                alert("La contraseña debe ser de al menos 6 caracteres")
            }
        }else{
            alert("Por favor llena todos los campos")
        }
    }
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
                                <BsGoogle className="icon-circle" onClick={registerWithGoogle}/>
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
                        <input className="input" placeholder="Name" type="text" onChange={handleChange} name="name"></input>
                    </div>
                    <div className="center">
                        <input className="input" placeholder="Email" type="email" onChange={handleChange} name="email"></input>
                    </div>
                    <div className="center">
                        <input className="input" placeholder="Password" type="password" onChange={handleChange} name="password"></input>
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
                            <button className="button-fill" onClick={register}>Sign up</button>
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
                                <BsGoogle className="icon-circle" onClick={registerWithGoogle}/>
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
                        <input className="input" placeholder="Email" type="email" name="email" onChange={handleChangeLogin}></input>
                    </div>
                    <div className="center">
                        <input className="input" placeholder="Password" type="password" name="password" onChange={handleChangeLogin}></input>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="center">
                    <div className="row row-buttons">
                        <div className="col">
                            <button className="button-outlined" onClick={showRegister}>Sign up</button>
                        </div>
                        <div className="col">
                            <button className="button-fill" onClick={login}>Sign in</button>
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