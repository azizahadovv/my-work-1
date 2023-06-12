import React from 'react';
import './SectionBodyLeft.css'
import chair from '../../Images/chair.svg'
import ustal from '../../Images/ustal.svg'
import stul from '../../Images/stul.svg'
import stulcha from '../../Images/stulcha.svg'
import ip from '../../Images/ip.svg'
import { FaStar } from 'react-icons/fa'
import LeftBody from './LeftOverBody/LeftBody';
function SectionBodyLeft(props) {
    return (
        <div className='content'>
            <div className="box">
                <div className="box-ded">
                    <h1>Products</h1>
                    <div className="line"></div>
                    <div className="box-child">
                        <div className="box-card">
                            <div className="img1">
                                <img src={chair} alt="" />
                            </div>
                            <div className="title-card">
                                <p>quis nostrud exercit
                                    ation ullamco labori
                                    s nisi ut aliquip
                                </p>
                                <div className="starts">
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                </div>
                                <div className="price-del">
                                    <del>$50.00</del>
                                    <span>$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-card">
                            <div className="img2">
                                <img src={ustal} alt="" />
                            </div>
                            <div className="title-card">
                                <p>sed quia non numq
                                    uam eius modi tem
                                    pora incidunt ut
                                </p>
                                <div className="starts">
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                </div>
                                <div className="price-del">
                                    <del>$45.00</del>
                                    <span>$35.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-card">
                            <div className="img3">
                                <img src={stulcha} alt="" />
                            </div>
                            <div className="title-card">
                                <p>illum qui dolorem eu
                                    m fugiat quo volupt
                                    as nulla
                                </p>
                                <div className="starts">
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                </div>
                                <div className="price-del">
                                    <del>$50.00</del>
                                    <span>$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-card">
                            <div className="img4">
                                <img src={stul} alt="" />
                            </div>
                            <div className="title-card">
                                <p>et quas molestias ex
                                    cepturi sint occaeca
                                    ti cupiditate
                                </p>
                                <div className="starts">
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                </div>
                                <div className="price-del">
                                    <del>$50.00</del>
                                    <span>$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-card">
                            <div className="img5">
                                <img src={ip} alt="" />
                            </div>
                            <div className="title-card">
                                <p>Quis autem vel eum
                                    iure reprehenderit q
                                    ui in ea
                                </p>
                                <div className="starts">
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                    <FaStar color='gray' />
                                </div>
                                <div className="price-del">
                                    <del>$50.00</del>
                                    <span>$40.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="img-Box">

            </div>

            <LeftBody/>
        </div>
    );
}

export default SectionBodyLeft;