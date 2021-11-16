import {signOut} from "firebase/auth"
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom"
import imgur from "../../api/imgur";


const Home =()=>{
    const navigate = useNavigate();
    const logout =async()=>{
        signOut(auth).then(() => {
            navigate('/auth')
          }).catch((error) => {
            alert("error")
          });
    }
    const search=()=>{
        return imgur.get("https://api.imgur.com/3/gallery/t/gaming/time/week/2")
    }
    return(
        <>
        <h1>HOLA HOME</h1>
        <button onClick={search}>probando logout</button>
        </>
    )
}
export default Home;