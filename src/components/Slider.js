import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Slider = () => {
  const responsive = {
   
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <MainContainer className="container px-3 px-md-0">
        <Wrapper className="row justify-content-center">
          
              <Carousel
                responsive={responsive}
                className="py-5"
                infinite
                removeArrowOnDeviceType={["tablet", "desktop"]}
                autoPlay
              >
                <Card>
                  <CardImage src={process.env.PUBLIC_URL + '/images/image1.png'}/>
                  <CardTitle>{Title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                 <Icon src={process.env.PUBLIC_URL + '/images/Vector (4).svg'} /><Growth>Growth</Growth>
                 <Reading><Icon src={process.env.PUBLIC_URL + '/images/Vector (5).svg'} /><Timereading>15 min read</Timereading></Reading>
                  <Link to= "/all_blogs"><ReadMore type = "button">Read More<i className="fas ms-2 fa-arrow-right"></i></ReadMore></Link>
                </Card>
                <Card>
                  <CardImage src={process.env.PUBLIC_URL + '/images/image1.png'}/>
                  <CardTitle>{Title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                 <Icon src={process.env.PUBLIC_URL + '/images/Vector (4).svg'} /><Growth>Growth</Growth>
                 <Reading><Icon src={process.env.PUBLIC_URL + '/images/Vector (5).svg'} /><Timereading>15 min read</Timereading></Reading>
                 <Link to= "/all_blogs"><ReadMore type = "button">Read More<i className="fas ms-2 fa-arrow-right"></i></ReadMore></Link>
                </Card>
                <Card>
                  <CardImage src={process.env.PUBLIC_URL + '/images/image1.png'}/>
                  <CardTitle>{Title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                 <Icon src={process.env.PUBLIC_URL + '/images/Vector (4).svg'} /><Growth>Growth</Growth>
                 <Reading><Icon src={process.env.PUBLIC_URL + '/images/Vector (5).svg'} /><Timereading>15 min read</Timereading></Reading>
                 <Link to= "/all_blogs"><ReadMore type = "button">Read More<i className="fas ms-2 fa-arrow-right"></i></ReadMore></Link>
                </Card>
                <Card>
                  <CardImage src={process.env.PUBLIC_URL + '/images/image1.png'}/>
                  <CardTitle>{Title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                 <Icon src={process.env.PUBLIC_URL + '/images/Vector (4).svg'} /><Growth>Growth</Growth>
                 <Reading><Icon src={process.env.PUBLIC_URL + '/images/Vector (5).svg'} /><Timereading>15 min read</Timereading></Reading>
                 <Link to= "/all_blogs"><ReadMore type = "button">Read More<i className="fas ms-2 fa-arrow-right"></i></ReadMore></Link>
                </Card>
              </Carousel>
        </Wrapper>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div``;
const Wrapper = styled.div``;
const Reading = styled.span`
float: right;
padding-right: 25px;
`;
const Growth = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding-left: 15px;
line-height: 24px;
color: rgba(0, 0, 0, 0.64);
@media (max-width: 768px){
  font-size: 12px;
padding-left: 5px;
line-height: 20px;
}
`;
const Timereading = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding-left: 15px;
line-height: 24px;
color: rgba(0, 0, 0, 0.64);
@media (max-width: 768px){
  font-size: 12px;
padding-left: 5px;
line-height: 20px;
}
`;
const Icon = styled.img`
padding-left: 25px;
@media (max-width: 768px){
 width: 40px;
}
`;
const ReadMore = styled.button`
background: #FFFFFF;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
border: none;
width: 100%;
margin-bottom: 10px;
margin-top: 20px;
height: 27px;
text-align: center;
color: #000000;
`;
const CardDescription = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding: 5px 20px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
  font-size: 12px;
line-height: 20px;
}
`;
// const CardColumn = styled.div``;
const CardTitle = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 22px;
margin-bottom: 0px;
padding: 5px 20px;
line-height: 33px;
display: block;
color: #000000;
/* @media (max-width: 470px){
    font-size: 11px;
    line-height: 20px;
  } */
@media (max-width: 768px){
    padding: 5px 10px;
    font-size: 15px;
    line-height: 23px;
}
`;
const CardImage = styled.img`
width: 100%;
height: auto;
`;
const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  max-width: 90%;
  /* @media (max-width: 470px){
  max-width: 60%;
  margin: auto;
  } */
`;

const Title = "Capital One Hosts About Your Objects for Swift 4 Presentation"

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem  sed "
export default Slider;
