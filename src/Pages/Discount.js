import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
const Discountmodal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
       {/* Discount modal  */}


 {showModal && (
    <ModalSection>
        <Container className='container' >
            <ModalWrapper className='row'>
                <ModalImageColumn className='col-md-4'>
<ModalImage src = {process.env.PUBLIC_URL + '/images/Rectangle 3884.png'} />
<ModalImageMobile src = {process.env.PUBLIC_URL + '/images/Rectangle 3884 (1).png'} />
                </ModalImageColumn>
                <ContentColumn className = "col-md-6">
<UnlockText>Enter Your email below to Unlock</UnlockText>
<Discount>30% OFF</Discount>
<Order>with the order of 25$ or more</Order>
<EmailAddress type = "email" placeholder='Email Address' />
<GetButton type = "submit">Get Your OFF</GetButton>
<NoThanks onClick={()=>setShowModal(false)}>No Thanks</NoThanks>
<ModalDescription>Lorem ipsum dolor sit ametetur adielit, sed do eiusmod eniam, quis nostrud exercitation ulloris nisi ut aliquip ex ea commod</ModalDescription>
                </ContentColumn>
            </ModalWrapper>
        </Container>
        </ModalSection>
      )}
    </>
  )
}


//   modal styled 
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
@media (max-width: 768px){
    padding: 40px;
}
`
    const ModalImageColumn = styled.div`
padding: 0px;

`
    const ContentColumn = styled.div`
background-color: white;
text-align: center;
padding: 30px;
@media (max-width: 768px){
   padding: 15px;
}
`
    const UnlockText = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #000000;
@media (max-width: 768px){
    font-size: 12px;
line-height: 15px;
}
`
    const Discount = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
    font-size: 70px;
    line-height: 83px;

color: #1D1D22;
@media (max-width: 768px){
    font-size: 17px;
line-height: 15px;
}
`
    const Order = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #8D8D8D;
@media (max-width: 768px){
    font-size: 12px;
line-height: 15px;
}
`
    const ModalImage = styled.img`
width: 60%;
height: auto;
display: none;
margin-left: auto;
@media (min-width: 769px){
    display: block;
}

`
    const ModalImageMobile = styled.img`
width: 100%;
height: auto;
display: none;
margin-left: auto;
@media (max-width: 768px){
    display: block;
}

`
    const EmailAddress = styled.input`
width: 50%;
height: 54px;
border: none;
margin-right: 10px;
padding-left: 20px;
background: rgba(239, 239, 239, 0.5);
border-radius: 5px;
@media (max-width: 768px) {
    height: 34px;
    font-size: 12px;
}
`
    const GetButton = styled.button`
width: 30%;
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
    width: 40%;
    height: 34px;
    font-size: 12px;
}
`
    const NoThanks = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 36px;
cursor: pointer;
padding-top: 15px;
text-decoration-line: underline;

color: #1D1D22;
@media (max-width: 768px){
    font-size: 12px;
    line-height: 18px;
}
`
    const ModalDescription = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
text-align: center;

color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 12px;
    line-height: 18px;
}
`

export default Discountmodal
