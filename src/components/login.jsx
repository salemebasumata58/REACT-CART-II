import { AuthContext } from "./contexts/Authcontext"
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
export const Login = () =>{

   const {handleAuth} = useContext(AuthContext);
   const navigate = useNavigate();
   
    return (
        <div>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="password"/>
            <button 
            onClick={()=>{
                handleAuth(true);
                navigate(-2, { replace:true });
            }}
            >submit</button>
        </div>
    )
}