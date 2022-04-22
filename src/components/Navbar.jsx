import {Link} from "react-router-dom";
export const Navbar =()=>{
    const nav = [
        {title : "Home", to :"/home"},
        {title : "About Us", to :"/about"},
        {title : "Products", to :"/products"},

    ];
    return (
        <div style={{"display":"flex","height": "40px", "background":"teal","textAlign" :"center","color":"white", "paddingTop":"10px"}}>
           {/* <a href="/">Home</a>
           <a href="/about">About</a> */}
          
            { nav.map((e, i)=> (
               <Link style={{"margin": "5px","color":"white","textAlign":"center"}} key={i} to= {e.to} >
                   {e.title}
               </Link> 
            ))}

       </div>
    )
}