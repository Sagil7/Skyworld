import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="container">
            <div class="heading text-center">
                <h2>Contact
                    <span> Us </span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br/>incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="title">
                        <h3>Contact detail</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                    <div class="content">
                        {/* <!-- Info-1 --> */}
                        <div class="info">
                            <i class="fas fa-mobile-alt"></i>
                            <h4 class="d-inline-block">PHONE :
                                <br/>
                                <span>+12457836913 , +12457836913</span></h4>
                        </div>
                        {/* <!-- Info-2 --> */}
                        <div class="info">
                            <i class="far fa-envelope"></i>
                            <h4 class="d-inline-block">EMAIL :
                                <br/>
                                <span>example@info.com</span></h4>
                        </div>
                        {/* <!-- Info-3 --> */}
                        <div class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4 class="d-inline-block">ADDRESS :<br/>
                                <span>6743 last street , Abcd, Xyz</span></h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">

                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="email" class="form-control" placeholder="Email"/>
                            </div>
                            <div class="col-sm-12">
                                <input type="text" class="form-control" placeholder="Subject"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                        <button class="btn btn-block" type="submit">Send Now!</button>
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
