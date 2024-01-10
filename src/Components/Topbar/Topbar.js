import React from 'react'
import './Topbar.css'
function Topbar() {
  return (
    <>
    <div className="topbar"> 
   <div className="email">
   <i className="fa-solid fa-envelope"></i>tradersexport9@gmail.com 
   </div>
   <div className="phone">
   <i className="fa-solid fa-phone"></i>8800435737
   </div>
   <div className="socialmedia">
     <a href="https://www.facebook.com/profile.php?id=61554521030244&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-twitter" id="twiter"></i></a>
     <a href="https://www.facebook.com/profile.php?id=61554521030244&mibextid=ZbWKwL"  target="_blank"><i className="fa-brands fa-facebook-f" id="facebook"></i></a>
     <a href="https://www.instagram.com/skyworld5376?igsh=aW85eHAyOG53d2Zn"  target="_blank" ><i className="fa-brands fa-instagram" id="insta"></i></a>
     <a href="https://www.facebook.com/profile.php?id=61554521030244&mibextid=ZbWKwL"  target="_blank"><i className="fa-brands fa-linkedin-in" id="linkdin"></i></a>
   </div>
    </div>
    </>
  )
}

export default Topbar
