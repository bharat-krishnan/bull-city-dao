import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import {Box} from '@mui/material'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


import { styled } from '@mui/system';


const  SponsorBar = ({Logos, numItems}) => {

    const SponsorBox = styled(Box)({
        display: 'flex',
        maxWidth: 500,
        maxHeight: 500,
        padding: 20,
        paddingLeft: 100,
        paddingRight: 100,
        justifyContent: 'center',
        backgroundColor: '#EEE',
        color: "#000",
        borderRadius: 30,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 5,

    })

    return (
        <Box>

        <Swiper
            spaceBetween={30}
            slidesPerView={numItems}
            loop={true}
            autoplay={
            {   delay: 1000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                stopOnLastSlide: false
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >  
        
        {Logos.map( 
            (logo, i) => {
                return (
                    
                <SwiperSlide key = {i}>
                    <SponsorBox>
                        <img alt = 'sponsor' src = {logo} width = '175'/>
                    </SponsorBox>
                </SwiperSlide>
                )
            }
        )}

        </Swiper>
        </Box>
    )


}

export default SponsorBar