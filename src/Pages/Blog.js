import React from "react";
import Navigation from "../components/Navbar";
import Footer from '../components/Footer';
import styled from "styled-components";
import Slider from "../components/Slider";
import Cookies1 from "./Cookies1";
const Blog = () => {
  return (
    <>
    <Cookies1 />
      {/* Black navigation  */}

      <Navigation />

      {/* blog Banner section  */}
      <BannerBackground>
        <BannerContainer className="container">
        <BackButton><i className="fas me-3 fa-chevron-left" style={{fontSize:"22px"}}></i>Back</BackButton>
        <BannerImage src={process.env.PUBLIC_URL + '/images/Blog.svg'} />
        </BannerContainer>
      </BannerBackground>

      {/* Capital One section  */}

      <MainContainer className="container px-3 px-md-0">
        <Wrapper className="row">
            <Date>13 December 2021</Date>
            <CapitalHeading>{dummy_text}</CapitalHeading>
            <User>
                <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 795.svg'}/>
                <UserName>Ashley Swift</UserName>
            </User>
            <Description>{Description1}</Description>
            <Description>{Description2}</Description>
            <Description>{Description3}</Description>
            <Description>{Description4}</Description>
            <Description>{Description5}</Description>
            <CapitalHeading className="pt-4">{dummy_heading}</CapitalHeading>
            <Description>{Description3}</Description>
            <Description>{Description4}</Description>
            <Description>{Description5}</Description>
            <Description>{Description5}</Description>
            <Description><Icon src={process.env.PUBLIC_URL + '/images/Vector (4).svg'} /><Views>100 views</Views><Icon src={process.env.PUBLIC_URL + '/images/Vector (5).svg'} /><Views>15 min read</Views></Description>
        </Wrapper>
      </MainContainer>

{/* Comment Section  */}

<MainContainer className="container px-3 px-md-0">
<Comments>
<CommentHeading>Comments:</CommentHeading><TotalComments>(23)</TotalComments>
</Comments>
<Wrapper className="row px-3 px-md-0">
  <CommentCard>
<UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 794.svg'} />
<UserComments className="col-10">
  <CommentUserName>Ashley Swift</CommentUserName>
<CommentText>{comments}</CommentText>
</UserComments>
</CommentCard>
  <CommentCard>
<UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 794 (1).svg'} />
<UserComments className="col-10">
  <CommentUserName>Ashley Swift</CommentUserName>
<CommentText>{comments}</CommentText>
</UserComments>
</CommentCard>
  <CommentCard>
<UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 794.svg'} />
<UserComments className="col-10">
  <CommentUserName>Ashley Swift</CommentUserName>
<CommentText>{comments}</CommentText>
</UserComments>
</CommentCard>

{/* Comment form section  */}
<Form>
<FormSection className="col-md-8" >
  <Wrapper className="row  p-4">
    <NameField className = "col-md-4">
<NameLabel>Name</NameLabel>
<NameInput type="text" placeholder="Name"/>
</NameField>
    <EmailField className = "col-md-8">
    <EmailLabel>Email</EmailLabel>
<EmailInput type="email" placeholder="Email address"/>
</EmailField>
    <CommentField className = "col-md-12">
    <CommentLabel>Comment</CommentLabel>
<CommentDescription placeholder="Write Your Comment here"></CommentDescription>
<CommentButton type="submit">Post Comment</CommentButton>
</CommentField>
</Wrapper>
</FormSection>
</Form>
</Wrapper>
</MainContainer>

{/* Footer  */}
<Slider />
<Footer />
    </>
  );
};

const BannerBackground = styled.div`
  background: rgba(255, 0, 0, 0.03);
`;
const BannerContainer = styled.div`
  
`;
const MainContainer = styled.div`
  
`;
const Form = styled.form`
  padding: 0px;
`;
const CommentButton = styled.button`
  background: #1D1D22;
border-radius: 10px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
width: 208px;
height: 55px;
border: none;
float: right;
margin-top: 15px;
@media (max-width: 768px){
  width: 100%;
}
`;
const NameInput = styled.input`
  background: rgba(241, 241, 241, 0.5);
border-radius: 10px;
padding: 12px;
width: 100%;
border: none;
margin-top: 7px;
&:focus{
  outline: none;
}

`;
const EmailInput = styled.input`
  background: rgba(241, 241, 241, 0.5);
border-radius: 10px;
padding: 12px;
width: 100%;
border: none;
margin-top: 7px;
&:focus{
  outline: none;
}

`;
const NameField = styled.div`
  
`;
const EmailField = styled.div`
  
`;
const CommentField = styled.div`
  
`;
const NameLabel = styled.label`
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
color: #656565;
display: block;

`;
const EmailLabel = styled.label`
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
color: #656565;
display: block;
@media (max-width: 768px){
  margin-top: 15px;
}

`;
const CommentLabel = styled.label`
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
color: #656565;
display: block;
margin-top: 15px;

`;
const FormSection = styled.div`
background: #FFFFFF;
border: 1px solid rgba(176, 176, 176, 0.3);
border-radius: 6px;
margin-top: 25px;
margin-bottom: 20px;
`;
const UserImage = styled.img`
@media (max-width: 768px){
  width: 40px;
  height: 40px;
}
  
`;
const UserComments = styled.div`
  
`;
const CommentUserName = styled.span`
  
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #000000;
padding-left: 15px;
@media (max-width: 768px){
  font-size: 16px;
line-height: 30px;
}

`;

const CommentCard = styled.div`
  background: #FFFFFF;
border: 1px solid rgba(176, 176, 176, 0.3);
border-radius: 6px;
padding: 25px;
display: flex;
margin-top: 15px;
@media (max-width: 768px){
  padding: 5px;
}
`;
const Icon = styled.img`
  padding-right: 15px;
`;
const Wrapper = styled.div`
  
`;
const CommentText = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 25px;
padding: 0px 15px;
color: #656565;
@media (max-width: 768px){
  font-size: 12px;
line-height: 20px;
}
`;
const TotalComments = styled.span`
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(0, 0, 0, 0.64);
margin-left: 10px;
`;
const Comments = styled.div`
  margin-top: 25px;
`;
const CommentHeading = styled.h3`
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 45px;
color: #000000;
display: inline;
margin-top: 25px;
`;
const Views = styled.span`
  margin-right: 35px;
`;
const Description = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding-top: 15px;
margin-bottom: 0px;
line-height: 24px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 12px;
line-height: 18px;
padding-top: 10px;
}
`;
const UserName = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 30px;
color: #000000;
display: inline;
padding-left: 12px;
`;
const User = styled.div`

`;
const Date = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
color: #AEAEAE;
padding-top: 25px;
margin-bottom: 0px;
`;
const BannerImage = styled.img`
  width: 60%;
  height: auto;
  display: block;
  margin: auto;
  padding-bottom: 25px;
  @media (max-width: 768px){
    width: 66%;
    padding-top: 10px;
    padding-bottom: 10px;
}
`;

const BackButton = styled.button`
background: transparent;
border: none;
padding-top: 25px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 38px;
color: #1D1D22;
@media (max-width: 768px){
    display: none;
}
`;
const CommentDescription = styled.textarea`
height: 170px;
width: 100%;
border: none;
margin-top: 10px;
background: rgba(241, 241, 241, 0.5);
border-radius: 10px;
resize: none;
padding-left: 25px;
padding-top: 10px;
&:focus{
  outline: none;
}
`;
const CapitalHeading = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 45px;
color: #000000;
@media (max-width: 768px){
    font-size: 16px;
line-height: 24px;
}
`;

const comments = "vamus tincidunt bibendum urna eu auctor. Praesent sit amet tempor nisl. Duis eu enim eleifend, hendrerit dolor ut, tempus diamMauris porttitor,"

const dummy_text = "Capital One Hosts About Your Objects for Swift 4 Presentation Capital One Hosts About Your Objects for Swift 4 Presentation"

const dummy_heading = "Capital One Hosts About:"

const Description1 = "Lorem ipsum dolor sit amet consectetur. Lacus arcu nibh a morbi urna urna convallis rhoncus. Senectus suspendisse aliquam quis nulla fermentum. Suspendisse malesuada urna pharetra sit dui odio id purus.  quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum neque. Lorem ipsum dolor sit amet consectetur. Lacus arcu nibh a morbi urna urna convallis rhoncus. Senectus suspendisse aliquam quis nulla fermentum. Suspendisse malesuada urna pharetra sit dui odio id purus. Ut quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum neque."

const Description2 = "Lorem ipsum dolor sit amet consectetur. Lacus arcu nibh a morbi urna urna convallis rhoncus. Senectus suspendisse aliquam quis nulla fermentum. Suspendisse malesuada urna pharetra sit dui odio id purus. quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum neque."

const Description3 = "Suspendisse malesuada urna pharetra sit dui odio id purus. Ut quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum nequ Lorem ipsum dolor sit amet consectetur. Lacus arcu nibh a morbi urna urna convallis rhoncus. Senectus suspendisse aliquam quis nulla fermentum. Suspendisse malesuada urna pharetra sit dui odio id purus.  quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum neque. Lorem ipsum dolor sit amet consectetur. Lacus arcu nibh a morbi urna urna convallis rhoncus. Senectus suspendisse aliquam quis nulla fermentum. Suspendisse malesuada urna pharetra sit dui odio id purus. Ut quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum neque."

const Description4 = "Lorem ipsum dolor sit amet consectetur. Lacus arcu nibh a morbi urna urna convallis rhoncus. Senectus suspendisse aliquam quis nulla fermentum. Suspendisse malesuada urna pharetra sit dui odio id purus. quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum neque."

const Description5 = "Suspendisse malesuada urna pharetra sit dui odio id purus. Ut quis placerat donec et curabitur fringilla morbi. Ornare magna lectus purus diam diam. Nam maecenas sapien aenean aenean fermentum nequ"
export default Blog;
