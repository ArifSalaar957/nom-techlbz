import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Footer from "../components/Footer";
import Navigation from "../components/Navbar";
import Discountmodal from "./Discount";
const About = (props) => {
  const settings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Aboutpage>
      <Discountmodal />

      {/* Navbar */}

      <Navigation />

      {/* About Section  */}

      <AboutWrapper>
        <Wrapper className="container">
          <WrapperRow className="row">
            <AboutSection className="col-md-6 order-2 order-md-1">
            <h2>{props.name ? `Welcome - ${props.name}` : ""}</h2>
              <AboutHeading>About Us</AboutHeading>
              <AboutQuestion>Who we are?</AboutQuestion>
              <AboutText>{dummy_text}</AboutText>
            </AboutSection>
            <ImageSection className="col-md-6 order-1 order-md-2">
              <ImageLogo src={process.env.PUBLIC_URL + "/images/Logo.svg"} />
            </ImageSection>
          </WrapperRow>
        </Wrapper>
      </AboutWrapper>

      {/* Team Section  */}

      <TeamWrapper>
        <ContainerWrapper className="container p-0">
          <WrapperRow className="row justify-content-around">
            <TeamSection className="col-12">
              <TeamHeading>Our Team</TeamHeading>
              <TeamInfo>Meet Our Team</TeamInfo>
            </TeamSection>
            <TeamCard className="col-md-5">
              <TeamMember
                src={process.env.PUBLIC_URL + "/images/Ellipse 813.svg"}
              />
              <TeamName>Danny Doe</TeamName>
              <Founders>PRESIDENT & CO-FOUNDER</Founders>
              <TeamDetail className="px-3 pb-5">{team_details}</TeamDetail>
            </TeamCard>
            <TeamCard className="col-md-5">
              <TeamMember
                src={process.env.PUBLIC_URL + "/images/Ellipse 813 (1).svg"}
              />
              <TeamName>Danny Doe</TeamName>
              <Founders>PRESIDENT & CO-FOUNDER</Founders>
              <TeamDetail className="px-3 pb-5">{team_details}</TeamDetail>
            </TeamCard>
          </WrapperRow>
        </ContainerWrapper>
      </TeamWrapper>

      {/* Trusted section  */}
      <Wrapper className="container">
        <WrapperRow>
          <TrustSection className="col-12">
            <TrustHeading>We are Trusted</TrustHeading>
            <TrustInfo>What they say about us</TrustInfo>
          </TrustSection>
        </WrapperRow>
      </Wrapper>
      <TrustWrapper className="container">
        <TrustRow className="row justify-content-center">
          <TrustSlider className="col-md-6">
            <Slider {...settings} autoplay>
              <SliderHeading>
                <Image
                  className="me-3 mb-4"
                  src={process.env.PUBLIC_URL + "/images/Vector (1).svg"}
                  alt=""
                />
                We Always Give The Best
                <SliderText>{slider_text}</SliderText>
              </SliderHeading>
              <SliderHeading>
                <Image
                  className="me-3 mb-4"
                  src={process.env.PUBLIC_URL + "/images/Vector (1).svg"}
                  alt=""
                />
                We Always Give The Best
                <SliderText>{slider_text}</SliderText>
              </SliderHeading>
            </Slider>
          </TrustSlider>
        </TrustRow>
      </TrustWrapper>

      {/* NewsLetter Section  */}

      <NewsLetterWrapper>
        <ContainerWrapper className="container">
          <WrapperRow className="row justify-content-center">
            <NewsLetterSection className="col-md-6">
              <NewsLetterHeading>NEWSLETTER</NewsLetterHeading>
              <NewsLetter>Subscribe Our To Newsletter</NewsLetter>
              <Text>{Subscribtion_text}</Text>
              <Input type="email" placeholder="Your email address"></Input>
              <SubscribeButton type="submit">Subscribe</SubscribeButton>
            </NewsLetterSection>
          </WrapperRow>
        </ContainerWrapper>
      </NewsLetterWrapper>

      {/* Footer Section  */}

      <Footer />
    </Aboutpage>
  );
};
const Wrapper = styled.div`
  margin-top: 15px;
`;
const Aboutpage = styled.div`
  overflow-x: hidden;
`;
const Image = styled.img`
  margin-top: 15px;
`;

const AboutWrapper = styled.div`
  background: white;
`;
const TeamWrapper = styled.div`
  background: #f7f7f7;
  padding-bottom: 30px;
`;
const NewsLetterWrapper = styled.div`
  background: #f7f7f7;
  padding-bottom: 30px;
`;
const WrapperRow = styled.div``;
const SubscribeButton = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  background: #000000;
  width: 20%;
  padding: 18px;
  border: none;
  border-radius: 0px 4px 4px 0px;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
const AboutSection = styled.div`
  margin-top: 15px;
`;
const Input = styled.input`
  background: #ffffff;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #616161;
  width: 80%;
  padding: 18px;
  border: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;
const ImageSection = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AboutHeading = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
  color: #656565;
  padding-top: 50px;
`;
const AboutQuestion = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #000000;
`;
const TeamSection = styled.div``;
const NewsLetterSection = styled.div``;
const TrustSection = styled.div``;
const AboutText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding-bottom: 15px;
`;
const ImageLogo = styled.img`
  width: 100%;
  height: auto;
`;
const TeamHeading = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding-top: 40px;
`;
const NewsLetterHeading = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding-top: 40px;
`;
const TrustHeading = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding-top: 40px;
`;
const SliderHeading = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding-top: 40px;
  justify-content: center;
`;
const TeamInfo = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: #000000;
  margin-bottom: 50px;
`;
const NewsLetter = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: #000000;
  // margin-bottom: 50px;
`;
const TrustInfo = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: #000000;
  margin-bottom: 50px;
`;
const TeamCard = styled.div`
  background: #ffffff;
  border-radius: 4px;
`;
const TeamMember = styled.img`
  display: block;
  margin: auto;
  margin-top: -40px;
`;
const ContainerWrapper = styled.div``;
const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #656565;
  margin-bottom: 40px;
`;
const TeamName = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  color: #333333;
  text-align: center;
  padding-top: 15px;
`;
const Founders = styled.p`
  font-family: "Poppins";
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #656565;
  text-align: center;
`;
const TeamDetail = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #656565;
`;
const TrustWrapper = styled.div``;
const TrustRow = styled.div``;
const SliderText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #656565;
  padding: 20px 40px;
`;
const TrustSlider = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 30px;
`;

const dummy_text =
  "KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinart, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar";

const team_details =
  "KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, consectetur adipiscKLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.KLorem ipsum dolor sit amet, conse";

const slider_text =
  "KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet, consectetur adipiscing elit. ";

const Subscribtion_text =
  "KLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit KLorem ipsum dolor sit amet, consectetur adipiscing elit. KLorem ipsum dolor sit amet, consectetur ";
export default About;
