import {signOut} from "firebase/auth"
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom"
import imgur from "../../api/imgur";
import { useEffect, useState } from "react";


const Home =()=>{
    const [response , setResponse]= useState("")
    const navigate = useNavigate();
    const logout =async()=>{
        signOut(auth).then(() => {
            navigate('/auth')
          }).catch((error) => {
            alert("error")
          });
    }
    useEffect(()=>{
        if(response!==""){
            console.log(response)
        }
    },[response])
    const search=async()=>{
        return imgur.get("https://api.imgur.com/3/gallery/t/gaming/time/week/2")
            .then((result)=> setResponse(result.data.data.items))
            .catch((error)=>{alert(error)})
    }
    
    return(
        <>
        <img src='../../Pinterest-logo.png'></img>
        <button onClick={search}>probando logout</button>
        </>
    )
}
export default Home;