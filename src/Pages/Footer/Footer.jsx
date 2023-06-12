import React from 'react';
import './footer.css'
import 'react-icons/fa'
import 'react-icons/ai'
import { FaAirbnb, FaAudioDescription, FaHeadphones, FaHeadphonesAlt, FaLocationArrow, FaMicrophone, FaMicrophoneAlt, FaShare, FaSubscript, FaSubway, FaTelegram } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
function Footer(props) {
    return (
        <>
            <div style={{ backgroundColor: "#040605", width: '100%', minHeight: "400px" }}>
                <div style={{  maxWidth: '1620px', minHeight: "400px", margin: '0 auto' }}>

                    <div className="Top-Footer">
                        <div className="top-footer-left">
                            <div className="help-footer">
                                <div className="help">
                                    <h2>Help</h2>
                                    <ul>
                                        <li><a href="#">Payments</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Cancellation</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li style={{ minWidth: '150px' }}><a href="#">Report Infringement</a></li>
                                    </ul>
                                </div>
                                <div className="help">
                                    <h2>Policy</h2>
                                    <ul>
                                        <li style={{ minWidth: '100px' }}><a href="#">Return Policy</a></li>
                                        <li style={{ minWidth: '100px' }}><a href="#">Terms Of Use</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                    </ul>
                                </div>
                                <div className="help">
                                    <h2>About</h2>
                                    <ul>
                                        <li><a href='#'>Contact Us</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li style={{ minWidth: '190px' }}><a href="#">Flipkart Stories</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="line"> </div>
                            <div className="contact_us">
                                <div className="help-us">
                                    <h2>Contact Us</h2>
                                    <ul>
                                        <li><a href="#"> <FaLocationArrow /> 60, 29th Street, San Francisco, CA <br />
                                            94110, United States of America</a></li>
                                        <li><a href="#"><FaHeadphonesAlt /> (+00) 123-456-789</a></li>
                                        <li><a href="aziz.ahadovv@yandex.ru"><AiFillMail /> aziz.ahadovv@yandex.ru</a></li>
                                    </ul>
                                </div>
                                <div className="help-us">
                                    <h2>Subscribe Now</h2>
                                    <ul>
                                        <li className='SUBSCribe mt-2'><a href="#"> Subscribe to our newsletterget 10% off your
                                            first purchase at here for update.</a></li>
                                        <label className='label-us'>
                                            <input placeholder='Send me message' type="text" />
                                            <button><FaShare /></button>
                                        </label>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="Bottom-Footer">
                            <div className="left-bottom-1">
                                <ul>
                                    <li><a style={{textDecoration:'none'}} href="#">Specials</a></li>
                                    <li><a style={{textDecoration:'none'}} href="#">Affiliates</a></li>
                                    <li><a style={{textDecoration:'none'}} href="#">Special Discount</a></li>
                                    <li><a style={{textDecoration:'none'}} href="#">Brands</a></li>
                                </ul>
                            </div>
                            <div className="left-bottom-2">
                                <li>Copyright © 2023 Templatemela</li>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
        </>
    );
}

export default Footer;