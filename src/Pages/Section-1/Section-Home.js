import React from 'react';
import Bacground from '../Images/bacground.svg'
import './SectionHome.css'
import SectionBodyLeft from './SectionBodyLeft/SectionBodyLeft';
import SectionBodyRigth from './SectionBodyRigth/SectionBodyRigth';
import Footer from '../Footer/Footer';


function SectionHome(props) {
    return (
        <div>
            <div className="sectionHome">
                <div className='sectionHome2'>
                     <span>
                    <span>Festival Offer Available</span>
                    <h1>Upto 40% Flate</h1>
                </span>
                    <div id="slider">
                        <figure>
                            <img src={Bacground} />
                            <img src={Bacground} />
                            <img src={Bacground} />
                            <img src={Bacground} />
                        </figure>
                    </div>
                </div>
               
                



                <div style={{ maxWidth: '1920px', margin: '0 auto' }} className="sections">
                    <SectionBodyLeft />
                    <SectionBodyRigth />

                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>




        </div>
    );
}

export default SectionHome;