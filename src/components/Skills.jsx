import React, { useRef, useState } from "react";
// State
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import one from "./photos/one.jpeg";
import Title from "./Title";
import two from "./photos/two.jpeg";
import three from "./photos/three.jpeg";
import four from "./photos/four.jpeg";
import five from "./photos/five.jpeg";
import six from "./photos/six.jpeg";
import seven from "./photos/seven.jpeg";
import eight from "./photos/eight.jpeg";
import nine from "./photos/nine.jpeg";
import ten from "./photos/ten.jpeg";
import eleven from "./photos/eleven.jpeg";
import twelve from "./photos/twelve.jpeg";
import thirteen from "./photos/thirteen.jpeg";
import fourteen from "./photos/fourteen.jpeg";
import fifteen from "./photos/fifteen.jpeg";
import sixteen from "./photos/sixteen.jpeg";
import seventeen from "./photos/seventeen.jpeg";
// import required modules
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { Button, Col, Container, Row } from "react-bootstrap";

// #region component
const Skills = () => {
	const theme = useSelector(selectMode);
	const onInit = () => {
		console.log("lightGallery has been initialized");
	};
	return (
		<div className="container">
			<div className="container">
				<Row className="align-items-center text-center">
					<Col>
						<Title size={"h2"} text={"Recent Projects"} />
						<p className="lead mb-4">SOME TEXT HERE</p>
					</Col>
				</Row>
			</div>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				spaceBetween={30}
				slidesPerView={3.5}
				resistance={true}
				pagination={{
					clickable: true,
				}}
			>
				<SwiperSlide>
					<div>
						<img src={one} alt="alt one" />{" "}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={two} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={three} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={four} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={five} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={six} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={seven} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={eight} alt="alt one" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={nine} alt="alt one" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
// #endregion

export default Skills;
