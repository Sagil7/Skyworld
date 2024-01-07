import React from 'react'
import './Topbar.css'
function Topbar() {
  return (
    <>
    <div className="topbar"> 
   <div className="email">
   <i className="fa-solid fa-envelope"></i>skyworld@gmail.com   
   </div>
   <div className="phone">
   <i className="fa-solid fa-phone"></i>123456789
   </div>
   <div className="socialmedia">
     <a href="https://twitter.com/MAANOF22" target="_blank"><i className="fa-brands fa-twitter" id="twiter"></i></a>
     <a href="https://www.facebook.com/profile.php?id=100088649441827"  target="_blank"><i className="fa-brands fa-facebook-f" id="facebook"></i></a>
     <a href="https://www.instagram.com/maanoffederation/"  target="_blank" ><i className="fa-brands fa-instagram" id="insta"></i></a>
     <a href="https://www.youtube.com/channel/UC25RXBGG9Qp22sLnO6jS5ug"  target="_blank" ><i className="fa-brands fa-youtube" id="youtube"></i></a>
     <a href="https://www.linkedin.com/company/maanof-federation/?viewAsMember=true"  target="_blank"><i className="fa-brands fa-linkedin-in" id="linkdin"></i></a>
   </div>
    </div>
    </>
  )
}

export default Topbar
