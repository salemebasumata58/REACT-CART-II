import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./components.css"


export const UserDetails =()=>{
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8121/posts/${id}`).then(({data})=>{
            setUser(data);
            console.log("data", data)
        })
    },[]);
    return (
        <div className="div1">
        <img className="image" src={user.image} alt="" />
        <p className="details"> Title: {user.title}</p>
        <p className="details">By Age: {user.byAge}</p>
        <p className="details">Price: {user.price}$</p>
        <button style={{"marginBottom":"5px"}}>Add to Cart</button>
        </div>
    )
}