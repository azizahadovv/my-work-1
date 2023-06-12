import React, { useState } from 'react';
import './SectionHover.css'
import { AiFillCopy, AiFillEye, AiFillLike, AiFillStar, AiOutlineSafety } from 'react-icons/ai'
import { FaShoppingBasket } from 'react-icons/fa'
import ReturnPhoto from '../../img/2-264x347.jpg(1).svg'
import ReturnPhoto1 from '../../img//1.jpg(1).svg'
import Photo5 from '../../img/5.jpg(1).svg'
import Photo7 from '../../img/7.jpg(1).svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import BtmCard from './BottomCard/BtmCard';

function SectionHover(props) {
    const [show, setShow] = useState(false)
    const [repeadImg1, setRepeadImg1] = useState(false)
    const [repeadImg2, setRepeadImg2] = useState(false)
    const [repeadImg3, setRepeadImg3] = useState(false)
    const [repeadImg4, setRepeadImg4] = useState(false)
    const [repeadImg5, setRepeadImg5] = useState(false)
    const [repeadImg6, setRepeadImg6] = useState(false)
    const [repeadImg7, setRepeadImg7] = useState(false)
    const [repeadImg8, setRepeadImg8] = useState(false)
    const [repeadImg9, setRepeadImg9] = useState(false)
    const [repeadImg10, setRepeadImg10] = useState(false)




    return (
        <div>
            <div className="titleHover">
                <h1>New Arrival Item</h1>
                <div className="title-button">
                    <button style={{ color: show == false ? "#ffd200" : "#232121" }} onClick={() => setShow(false)}>Featured</button>
                    <button style={{ color: show == true ? "#ffd200" : "#232121" }} onClick={() => setShow(true)}>Best Seller</button>
                </div>
            </div>

            <Swiper
                className='Swipper1'
                spaceBetween={50}
                slidesPerView={1}

            >
                {/* ----------------------------------------------------------------------------- */}
                <SwiperSlide><div style={{ display: show != true ? "block" : 'none' }} className="ShowEd">
                    <Swiper
                        className='Swipper2'
                        spaceBetween={50}
                        slidesPerView={4}
                    >
                        <SwiperSlide>
                            <a onMouseLeave={() => setRepeadImg1(false)} onMouseOver={() => setRepeadImg1(true)} className="card-Hover">
                                <div className="img">
                                    <img src={repeadImg1 == true ? ReturnPhoto : ReturnPhoto1} alt="" />
                                </div>
                                <div className="title">
                                    <div className="starts">
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                    </div>
                                    <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                    <div style={{ display: repeadImg1 == false ? "block" : "none" }} className="price">
                                        <b>$40.00</b> <span>$50.00</span>
                                    </div>
                                    <div style={{ display: repeadImg1 == true ? "block" : "none" }} className="button-Page  g-3">
                                        <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a onMouseLeave={() => setRepeadImg2(false)} onMouseOver={() => setRepeadImg2(true)} className="card-Hover">
                                <div className="img">
                                    <img src={repeadImg2 == true ? ReturnPhoto : ReturnPhoto1} alt="" />
                                </div>
                                <div className="title">
                                    <div className="starts">
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                    </div>
                                    <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                    <div style={{ display: repeadImg2 == false ? "block" : "none" }} className="price">
                                        <b>$40.00</b> <span>$50.00</span>
                                    </div>
                                    <div style={{ display: repeadImg2 == true ? "block" : "none" }} className="button-Page  g-3">
                                        <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a onMouseLeave={() => setRepeadImg3(false)} onMouseOver={() => setRepeadImg3(true)} className="card-Hover">
                                <div className="img">
                                    <img src={repeadImg3 == true ? ReturnPhoto : ReturnPhoto1} alt="" />
                                </div>
                                <div className="title">
                                    <div className="starts">
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                    </div>
                                    <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                    <div style={{ display: repeadImg3 == false ? "block" : "none" }} className="price">
                                        <b>$40.00</b> <span>$50.00</span>
                                    </div>
                                    <div style={{ display: repeadImg3 == true ? "block" : "none" }} className="button-Page  g-3">
                                        <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a onMouseLeave={() => setRepeadImg4(false)} onMouseOver={() => setRepeadImg4(true)} className="card-Hover">
                                <div className="img">
                                    <img src={repeadImg4 == true ? ReturnPhoto : ReturnPhoto1} alt="" />
                                </div>
                                <div className="title">
                                    <div className="starts">
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                    </div>
                                    <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                    <div style={{ display: repeadImg4 == false ? "block" : "none" }} className="price">
                                        <b>$40.00</b> <span>$50.00</span>
                                    </div>
                                    <div style={{ display: repeadImg4 == true ? "block" : "none" }} className="button-Page  g-3">
                                        <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a onMouseLeave={() => setRepeadImg10(false)} onMouseOver={() => setRepeadImg10(true)} className="card-Hover">
                                <div className="img">
                                    <img src={repeadImg10 == true ? ReturnPhoto : ReturnPhoto1} alt="" />
                                </div>
                                <div className="title">
                                    <div className="starts">
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                        <AiFillStar color='#FFD200' />
                                    </div>
                                    <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                    <div style={{ display: repeadImg10 == false ? "block" : "none" }} className="price">
                                        <b>$40.00</b> <span>$50.00</span>
                                    </div>
                                    <div style={{ display: repeadImg10 == true ? "block" : "none" }} className="button-Page  g-3">
                                        <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                        <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div></SwiperSlide>

                {/* --------------------------------------------------------------------------------------- */}
                <SwiperSlide>
                    <div style={{ display: show == true ? 'none' : 'block' }} className="heidEd">
                        <Swiper
                            className='Swipper3'
                            spaceBetween={50}
                            slidesPerView={4}

                        >

                            <SwiperSlide>
                                <a onMouseLeave={() => setRepeadImg5(false)} onMouseOver={() => setRepeadImg5(true)} className="card-Hover">
                                    <div className="img">
                                        <img src={repeadImg5 == false ? Photo5 : Photo7} alt="" />
                                    </div>
                                    <div className="title">
                                        <div className="starts">
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                        </div>
                                        <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                        <div style={{ display: repeadImg5 == false ? "block" : "none" }} className="price">
                                            <b>$40.00</b> <span>$50.00</span>
                                        </div>
                                        <div style={{ display: repeadImg5 == true ? "block" : "none" }} className="button-Page  g-3">
                                            <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a onMouseLeave={() => setRepeadImg6(false)} onMouseOver={() => setRepeadImg6(true)} className="card-Hover">
                                    <div className="img">
                                        <img src={repeadImg6 == false ? Photo5 : Photo7} alt="" />
                                    </div>
                                    <div className="title">
                                        <div className="starts">
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                        </div>
                                        <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                        <div style={{ display: repeadImg6 == false ? "block" : "none" }} className="price">
                                            <b>$40.00</b> <span>$50.00</span>
                                        </div>
                                        <div style={{ display: repeadImg6 == true ? "block" : "none" }} className="button-Page  g-3">
                                            <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a onMouseLeave={() => setRepeadImg7(false)} onMouseOver={() => setRepeadImg7(true)} className="card-Hover">
                                    <div className="img">
                                        <img src={repeadImg7 == false ? Photo5 : Photo7} alt="" />
                                    </div>
                                    <div className="title">
                                        <div className="starts">
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                        </div>
                                        <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                        <div style={{ display: repeadImg7 == false ? "block" : "none" }} className="price">
                                            <b>$40.00</b> <span>$50.00</span>
                                        </div>
                                        <div style={{ display: repeadImg7 == true ? "block" : "none" }} className="button-Page  g-3">
                                            <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a onMouseLeave={() => setRepeadImg9(false)} onMouseOver={() => setRepeadImg9(true)} className="card-Hover">
                                    <div className="img">
                                        <img src={repeadImg9 == false ? Photo5 : Photo7} alt="" />
                                    </div>
                                    <div className="title">
                                        <div className="starts">
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                        </div>
                                        <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                        <div style={{ display: repeadImg9 == false ? "block" : "none" }} className="price">
                                            <b>$40.00</b> <span>$50.00</span>
                                        </div>
                                        <div style={{ display: repeadImg9 == true ? "block" : "none" }} className="button-Page  g-3">
                                            <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a onMouseLeave={() => setRepeadImg8(false)} onMouseOver={() => setRepeadImg8(true)} className="card-Hover">
                                    <div className="img">
                                        <img src={repeadImg8 == false ? Photo5 : Photo7} alt="" />
                                    </div>
                                    <div className="title">
                                        <div className="starts">
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                            <AiFillStar color='#FFD200' />
                                        </div>
                                        <p>quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                                        <div style={{ display: repeadImg8 == false ? "block" : "none" }} className="price">
                                            <b>$40.00</b> <span>$50.00</span>
                                        </div>
                                        <div style={{ display: repeadImg8 == true ? "block" : "none" }} className="button-Page  g-3">
                                            <button className='btn btn-outline-warning m-1'><FaShoppingBasket color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillLike color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillEye color='black' /></button>
                                            <button className='btn btn-outline-warning m-1'><AiFillCopy color='black' /></button>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </SwiperSlide>


            </Swiper>


            <BtmCard />

        </div>
    );
}

export default SectionHover;