import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './LeftBodt.css'
///*  */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Second from './SectionSecond/Second';
/*  */


function LeftBody(props) {
    const [slider, SetSlider] = useState(false)
    return (
        <div>
            <div className="ForTheBlog">
                <div className="The-blog-title">
                    <h1>Form The Blog</h1>
                    <span>
                        <button onClick={() => { SetSlider(true) }}><AiOutlineLeft /></button>
                        <button onClick={() => { SetSlider(true) }}><AiOutlineRight /></button>
                    </span>
                </div>
                <div className="line"></div>

                <div className="boxThe-Title ">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => SetSlider(true)}
                    >
                        <SwiperSlide><div className="TheContent">
                            <div className="theImg">

                            </div>
                            <h1>My Style  in my life</h1>
                            <p>4th January,2017</p>
                            <span>At vero eos et accusamus et
                                iusto odio dignissimos
                                ducimus qui blanditiis
                                praesentium voluptatum</span>


                        </div></SwiperSlide>
                        <SwiperSlide><div className="TheContent">
                            <div className="theImg2">

                            </div>
                            <h1>My Style  in my life</h1>
                            <p>4th January,2017</p>
                            <span>At vero eos et accusamus et
                                iusto odio dignissimos
                                ducimus qui blanditiis
                                praesentium voluptatum</span>


                        </div></SwiperSlide>
                        <SwiperSlide><div className="TheContent">
                            <div className="theImg3">

                            </div>
                            <h1>My Style  in my life</h1>
                            <p>4th January,2017</p>
                            <span>At vero eos et accusamus et
                                iusto odio dignissimos
                                ducimus qui blanditiis
                                praesentium voluptatum</span>


                        </div></SwiperSlide>
                        <SwiperSlide><div className="TheContent">
                            <div className="theImg4">

                            </div>
                            <h1>My Style  in my life</h1>
                            <p>4th January,2017</p>
                            <span>At vero eos et accusamus et
                                iusto odio dignissimos
                                ducimus qui blanditiis
                                praesentium voluptatum</span>


                        </div></SwiperSlide>
                    </Swiper>

                </div>


            </div>
            <div className="TheButtonLog">
                <div className="The-blog-title">
                    <h1 className='mt-2'>Popular Tags</h1>
                    <span>
                        <button disabled onClick={() => { SetSlider(true) }}><AiOutlineLeft /></button>
                        <button disabled onClick={() => { SetSlider(true) }}><AiOutlineRight /></button>
                    </span>
                </div>
                <div className="line"></div>
                <div className="TheButtonsResponse">
                    <a href="#">Electronic Cigarettes</a>
                    <a href="#">Eye Makeup</a>
                    <a href="#">iPad Cases</a>
                    <a href="#">Lingerie</a>
                    <a href="#">RC Helicopters</a>
                    <a href="#">Summer</a>
                    <a href="#">Tattoo Kits</a>
                    <a href="#">Tattoo Supplies</a>
                </div>
            </div>


            <a style={{ color: "#000", textDecoration: 'none' }} href="#"><p style={{ cursor: "pointer" }}>Left banner</p></a>
            <Second />
        </div>
    );
}

export default LeftBody;