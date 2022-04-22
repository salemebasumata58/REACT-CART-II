import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../components/contexts/Authcontext";


export const PrivateComponent = ({children}) =>{
    const {handleAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    
    return <div>Login
        <button button onClick={()=>{
            handleAuth(true);
            navigate(-2,{replace:false})
        }}>submit</button>
        </div>
   
};