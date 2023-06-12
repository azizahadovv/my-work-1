import React from 'react';
import './BtmCard.css'
import { AiFillStar } from 'react-icons/ai'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Img1 from '../../img/14.jpg.svg'
import Img2 from '../../img/3.jpg.svg'
import Img3 from '../../img/1.jpg(1).svg'
import SectionBodyRigth from '../../../../SectionBodyRigth';

function BtmCard(props) {
    return (
        <div className='heder'>

            <div className="title-Card-top">
                <h1 style={{ width: "250px" }}>New Arrival Products</h1>
            </div>
            <div className="title-Card-bottom">
                <Swiper
                    className='Swipper12'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}

                    slidesPerView={2}
                >
                    <SwiperSlide>
                        <div className="cards">
                            <div className="img_card">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide><img className='img_width' src={Img1} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img2} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img1} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img3} alt="#" /></SwiperSlide>
                                </Swiper>

                            </div>
                            <div className="title-cards">
                                <h1>quis nostrum exercitationem ull</h1>
                                <div className="img-Starts">
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                </div>
                                <div className="prise-title">
                                    <b>$45.00</b> <del>$60.00</del>
                                </div>
                                <p>
                                    Paragraph text Nam tristique porta <br />
                                    ligula, vel viverra sem eleifend.
                                </p>
                                <div className="Moth-day-Interval">
                                    <span> <b>104 <br /></b> <span>Day</span></span>
                                    <span> <b>12 <br /></b> <span>Hour</span></span>
                                    <span> <b>26 <br /></b> <span>Min</span></span>
                                    <span> <b>10 <br /></b> <span>Secs</span></span>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <div className="img_card">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide><img className='img_width' src={Img3} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img2} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img1} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img1} alt="#" /></SwiperSlide>
                                </Swiper>

                            </div>
                            <div className="title-cards">
                                <h1>quis nostrum exercitationem ull</h1>
                                <div className="img-Starts">
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                </div>
                                <div className="prise-title">
                                    <b>$45.00</b> <del>$60.00</del>
                                </div>
                                <p>
                                    Paragraph text Nam tristique porta <br />
                                    ligula, vel viverra sem eleifend.
                                </p>
                                <div className="Moth-day-Interval">
                                    <span> <b>104 <br /></b> <span>Day</span></span>
                                    <span> <b>12 <br /></b> <span>Hour</span></span>
                                    <span> <b>26 <br /></b> <span>Min</span></span>
                                    <span> <b>10 <br /></b> <span>Secs</span></span>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <div className="img_card">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide><img className='img_width' src={Img3} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img2} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img1} alt="#" /></SwiperSlide>
                                    <SwiperSlide><img className='img_width' src={Img2} alt="#" /></SwiperSlide>
                                </Swiper>

                            </div>
                            <div className="title-cards">
                                <h1>quis nostrum exercitationem ull</h1>
                                <div className="img-Starts">
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                    <AiFillStar color='#FFD200' />
                                </div>
                                <div className="prise-title">
                                    <b>$45.00</b> <del>$60.00</del>
                                </div>
                                <p>
                                    Paragraph text Nam tristique porta <br />
                                    ligula, vel viverra sem eleifend.
                                </p>
                                <div className="Moth-day-Interval">
                                    <span> <b>104 <br /></b> <span>Day</span></span>
                                    <span> <b>12 <br /></b> <span>Hour</span></span>
                                    <span> <b>26 <br /></b> <span>Min</span></span>
                                    <span> <b>10 <br /></b> <span>Secs</span></span>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>


            </div>


        </div>
    );
}

export default BtmCard;