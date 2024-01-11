import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
       {/* <section>Footer Example 4</section> */}
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Sky<span>World</span></h3>

				<p class="footer-links">
					<Link to="/" class="link-1">Home</Link>
					
					<Link to="/about">About</Link>
				
					<Link to="/services">Services</Link>
					<Link to='/contact'> Contact </Link>

				
				
				</p>

				<p class="footer-company-name">Sky World © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>3RD FLOOR, 54-B, SARAI JULAINA</span> New Delhi, South East Delhi-110025</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 1141076066</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:info@skyworld.com">info@skyworld.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About Us</span>
					Skyworld Recruitment, a registered and well-reputed recruitment agency in India.Registered under the Ministry of Ministry of External Affairs, India (License No.618). 	</p>

				<div class="footer-icons">

					<a href="https://www.facebook.com/profile.php?id=61554521030244&mibextid=ZbWKwL"><i class="fa fa-facebook"></i></a>
					<a href="https://www.instagram.com/skyworld5376?igsh=aW85eHAyOG53d2Zn"><i class="fa fa-instagram"></i></a>
					<a href="https://www.facebook.com/profile.php?id=61554521030244&mibextid=ZbWKwL"><i class="fa fa-linkedin"></i></a>

				</div>

			</div>

		</footer>
    </div>
  )
}

export default Footer
