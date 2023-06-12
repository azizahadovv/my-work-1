import React from 'react';
import './SectionBodyRigth.css'
import Card1 from '../../Images/Card1.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import SectionHover from './SectionBottomPage/SectionHover';
function SectionBodyRigth(props) {
    return (
        <div>
            <div className="bg-color-dark">
                <div className="top-Content">
                    <div className="content-Text">
                        <h1>Shop By Department</h1>
                        <span>Choose What You Looking For</span>
                    </div>
                    <div className="button-page">
                        <button disabled>< AiOutlineLeft className='AiOutlineLeft' color='#fff' /></button>
                        <button disabled><AiOutlineRight className='AiOutlineRight' color='#fff' /></button>
                    </div>
                </div>
                <div className="bottom-Content">
                    <Swiper
                         modules={[Navigation, Pagination, Scrollbar, A11y]}
                         spaceBetween={50}
                         slidesPerView={6}
                    >
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>
                        <SwiperSlide> <label className="button-Ded"><button className='buttonCha'><img src={Card1} alt="#" /></button><p className='ded-p'>Accessories</p></label></SwiperSlide>



                    </Swiper>
                </div>
            </div>

            <div className="section2">
                <div className="card1">
                    <div className="top">
                        <h1>Hanna Chairs</h1>
                        <p>Convenience, Lifelong Available <br />Refund Guarantee...</p>
                    </div>
                    <div className="buttonShow">
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="card2">
                    <div className="top">
                        <h1>Hanna Chairs</h1>
                        <p>Convenience, Lifelong Available <br />Refund Guarantee...</p>
                    </div>
                    <div className="buttonShow">
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
            <SectionHover/>
        </div>
    );
}

export default SectionBodyRigth;