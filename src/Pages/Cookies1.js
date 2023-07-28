import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
const Cookies1 = () => {
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
        <Container className='container-fluid' >
            <ModalWrapper className='row'>
                <ContentColumn className = "col-md-6">
<GotCookies>We Got Cookies</GotCookies>
<ModalDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp enim ad minim veniam, quis nostrud exercitation ulloris nisi ut aliquip ex ea co</ModalDescription>
                </ContentColumn>
                <Cookies className = "col-md-6 text-end">
               <CookiesButton>
                <AcceptCookies type='button' onClick={()=>setShowModal(false)}>Accept All cookies</AcceptCookies>
                </CookiesButton> 
<CookiesButton>
    <ManageCookies type='button' className='mt-0 mt-md-3'  onClick={()=>setShowModal(false)}>Manage Cookies</ManageCookies>
    </CookiesButton>
                </Cookies>
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
align-items: flex-end;
justify-content: center;
z-index: 1111;
`
    const ModalWrapper = styled.div`
    justify-content: center;
    background-color: white;
    padding: 0px 40px;
@media (max-width: 768px){
    padding: 0px;
}
`

    const ContentColumn = styled.div`
background-color: white;
text-align: left;
border-radius: 10px;
padding:30px;
@media (max-width: 768px){
    padding: 10px 20px;
}

`
    const Cookies = styled.div`
background-color: white;
text-align: left;
border-radius: 10px;
padding:30px;
@media (max-width: 768px){
    padding: 10px 20px;
    /* display: flex; */
}

`
    const GotCookies = styled.h3`
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

    const ModalDescription = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
text-align: left;

color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 12px;
    line-height: 18px;
    padding: 0px 0px;
}
`
    const AcceptCookies = styled.button`
background: #1D1D22;
border-radius: 5px;
width: 268px;
height: 60px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 30px;
text-align: center;
border: none;
color: #FFFFFF;
@media (max-width: 768px){
    width: 100%;
    height: 40px;
}

`
    const ManageCookies = styled.button`
background: #8D8D8D;
border-radius: 5px;
width: 268px;
height: 60px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 30px;
text-align: center;
border: none;
color: #FFFFFF;
@media (max-width: 768px){
    width: 100%;
    margin-top: 15px !important;
    height: 40px;
}
`
    const CookiesButton = styled.div`
text-align: right;
@media (max-width: 768px){
    text-align: left;
}
`
  

export default Cookies1
