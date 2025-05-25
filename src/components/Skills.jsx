import React, { useRef, useState } from "react";
// State
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import one from "./photos/one.jpeg";
// import required modules
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// #region component
const Skills = () => {
	const theme = useSelector(selectMode);
	const onInit = () => {
		console.log("lightGallery has been initialized");
	};
	return (
		<div className="container">
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				<SwiperSlide>
					<img src={one} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</div>
	);
};
// #endregion

export default Skills;
