import { useEffect, useState } from "react"
import "./components.css"
import axios from "axios";
import {Link} from "react-router-dom"

export const Userdata =() =>{
    const [users, setUsers]= useState([]);
  

    useEffect(()=>{
        axios.get("http://localhost:8121/posts").then(({data})=>{
            setUsers(data);
            console.log(data);
    })
        },[]);
        return (
            <div className="outerbox">
                
                {users.map((user)=>(

        <div className="innerbox" key ={user.id}>
             <img className="images" key ={user.id} src={user.image} alt="" />
             <br />
       <p> <Link style={{"textDecoration":"none","margin": "5px","color":"white","textAlign":"center"}} to={`/data/${user.id}`}>{user.id}.{" "} 
       {user.title}
       </Link>
    
       </p>
       <p>Price: <Link style={{"textDecoration":"none","margin": "5px","color":"white","textAlign":"center"}}to={`/data/${user.id}`}> 
       {" "}{user.price}
       </Link>
    
       $</p>

        </div>
        

                ))}
                
            </div>
        )

}