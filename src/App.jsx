
import './App.css'


import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import { FaFacebook, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";
import { SiGodaddy } from "react-icons/si";

import { useEffect } from 'react';








function App() {
  
  
  const images = [
    { original: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655",
    thumbnail: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655" },
    { original: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:984,h:656",
      thumbnail: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:984,h:656" },
    { original: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:984,h:656",
      thumbnail: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:984,h:656" },
    { original: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655",
      thumbnail: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655"
     },
    { original: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:984,h:655",
      thumbnail: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:984,h:655"
     },
    { original: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:984,h:655",
      thumbnail: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:984,h:655"
     },
    { original: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:984,h:655",
      thumbnail: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:984,h:655"
     }
  ];


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  const gisElements = document.querySelectorAll(".box-GIS");
  gisElements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);

  
  return (
    <>
      <header>
        <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95" alt="" />
      </header>

    <div className="overlay-PR">
      <div className="bgPR"/>
      <div className="container-PR">
        <span>MARCI METZGER - THE RIDGE REALTY GROUP</span>
        <h1>PAHRUMP REALTOR</h1>
        <button>CALL NOW</button>
      </div>
    </div>

      <div className="container-MM">
        <div className="contain-MM-forAnim">

        <span>MARCI METZGER</span>
        <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true" alt="" />
        <h4>REALTOR FOR NEARLY 3 DECADES!</h4>
        <p>206-919-6886</p>
      </div>
      </div>



      <div className="container-GIS">
        <div className="getitsold"><span>GET IT SOLD</span></div>
        <div className="container-flex-GIS">
          <div className="box-GIS boxGIS">
            <img src="https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true"/>

          </div>
          <div className="box-GIS boxGIS">
            <h4>Top Residential Sales Last 5 Years</h4>

            <span>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! 
            Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</span>
            
          </div>
          <div className="box-GIS boxGIS">
            <h4>Dont Just List It...</h4>

            <span>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</span>
            
          </div>


          <div className="box-GIS boxGIS">
            <img src="https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"/>

          </div>

          <div className="box-GIS boxGIS">
            <img src="https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m"/>

          </div>

          <div className="box-GIS boxGIS">
            <h4>Guide to Buyers</h4>

            <span>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</span>
            
          </div>


        </div>
      
      </div>

      <div className="bgFYD">
        <div className="overlayFYD">
          <div className="container-FYD">
            <div className="search-container">
              <h2 className="search-title">Search Listings</h2>
              <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <div className="select-wrapper">
                      <select className="form-select">
                        <option value="">Select Location</option>
                        <option value="ny">New York</option>
                        <option value="la">Los Angeles</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Type</label>
                    <div className="select-wrapper">
                      <select className="form-select">
                        <option value="">Select Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Sort By</label>
                    <div className="select-wrapper">
                      <select className="form-select">
                        <option value="newest">Newest First</option>
                        <option value="price_asc">Price: Low to High</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bottom-row">
                  <div className="compact-grid">
                    <div className="form-group">
                      <label className="form-label">Bedrooms</label>
                      <div className="select-wrapper">
                        <select className="form-select"><option value="">Any</option></select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Baths</label>
                      <div className="select-wrapper">
                        <select className="form-select"><option value="">Any</option></select>
                      </div>
                    </div>
                  </div>
                  <div className="compact-grid">
                    <div className="form-group">
                      <label className="form-label">Min Price</label>
                      <input type="number" className="form-input" placeholder="0" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Max Price</label>
                      <input type="number" className="form-input" placeholder="No Max" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="search-button">Search Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    <div className="container-SPN">

        <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100" alt="" />
        <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100,h:100,cg:true" alt="" />
        <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:112,h:100,cg:true" alt="" />
        <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100" alt="" />
    </div>

      <div className="container-photogallery">
        <span>Photo Gallery</span>
        <ImageGallery items={images}
        thumbnailPosition='bottom'
        autoPlay={true}
        slideInterval={2500}
        />
      </div>
    
      <div className="container-OSer">
        <span>Our Services</span>
      <div className="Oser-contentflex">
        
        <div className="box-Oser">
          <img src="https://img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" alt="" />
          <h4>Real Estate Done Right</h4>
          <p>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
        </div>
        <div className="box-Oser">
          <img src="https://img1.wsimg.com/isteam/stock/43920/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" alt="" />
          <h4>Commercial & Residential</h4>
          <p>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
        </div>
        <div className="box-Oser">
          <img src="https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" alt="" style={{borderRadius:'50%'}}/>
          <h4>Rely on Expertise</h4>
          <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
        </div>                          
      </div>
      </div>

      <div className="container-socials">
        <div className="icontainer">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYelp />


        </div>
      </div>

 <div className="container-callUs-wrapper">
      <div className="container-callUs">
        <h2 className="main-header">CALL OR VISIT</h2>
        
        <div className="content-grid">
          {/* LEFT FORM */}
          <div className="container-message">
            <h4>Send Message</h4>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="text-message"
              />
              <input
                type="email"
                placeholder="Email*"
                className="text-message"
              />
              <textarea
                placeholder="Message"
                className="message-area"
              ></textarea>
              <button type="submit" className="send-btn">SEND</button>
            </form>
            <p className="recaptcha-text">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
          {/* RIGHT DETAILS */}
          <div className="container-details">
            <button className="whatsapp-btn">
              <span className="whatsapp-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              Message us on WhatsApp
            </button>
            <h4 className="realty-group-title">Marci Metzger - THE RIDGE REALTY GROUP</h4>
            <p className="address">
              3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
            </p>
            <a href="tel:12069196886" className="phone-link">(206) 919-6886</a>
            <h4 className="office-title">Office Hours</h4>
            <div className="office-hours">
              <p>Open today <span>08:00 am – 07:00 pm</span></p>
              <p>Open daily <span>08:00 am – 07:00 pm</span></p>
            </div>
            <span className="office-note">
              Appointments outside office hours available upon request. Just call!
            </span>
          </div>
        </div>
      </div>
    </div>


<div className="map-container">
  <iframe
    title="Pinned Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2846222672188!2d-115.95816073955389!3d36.18395920802738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639a25ba6af0f%3A0x5c7351dde0fbb39a!2sMarci%20Metzger%20-%20THE%20RIDGE%20REALTY%20GROUP%20-%20B1002787!5e0!3m2!1sen!2sph!4v1768411363411!5m2!1sen!2sph"
    loading="lazy"
  ></iframe>
</div>





   

      <footer>
          <div className="container-socials">
        <div className="icontainer">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYelp />
        </div>
        <p className="copyright">COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED demo website created by Joshua Abalos</p>
        <div className="footer-divider"></div>
        <div className="powered-by">
          <p>POWERED BY</p>
          <div className="godaddy-logo">
            <SiGodaddy /> GoDaddy Airo
          </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default App
