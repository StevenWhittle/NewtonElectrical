import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";

// #region styled-components
const StyledAboutMe = styled.section`
	p {
		font-size: 1.25rem;
	}
	.img {
		width: 18rem;
		height: 18rem;
	}
`;
// #endregion

// #region component
const propTypes = {
	bio: PropTypes.string,
	moreInfo: PropTypes.string,
};

const AboutMe = ({ bio, moreInfo }) => {
	return (
		<Element name={"About"} id="about">
			<StyledAboutMe className="section">
				<Container>
					<Container className="d-flex justify-content-center">
						<Title size={"h2"} text={"About Newton Electrical"} />
					</Container>
					<Row className="align-items-center mt-5">
						<Col className="d-flex flex-column text-center">
							<Container>
								{bio && <p>{bio}</p>}
								{moreInfo && <p>{moreInfo}</p>}
							</Container>
						</Col>
						<Col className="d-none d-md-block text-center">
							<img
								src="../images/newtonPeeps.jpg"
								alt="Newton Electrical staff"
								loading="lazy"
								className="mx-auto rounded-circle border border-primary-subtle"
								style={{ width: "15rem", height: "15rem" }}
							/>
						</Col>
					</Row>
				</Container>
			</StyledAboutMe>
		</Element>
	);
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;
