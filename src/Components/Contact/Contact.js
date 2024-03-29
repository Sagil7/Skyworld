import React from 'react'
import './Contact.css'
import emailjs, { send } from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { uavigate } from 'react-router-dom'
function Contact() {

    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l9il6dh', 'template_nptqqjd', form.current, 'uy9ODf3iwShW7SnU1')
        .then((result) => {
            console.log(result.text);
            alert("Submitted Successfully")
			navigate('/');
        }, (error) => {
            console.log(error.text);
        });
    };
   


    // const sendEmail = (e) => {
	// 	e.preventDefault();
	// 	emailjs.sendForm('service_l9il6dh', 'template_nptqqjd', e.target,
	// 		'TSeElFnBYRhX9h_ik').then(res => {
	// 			console.log(res);
	// 			alert("Submitted Successfully")
	// 			Navigate('/');
	// 		}).catch(err => {
	// 			console.log(err);
	// 		})
	// }
 

  return (
    <div>
      <section class="contact" id="contact">
        <div class="container">
            <div class="heading text-center">
                <h2>Contact
                    <span> Us </span></h2>
                <p>Connecting with us is more than just a click; it's an opportunity to turn possibilities 
                    <br/>into realities. Drop us a line, and let's weave success together.</p>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="title">
                        <h3>Contact detail</h3>
                        <p>Get in touch with us by calling, emailing, or dropping by our location. </p>
                    </div>
                    <div class="content">
                        {/* <!-- Info-1 --> */}
                        <div class="info">
                            <i class="fas fa-mobile-alt"></i>
                            <h4 class="d-inline-block">PHONE :
                                <br/>
                                <span>+91 1141076066</span></h4>
                        </div>
                        {/* <!-- Info-2 --> */}
                        <div class="info">
                            <i class="far fa-envelope"></i>
                            <h4 class="d-inline-block">EMAIL :
                                <br/>
                                <span>info@skyworld.com</span></h4>
                        </div>
                        {/* <!-- Info-3 --> */}
                        <div class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4 class="d-inline-block">ADDRESS :<br/>
                                <span>3RD FLOOR, 54-B, SARAI JULAINA New Delhi, <br />South East Delhi-110025</span></h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">

                    <form ref={form} onSubmit={sendEmail}>
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Name" name="name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="email" class="form-control" placeholder="Email" name="email"/>
                            </div>
                            <div class="col-sm-12">
                                <input type="number" class="form-control" placeholder="Phone no" name="phone"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message" name="message"></textarea>
                        </div>
                        {/* <input type="submit" value="Send" /> */}
                        <button class="btn btn-block" type="submit" value="Send">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <div>
        <h3>Location of Our Office</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.2318651734217!2d77.2691438556291!3d28.55957785434468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ed2a95b82d%3A0x161a0f1cd238b3bd!2s54%2C%20Sarai%20Jullena%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1704801728047!5m2!1sen!2sin" width="86%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15576.922511663732!2d77.59631193086413!3d12.910793021612115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16773e7dc413%3A0x350240386002607b!2sJayadeva%20Hospital!5e0!3m2!1sen!2sin!4v1704561717383!5m2!1sen!2sin" width="86%" height="600" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
    </div>
  )
}

export default Contact
