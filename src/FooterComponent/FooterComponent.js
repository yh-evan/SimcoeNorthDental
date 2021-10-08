import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./FooterComponent.css";

function FooterComponent () {
    return (
        <div className= "FooterComponent-main">
        
               
                    {/* Colum1 */}
                    <div className="FooterComponent-service">
                        <h2>Service</h2>
                        <a href="#Home" target="_blank">Fillings</a>
                        <a href="#Home" target="_blank">Extractions</a>
                        <a href="#Home" target="_blank">Sedation</a>
                        <a href="#Home" target="_blank">Dental emergencies</a>
                    </div>
                    {/* Colum2 */}
                    <div className="FooterComponent-Practice">
                    <h2>Practice</h2>
                     <a className="pratice" href="#Home" target="_blank">Home</a>
                     <a className="pratice" href="#About" target="_blank">About</a>
                     <a  className="pratice" href="#Patients" target="_blank">New Patients</a>
                     <a  className="pratice" href="#Contact" target="_blank">Contact Us</a>
                    </div>
                    {/* Colum3 */}
                    <div className="FooterComponent-Office">
                        <h2>Office</h2>
                        <p>Call or text:</p>
                        <p>(913)_491_6663</p>
                        <a href="https://www.google.com/maps"
                    id="googlemaps">Get Driection</a>
                    <p >Ontario, Scarborough, Steeles Avenue East </p>
                        </div>
                    {/* Colum4 */}
                    <div className="FooterComponent-review">
                        <h2>Review US</h2>
                        
                        <a href="https://www.google.com/"
                    id="googlesearch">Google</a>
                      <a href="https://www.facebook.com//"
                    id="facebookSocial">Facebook</a>

                        </div>
                    {/* Colum5 */}
                    <div className="FooterComponent-Social">
                        <h2>Social</h2>
                <a className="icon" href="https://www.youtube.com/"
                    id="youtubeSocial">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a  className="icon" href="https://www.facebook.com/"
                    id="facebookSocial">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a  className="icon" href="https://www.twitter.com/" >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a className="icon" href="https://www.instagram.com/"
                    id="instagramSocial">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                </div>

                </div>
        
    );
}

export default FooterComponent;