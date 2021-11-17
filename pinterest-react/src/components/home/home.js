import {signOut} from "firebase/auth"
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom"
import imgur from "../../api/imgur";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { IoArrowRedoSharp} from 'react-icons/io5';
import { AiOutlineLogout} from 'react-icons/ai';
import './home.scss'
import ModalImage from "react-modal-image";


const Home =()=>{
    const [response , setResponse]= useState([])
    const navigate = useNavigate();
    const [loader, setLoader]=useState(false)
    const [display, setDisplay]=useState("none")
    const [arrImg, setArrImg]=useState([])
    const [showImages, setShowImages]=useState([])
    let images=[]
    let imagesHome=[]
    var img=[]
    let arrayLinkImages=[];
    let showHome=[];
    var showHomeImg=[];
    const [tag, setTag]= useState("")
    const logout =async()=>{
        signOut(auth).then(() => {
            navigate('/auth')
          }).catch((error) => {
            alert("error")
          });
    }
    useEffect(()=>{
        setLoader(true)
        imgur.get(`https://api.imgur.com/3/gallery/t/makeup/time/year/12`)
        .then((result)=> {
            setResponse(result.data.data.items)
            setLoader(false)
        })
        .catch((error)=>{alert(error)})
    },[])
    useEffect(()=>{
        if(loader){
            setDisplay("block")
        }else{
            setDisplay("none")
        }
    })

    useEffect(()=>{
        if(response!==null){
            arrayLinkImages= response.map(function(obj){
                return obj.images
            })
            img=arrayLinkImages.map(function(obj){
                if(obj!==undefined){
                    obj.map(function(lk){
                        images= lk.link
                        return images
                    })
                }
                return images
            })
        }
        setArrImg(img)
    },[response])
    const handleChange = (e) => {
        setTag(e.target.value)
    };
    const search=async()=>{
        setLoader(true)
        return imgur.get(`https://api.imgur.com/3/gallery/t/${tag}/time/month/2`)
            .then((result)=> {
                setResponse(result.data.data.items)
                setLoader(false)
            })
            .catch((error)=>{alert(error)})
    }
    if(loader){
        return(
            <>
            <div className="row-home">
                <div className="col-2">
                    <img className="img-logo" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'></img>
                    <button className="logout-button" onClick={logout}><AiOutlineLogout className="icon-logout"/></button>
                </div>
                <div className="col-10">
                    <div className="center">
                        <input className="search-input" placeholder="Search" onChange={handleChange} name="tag"></input><button className="send-button" onClick={search}><IoArrowRedoSharp/></button>
                    </div>
                    <div className="div-load">
                        <ClipLoader color={'#EF5350'} loading={loader} size={150} />
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return(
            <>
            <div className="row-home">
                <div className="col-2">
                    <img className="img-logo" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'></img>
                    <button className="logout-button" onClick={logout}><AiOutlineLogout className="icon-logout"/></button>
                </div>
                <div className="col-10">
                    <div className="center">
                        <input className="search-input" placeholder="Search" onChange={handleChange} name="tag"></input><button className="send-button" onClick={search}><IoArrowRedoSharp/></button>
                    </div>
                    <div className="div-img">
                        {
                            arrImg.length!==0 && arrImg.map(function(x,index){
                                return(
                                    // <img src={x} className="grid-img" key={index}></img>
                                    <div className="row-i">
                                    <ModalImage
                                    small={x}
                                    large={x}
                                    className="grid-img"
                                    />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Home;