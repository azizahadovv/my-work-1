import './second.css'
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
///*  */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
/*  */

import LeftBanner from '../TheImg/left-banner.jpg.svg'

function Second(props) {
    const [slider, SetSlider] = useState(false)


    return (
        <div className='mt-5 mb-5'>
            <div className="diver">
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





            <div className="SecondImg">
                <img src={LeftBanner} alt="" />
            </div>
        </div>
    );
}

export default Second;