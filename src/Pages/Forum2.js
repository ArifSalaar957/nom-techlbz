import React from 'react'
import BlackNavbar from '../components/BlackNavbar'
import styled from 'styled-components'
import BlackFooter from '../components/BlackFooter'

const Forum2 = () => {
  return (
    <>
      
{/* Nabar  */}

<BlackNavbar />

{/* Forum2 section  */}

<MainContainer className='container'>
<Wrapper className='row'>
    <PoductImage className='col-1'>
        <Image src={process.env.PUBLIC_URL + '/images/Rectangle 6803.png'} />
    </PoductImage>
    <ProductDescription className='col-10'>
    Place for technical questions related to the OpenMV boards software and firmware
    </ProductDescription>
<Buttons className='col-12'>
<AllCategories type='button'>OpenMV Products <i class="fas fa-chevron-right"></i></AllCategories>
<AllTags type='button'>All Tags <i class="fas fa-chevron-right"></i></AllTags>
<Categories type='button'>Latest</Categories>
<Top>Top</Top>
</Buttons>
<CategoriesSetion className = "row">
<Category className='col-9'>Category</Category>
<Replies className='col-1'>Replies</Replies>
<Views className='col-1'>Views</Views>
<Activity className='col-1'>Activity</Activity>
<HorizentalLine></HorizentalLine>

<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>

<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>

<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>
<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>

<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>
<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>

<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>
<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>

<CategoryColumn className='col-6'>
    <CategoryTitle>About the OpenMV Products category</CategoryTitle>
    <CategoryDescription>Lorem ipsum dolor sit amet consectetur. Enim velit malesuada diam at tellus convallis.</CategoryDescription>
</CategoryColumn>
<UserImages className='col-3'>
        <UserImage src={process.env.PUBLIC_URL + '/images/Ellipse 818.png'} />
    </UserImages>
    <TotalReplies className='col-1'>0</TotalReplies>
    <TotalViews className='col-1'>2.8k</TotalViews>
    <TotalActivity className='col-1'>12 day</TotalActivity>
<HorizentalLine></HorizentalLine>

</CategoriesSetion>
</Wrapper>
</MainContainer>

{/* Footer  */}

<BlackFooter />

    </>
  )
}

const MainContainer = styled.div`
        margin-top: 35px; 
           margin-bottom: 55px;
`
const Wrapper = styled.div`
       
`
const TotalReplies = styled.div`
       font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
align-self: center;
text-align: right;
padding: 0px;
line-height: 27px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 11px;
    width: 15.6%;

}
`
const TotalViews = styled.div`
       font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
padding: 0px;
align-self: center;
text-align: right;
line-height: 27px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 11px;
    width: 15.6%;

}
`
const TotalActivity = styled.div`
       font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
padding: 0px;
align-self: center;
text-align: right;
line-height: 27px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 11px;
    width: 15.6%;
}
`
const UserImages = styled.div`
       align-self: center;
       text-align: center;
       @media (max-width: 768px){
        width: 20%;
       }
`
const UserImage = styled.img`
       @media (max-width: 768px){
        width: 14px;
        height: 14px;
       }
`
const CategoryDescription = styled.p`
       font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 9px;
    line-height: 11px;
}
`
const CategoryTitle = styled.h4`
       font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: rgba(0, 0, 0, 0.8);
@media (max-width: 768px){
    font-size: 9px;
    line-height: 11px;
}
`
const CategoriesSetion = styled.div`
       margin-top: 30px;
       @media (max-width: 768px){
        padding-left: 25px;
       }
`
const HorizentalLine = styled.hr`
       margin-top: 15px;
       @media (max-width: 768px){
       margin-top: 5px;
       }
`
const CategoryColumn = styled.div`
       padding: 5px 0px;
       @media (max-width: 768px){
        width: 33%;
        padding: 0px;
       }
`

const Category = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
padding: 0px;
color: rgba(0, 0, 0, 0.4);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 9px;
    width: 53%;
}
`
const Views = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
padding: 0px;
text-align: right;
color: rgba(0, 0, 0, 0.4);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 9px;
    width: 15.6%;
}
`
const Activity = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
padding: 0px;
text-align: right;
color: rgba(0, 0, 0, 0.4);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 9px;
    width: 15.6%;
}
`
const Replies = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
padding: 0px;
text-align: right;
font-size: 14px;
line-height: 21px;
color: rgba(0, 0, 0, 0.4);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 9px;
    width: 15.6%;
}
`
const ProductDescription = styled.div`
       font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #000000;
@media (max-width: 768px){
    display: none;
}
`
const PoductImage = styled.div`
       margin-bottom: 25px;
       @media (max-width: 768px){
    display: none;
}
`


const Image = styled.img`

`



const Top = styled.span` 
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
padding-left: 12px;
padding-right: 12px;
color: #000000;   
cursor: pointer;  
@media (max-width: 768px){
font-size: 9.12801px;
line-height: 14px;
margin-right: 5px;
padding-left: 0px;
padding-right: 5px;
}

`
const AllCategories = styled.button` 
      width: 222px;
height: 46px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
margin-right: 10px;
line-height: 24px;
background-color: transparent;
color: #000000;
border: 1px solid #000000;
border-radius: 4px;
@media (max-width: 768px){
    width: 122px;
    height: 25px;
    border: 0.570501px solid #000000;
border-radius: 2.282px;
font-size: 9.12801px;
line-height: 14px;
margin-right: 5px;
}
`
const Buttons = styled.div`
     
           
`
const AllTags = styled.button` 
      width: 112px;
height: 46px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
margin-right: 10px;
line-height: 24px;
background-color: transparent;
color: #000000;
border: 1px solid #000000;
border-radius: 4px;
@media (max-width: 768px){
    width: 60px;
    height: 25px;
    border: 0.570501px solid #000000;
border-radius: 2.282px;
font-size: 9.12801px;
line-height: 14px;
margin-right: 5px;
}
`
const Categories = styled.button` 
      width: 134px;
height: 46px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
margin-right: 10px;
line-height: 24px;
background: #2C2C2C;
color: #FFFFFF;
border: 1px solid #000000;
border-radius: 4px;
@media (max-width: 768px){
    width: 70px;
    height: 25px;
    border: 0.570501px solid #000000;
border-radius: 2.282px;
font-size: 9.12801px;
line-height: 14px;
margin-right: 5px;
}
`


export default Forum2
