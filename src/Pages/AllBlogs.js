import React from 'react'
import styled from 'styled-components'
import { Data } from '../Data';
import { Pagination } from 'antd';
import BlackNavbar from '../components/BlackNavbar';
import BlackFooter from '../components/BlackFooter'
import Cookies2 from './Cookies2';

const AllBlogs = () => {
  return (
    <>
<Cookies2 />
    {/* Navigation  */}

 <BlackNavbar />

{/* All blog banner section  */}

      <BannerContainer className = "container-fluid" >
        <WrapperRow className='row'>
            <ImageColumn className='col-md-3'>
         <BannerImage className='d-none d-md-block' src= {process.env.PUBLIC_URL + '/images/hand.svg'} />
         <BannerImage className='d-block d-md-none' src= {process.env.PUBLIC_URL + '/images/Rectangle 3797.svg'} />
         </ImageColumn>
            <TextArea className='col-md-9 align-self-center'>
<LatestText>latest</LatestText>
<TitleText>Capital One Hosts About Objects for Swift 4 Presentation</TitleText>
<DescriptionText>{dummytext}</DescriptionText>
<ReadBlogs>
<ReadMoreButton>Read More <i class="fas ms-2 fa-arrow-right"></i></ReadMoreButton>
</ReadBlogs>
</TextArea>
        </WrapperRow>
      </BannerContainer>

{/* All blogs cards section  */}

<BlogContainer className='container'>
<BlogWrapper className='row'>
    <AllBlog>All Blogs for you :</AllBlog>
</BlogWrapper>
</BlogContainer>

<MainContainer className="container">
        <Wrapper className="row g-2 justify-content-between ">

        {Data.map((data, key) => {
          return (
            <>
            <Card className='col-md-4' key={key}>
                  <CardImage src={data.image}/>
                  <CardTitle>{data.company}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                 <Icon src={process.env.PUBLIC_URL + '/images/Vector (4).svg'} /><Growth>Growth</Growth>
                 <Reading><Icon src={process.env.PUBLIC_URL + '/images/Vector (5).svg'} /><Timereading>15 min read</Timereading></Reading>
                  <ReadMore type = "button">Read More<i className="fas ms-2 fa-arrow-right"></i></ReadMore>
                </Card>
                
            </>
          );
        })}

              <CardPagination className="col-12 text-center">
              <Pagination defaultCurrent={1} total={50} />
                </CardPagination> 
        </Wrapper>

        <TagsSection className='row mx-3 mx-md-0'>
        <Categories className = "col-md-4">
                  <CategoryHeading>Categories</CategoryHeading>
                  <CategoryText>App Development</CategoryText>
                  <CategoryText>App Designing</CategoryText>
                  <CategoryText>Website Design</CategoryText>
                  <CategoryText>Website Development</CategoryText>
                  <CategoryText>App Development</CategoryText>
                  <CategoryText>App Development</CategoryText>
                  </Categories>
                  
                  <TagsWrapper className = "col-md-3">
                    <TagsHeading>Tags</TagsHeading>
                   <TagsText className='mt-4'>
                   <Tags>Ui Design</Tags>
                    <Tags className='ms-2'>User Interface Design</Tags>
                   </TagsText>
                   <TagsText className='mt-4'>
                   <Tags>Ui Design</Tags>
                   <Tags>Ui Design</Tags>
                   <Tags>Ui Design</Tags>
                    
                   </TagsText>
                   <TagsText className='mt-4'>
                   <Tags>Ui Design</Tags>
                    <Tags className='ms-2'>User Interface Design</Tags>
                   </TagsText>
                    </TagsWrapper>
        </TagsSection>
      </MainContainer>

      <BlackFooter />
    </>
  )
}
const BannerContainer = styled.div`
  background: #1D1D22;
  max-width: 1700px;
`;
const BlogContainer = styled.div`
`;
const AllBlog = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
margin-top: 40px;
color: #000000;
padding: 0px;
@media (max-width: 768px){
  padding: 20px;
}
`;
const BlogWrapper = styled.div`
`;
const WrapperRow = styled.div`
  @media  (max-width: 768px){
    padding: 20px;
  }
`;
const ReadMoreButton = styled.button`
  width: 206px;
height: 55px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #000000;
background: #FFFFFF;
border-radius: 5px;
border: none;
@media (max-width: 768px){
    width: 104px;
height: 27px;
font-size: 9.08738px;
line-height: 14px;
}
`;
const DescriptionText = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 34px;

color: rgba(255, 255, 255, 0.78);
@media (max-width: 768px){
    font-size: 14px;
line-height: 21px;
}
`;
const TextArea = styled.div`
padding: 0rem 8rem;
@media (max-width: 768px){
    padding: 0rem 0rem;
    margin-top: 20px;
}
`;
const TitleText = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 57px;
line-height: 86px;

color: #FFFFFF;
@media (max-width: 768px){
    font-size: 27px;
line-height: 40px;
}
`;
const LatestText = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 21px;
line-height: 18px;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #FFFFFF;
`;
const ImageColumn = styled.div`
  padding: 0px;
`;
const CardPagination = styled.div`
  
`;
const ReadBlogs = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Tags = styled.span`
  border: 1px solid #000000;
border-radius: 25.5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
padding: 5px 10px;
/* identical to box height */


color: #000000;
@media (max-width: 480px){
font-size: 9px;

}
`;
const TagsSection = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
const TagsWrapper = styled.div`
  background: rgba(242, 154, 25, 0.03);
border-radius: 5px;
margin-left: 25px;
padding: 25px;
@media (max-width: 768px){
margin-top: 25px;
margin-left: 0px;
}
`;
const CategoryWrapper = styled.div`
  margin-top: 40px;
`;
const TagsText = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CategoryText = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
padding-top: 10px;
font-size: 16px;
line-height: 24px;
color: rgba(0, 0, 0, 0.7);
`;
const Categories = styled.div`
  background: rgba(255, 255, 255, 0.03);
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
border-radius: 5px;
padding: 25px;
`;
const CategoryHeading = styled.h3`
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;

`;
const TagsHeading = styled.h3`
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
margin-bottom: 20px;
/* identical to box height */


color: #000000;

`;
const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;


const MainContainer = styled.div``;
const Wrapper = styled.div`
justify-content: space-between;
@media (max-width: 768px){
  padding: 20px;
}

`;
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
@media (max-width: 768px) {
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
@media (max-width: 768px) {
  font-size: 12px;
padding-left: 5px;
line-height: 20px;
}
`;
const Icon = styled.img`
padding-left: 25px;
@media (max-width: 768px) {
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
  max-width: 32%;
  margin-bottom: 25px;
  padding: 0px;
  @media (max-width: 768px){
    max-width: 100%;
  }
 
`;

const Title = "Capital One Hosts About Your Objects for Swift 4 Presentation"

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem  sed "




const dummytext = "Transitioning to Swift Class Finds Receptive Audience Among Objective-C Developers Posted by About Objects Transitioning to Swift Class Finds Receptive Audience Among Objective-C Developers Posted by About Objects"
export default AllBlogs
