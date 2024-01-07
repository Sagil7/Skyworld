import React from 'react'
import './Headingimage.css'
// import '../../../image/woman.png'
// const image = require('../../../image/Mentor.jpg')
function Headingimage(props){
    const mystyle = {
        backgroundImage: `url(${props.cardimg})`,    
        backgroundRepeat  :'no-repeat',
        width: "100%",
        height:" 370px",
        backgroundSize: 'cover',
        display: "flex"
     
      };
      
  return ( 
   <>
   <div style={mystyle} >
    <div className="Texts" align="left"> 
     {/* <img src={cardimage} alt="" /> */}
        <div className="Title"> 
          <h1> {props.Title}</h1>
        </div>
        <div className="para">
          <p>{props.story}</p>
        </div>
    </div>

   </div>
   </>
  )
}

export default Headingimage
