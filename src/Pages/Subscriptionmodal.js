import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
const Subscriptionmodal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      {/* Black Navigation  */}
{showModal && (
    <ModalSection>
        <Container className='container' >
            <ModalWrapper className='row'>
                <ContentColumn className = "col-md-8">
                <Cross onClick={()=>setShowModal(false)}>X</Cross>
                  <TechLabzLogo src={process.env.PUBLIC_URL + '/images/logo (1).png'} />
                  
                  
<NewsLetter>Subscribe to our Newsletter</NewsLetter>
<ModalDescription>Lorem ipsum dolor sit ametetur adielit, sed do eiusmod eniam, quis nostrud exercitation ulloris nisi ut aliquip ex ea commod</ModalDescription>
<EmailAddress type = "email" placeholder='Email Address' />
<SubscribeButton type = "submit">Subscribe</SubscribeButton>
                </ContentColumn>
            </ModalWrapper>
        </Container>
        </ModalSection>
      )}

    </>
  )
}


// modal styled 

const Container = styled.div`

`
    const ModalSection = styled.div`
background-color: rgba(0,0,0,0.5);
height: 100vh;
position: fixed;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: 1111;
`
    const ModalWrapper = styled.div`
    justify-content: center;
    padding: 0px 40px;
@media (max-width: 768px){
    padding: 40px;
}
`

    const ContentColumn = styled.div`
background-color: white;
text-align: center;
border-radius: 10px;
padding: 0px 30px 30px 30px;
@media (max-width: 768px){
   padding: 15px;
}
`
    const NewsLetter = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #000000;
@media (max-width: 768px){
    font-size: 16px;
line-height: 15px;
}
`



    const EmailAddress = styled.input`
width: 60%;
height: 54px;
border: none;
margin-right: 10px;
padding-left: 20px;
background: rgba(239, 239, 239, 0.5);
border-radius: 5px;
@media (max-width: 768px) {
    height: 34px;
    font-size: 12px;
    width: 50%;
}
`
    const SubscribeButton = styled.button`
width: 20%;
height: 54px;
background: #1D1D22;
border: none;
border-radius: 5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
text-align: center;
color: #FFFFFF;
@media (max-width: 768px) {
    width: 35%;
    height: 34px;
    font-size: 12px;
}
`

    const ModalDescription = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
text-align: center;
padding: 0px 40px;

color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 12px;
    line-height: 18px;
    padding: 0px 0px;
}
`
    const TechLabzLogo = styled.img`
width: 50%;
height: auto;
margin-bottom: 40px;

`
    const Cross = styled.span`
font-size: 22px;
padding: 20px;
cursor: pointer;
font-weight: 700;
color: #888888;
float: right;
@media (max-width: 768px){
  font-size: 16px;
  padding: 0px;
}
`

export default Subscriptionmodal
