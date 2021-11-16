import {signOut} from "firebase/auth"
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom"
const Home =()=>{
    const navigate = useNavigate();
    const logout =async()=>{
        signOut(auth).then(() => {
            navigate('/auth')
          }).catch((error) => {
            alert("error")
          });
    }
    return(
        <>
        <h1>HOLA HOME</h1>
        <button onClick={logout}>probando logout</button>
        </>
    )
}
export default Home;