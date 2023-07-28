import React from 'react'
import BlackNavbar from '../components/BlackNavbar'
import styled from 'styled-components'
import BlackFooter from '../components/BlackFooter'

const Forum1 = () => {
  return (
    <>
      
{/* Nabar  */}

<BlackNavbar />

{/* Forum1 section  */}

<MainContainer className='container'>
<Wrapper className='row'>
<Buttons className='col-12'>
<AllCategories type='button'>All Categories <i class="fas fa-chevron-right"></i></AllCategories>
<AllTags type='button'>All Tags <i class="fas fa-chevron-right"></i></AllTags>
<Categories type='button'>Categories</Categories>
<Latest>Latest</Latest>
<Top>Top</Top>
</Buttons>
<Wrapper className='row mt-5'>
<CategoriesTopics className='col-md-6'>
    
    <Category>Category</Category>
    <Topics>Topics</Topics>
<HorizentalLine></HorizentalLine>
<ProductsWarapper>
<ProductsTittle>OpenMV Products</ProductsTittle>
<ProductsTopics>2.7k</ProductsTopics>
<Wrapper className='row'>
    <Productimage className='col-2'><Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803.png'} /></Productimage>
    <ProductDescription className='col-10'>Place for technical questions related to the OpenMV boards software and firmware</ProductDescription>
</Wrapper>
<HorizentalLine></HorizentalLine>
</ProductsWarapper>
<ProductsWarapper>
<ProductsTittle>OpenMV Pure Thermal</ProductsTittle>
<ProductsTopics>2.7k</ProductsTopics>
<Wrapper className='row'>
    <Productimage className='col-2'><Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (1).png'} /></Productimage>
    <ProductDescription className='col-10'>Place for technical questions related to the OpenMV boards software and firmware</ProductDescription>
</Wrapper>
<HorizentalLine></HorizentalLine>
</ProductsWarapper>
<ProductsWarapper>
<ProductsTittle>Arduino Boards</ProductsTittle>
<ProductsTopics>2.7k</ProductsTopics>
<Wrapper className='row'>
    <Productimage className='col-2'><Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (2).png'} /></Productimage>
    <ProductDescription className='col-10'>Place for technical questions related to the OpenMV boards software and firmware</ProductDescription>
</Wrapper>
<HorizentalLine></HorizentalLine>
</ProductsWarapper>
<ProductsWarapper>
<ProductsTittle>OpenMV Products</ProductsTittle>
<ProductsTopics>2.7k</ProductsTopics>
<Wrapper className='row'>
    <Productimage className='col-2'><Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (3).png'} /></Productimage>
    <ProductDescription className='col-10'>Place for technical questions related to the OpenMV boards software and firmware</ProductDescription>
</Wrapper>
<HorizentalLine></HorizentalLine>
</ProductsWarapper>

</CategoriesTopics>
<LatestTopics className='col-md-6'>
    <Category>Latest</Category>
<HorizentalLine></HorizentalLine>

<Wrapper className='row py-3 d-flex align-items-center'>
<LatestImage className='col-2'>
<Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (4).png'} />
</LatestImage>
<LastestDescription className='col-8'>
    <Description>
    Welcome to the OpenMV Forums Please Read This First, Before Postings!
    </Description>
    <SquareImage src={process.env.PUBLIC_URL + '/images/Rectangle 6824.png'} />
<ListItem>OpenMV Products</ListItem>
</LastestDescription>
<DatePosting className='col-2'>
    <Posting>0</Posting>
    <Date>21 March</Date>
</DatePosting>
</Wrapper>
<HorizentalLine></HorizentalLine>
<Wrapper className='row py-3 d-flex align-items-center'>
<LatestImage className='col-2'>
<Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (5).png'} />
</LatestImage>
<LastestDescription className='col-8'>
    <Description>
    Welcome to the OpenMV Forums Please Read This First, Before Postings!
    </Description>
    <SquareImage src={process.env.PUBLIC_URL + '/images/Rectangle 6824.png'} />
<ListItem>OpenMV Products</ListItem>
</LastestDescription>
<DatePosting className='col-2'>
    <Posting>0</Posting>
    <Date>21 March</Date>
</DatePosting>
</Wrapper>
<HorizentalLine></HorizentalLine>
<Wrapper className='row py-3 d-flex align-items-center'>
<LatestImage className='col-2'>
<Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (6).png'} />
</LatestImage>
<LastestDescription className='col-8'>
    <Description>
    Welcome to the OpenMV Forums Please Read This First, Before Postings!
    </Description>
    <SquareImage src={process.env.PUBLIC_URL + '/images/Rectangle 6824.png'} />
<ListItem>OpenMV Products</ListItem>
</LastestDescription>
<DatePosting className='col-2'>
    <Posting>0</Posting>
    <Date>21 March</Date>
</DatePosting>
</Wrapper>
<HorizentalLine></HorizentalLine>
<Wrapper className='row py-3 d-flex align-items-center'>
<LatestImage className='col-2'>
<Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (7).png'} />
</LatestImage>
<LastestDescription className='col-8'>
    <Description>
    Welcome to the OpenMV Forums Please Read This First, Before Postings!
    </Description>
    <SquareImage src={process.env.PUBLIC_URL + '/images/Rectangle 6824.png'} />
<ListItem>OpenMV Products</ListItem>
</LastestDescription>
<DatePosting className='col-2'>
    <Posting>0</Posting>
    <Date>21 March</Date>
</DatePosting>
</Wrapper>
<HorizentalLine></HorizentalLine>
<Wrapper className='row py-3 d-flex align-items-center'>
<LatestImage className='col-2'>
<Image src = {process.env.PUBLIC_URL + '/images/Rectangle 6803 (8).png'} />
</LatestImage>
<LastestDescription className='col-8'>
    <Description>
    Welcome to the OpenMV Forums Please Read This First, Before Postings!
    </Description>
    <SquareImage src={process.env.PUBLIC_URL + '/images/Rectangle 6824.png'} />
<ListItem>OpenMV Products</ListItem>
</LastestDescription>
<DatePosting className='col-2'>
    <Posting>0</Posting>
    <Date>21 March</Date>
</DatePosting>
</Wrapper>
<HorizentalLine></HorizentalLine>


</LatestTopics>
</Wrapper>
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
const LatestImage = styled.div`
       
`
const SquareImage = styled.img`
      @media (max-width: 768px){
        width: 7px;
        height: 7px;
      } 
`
const DatePosting = styled.div`
       text-align: right;
`
const Posting = styled.p`
       font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
text-align: right;
margin-bottom: 0px;
color: #000000;
@media (max-width: 768px){
    font-size: 10px;
    line-height: 15px;
}
`
const Date = styled.p`
       font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
display: inline-block;
line-height: 21px;
padding-left: 10px;
/* identical to box height */
margin-bottom: 0px;
color: rgba(0, 0, 0, 0.6);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 12px;
}
`

const ListItem = styled.li`
       font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
display: inline-block;
line-height: 21px;
padding-left: 10px;
color: rgba(0, 0, 0, 0.6);
@media (max-width: 768px){
    font-size: 7px;
    line-height: 12px;
}
`
const LastestDescription = styled.div`
  
`
const Description = styled.p`
       font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
margin-bottom: 0px;
color: #000000;
@media (max-width: 768px){
    font-size: 11px;
    line-height: 17px;
}
`
const ProductDescription = styled.div`
       padding: 20px;
       font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
       font-size: 9px;
       line-height: 14px;
       padding: 3px 20px;
       }
`
const Image = styled.img`
       @media (max-width: 768px){
        width: 48px;
        height: 48px;
       }
`
const Productimage = styled.div`
       
`
const ProductsTittle = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 40px;
color: #000000;
@media (max-width: 768px){
       font-size: 10px;
       line-height: 21px;
       }

`
const ProductsTopics = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
float: right;
font-size: 20px;
line-height: 40px;
color: #000000;
@media (max-width: 768px){
       font-size: 10px;
       line-height: 21px;
       }
`
const Category = styled.span` 
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: rgba(0, 0, 0, 0.4);
`
const Topics = styled.span` 
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: rgba(0, 0, 0, 0.4);
float: right;
`

const HorizentalLine = styled.hr` 
margin-bottom: 0px;
`
const CategoriesTopics = styled.div`

`
const ProductsWarapper = styled.div`
border-left: 10px solid #dbdbdb;
padding: 10px;
transition: 0.5s ease-in;
&:hover{
border-left: 10px solid black;

}
`
const LatestTopics = styled.div`
@media (max-width: 768px){
    margin-top: 15px;
}
`
const Latest = styled.span` 
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
padding-left: 20px;
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
      width: 166px;
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
    width: 90px;
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


export default Forum1
