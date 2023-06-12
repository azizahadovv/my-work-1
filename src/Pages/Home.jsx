import React, { useState } from 'react';
import Logo from './Images/logo.png.svg'
import Lupa from './Images/lupa.svg'
import Hamburger from './Images/hamburgersMenu.svg'
import Backed from './Images/backed.svg'
import { FaGift, FaPeriscope } from 'react-icons/fa'
import './Home.css'
import LeftStrel from './Images/leftStrelka.svg'
import LeftStr from './Images/Vector.svg'
import bottomStr from './Images/bottomStr.svg'
import SectionHome from './Section-1/Section-Home';


function Home(props) {
    const [openCategory, SetOpenCategory] = useState(true)

    function ShowCategory() {
        if (openCategory) {
            SetOpenCategory(false)
        } else {
            SetOpenCategory(true)
        }
    }
    return (
        <>
            <div style={{ backgroundColor: "#FFD200" }}>
                <div style={{ backgroundColor: "#FFD200", margin: '0 auto' }}>
                    <div className='container-Navbar'>
                        <div className="Navbar-Home">
                            <div className="top-Navbar">
                                <img src={Logo} alt="#" />
                                <ul>
                                    <li><button className='btn'>Home</button></li>
                                    <li><button className='btn'>Shop</button></li>
                                    <li><button className='btn'>Media</button></li>
                                    <li><button className='btn'>ShortCode</button></li>
                                    <li><button className='btn'>Features</button></li>
                                    <li><button className='btn'>About Us</button></li>
                                    <li><button className='btn'>Contact Us</button></li>
                                    <li><button className='btn'>Offer Zone</button></li>
                                    <li><button className='btn'>Blog</button></li>
                                </ul>
                                <label className="prise">
                                    <button className='btn'><FaGift />New User Zone</button>
                                </label>
                            </div>
                            <div className="bottom-Navbar">
                                <button onClick={ShowCategory} className="btn-for-category">
                                    <img src={Hamburger} alt="" />
                                    <label ><span>shop by <br /> <b>Categories</b></span> </label>
                                </button>
                                <div style={{ display: openCategory ? "block" : "none" }} className="modal-OpenCategory">
                                    <button ><img src={LeftStrel} alt="#" /> <span>Accessories</span> <img src={LeftStr} alt="" /></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Appliances</span> <button></button> </button>
                                    <button ><img src={LeftStrel} alt="#" />  <span>Bags</span> <button></button></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Electronic</span> <button></button></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Entertainment</span> <button></button></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Induction</span><button></button> </button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Luggages</span> <button></button></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Mobile Phone</span> <button></button></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Packaging & Printing</span> <button></button></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>Sofa</span> <button></button></button>
                                    <button ><img src={LeftStrel} alt="#" /> <span>More</span> <img src={bottomStr} alt="#" /></button>
                                </div>
                                <div className="input-groupNaV ">
                                    <select aria-label="size 4 select example" id="inputGroupSelect02">
                                        <option value={""} >Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <input className='input' type="text" placeholder='Search Products…' />
                                    <button className="input-group-text" for="inputGroupSelect02">
                                        <img src={Lupa} alt="" />
                                    </button>
                                </div>
                                <div className="log-Page-admin">
                                    <button className='log-in-btn'>
                                        <span>Sign-In <br /> <b>My Account </b></span>

                                    </button>

                                    <button className='userCard-One'>
                                        <label className='userCard'>
                                            <img className='backed' src={Backed} alt="" />
                                            <div className='totalPrice'>
                                                <span>my Card</span>
                                                <b>$0.00</b>
                                            </div>
                                        </label>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SectionHome />
                </div>

            </div>

        </>
    );
}

export default Home;