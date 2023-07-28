import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Switch } from 'antd';
const Cookies2 = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
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
               <RejectCookies className='col-5 col-md-2 p-0'>
<RejectCookiesButton onClick={()=>setShowModal(false)}>Reject All cookies</RejectCookiesButton>
               </RejectCookies>
               <AcceptCookies className='col-5 col-md-2'>
<AcceptCookiesButton onClick={()=>setShowModal(false)}>Reject All cookies</AcceptCookiesButton>
               </AcceptCookies>
               <CookiesDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp enim ad minim veniam, quis nostrud exercitation ulloris nisi ut aliquip ex ea coLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp enim ad minim veniam, quis nostrud exercitation ulloris nisi ut aliquip ex ea co </CookiesDescription>
               <SwitchSetion>
                <SwitchWrapper className='row'>
<AddSelection>Ad selection & Delivery Reports</AddSelection>
<SwitchCookies className='col-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp enim ad minim veniam, quis nostrud exercitation ulloris nisi ut aliquip ex ea coLorem ipsum dolor sit amet <b className='readmore'>Read more</b> </SwitchCookies>
<SwitchButton className='col-2'><Switch defaultChecked onChange={onChange} /></SwitchButton>
<AddSelection className='pt-2 pt-md-3'>Information, Storage and access</AddSelection>
<SwitchCookies className='col-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp enim ad minim veniam, quis nostrud exercitation ulloris nisi ut aliquip ex ea coLorem ipsum dolor sit amet <b className='readmore'>Read more</b> </SwitchCookies>
<SwitchButton className='col-2'><Switch defaultChecked onChange={onChange} /></SwitchButton>

                </SwitchWrapper>
               </SwitchSetion>
               <Save><SaveButton type = "button" onClick={()=>setShowModal(false)}>Save & Exit</SaveButton></Save>
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

const Save = styled.div`
text-align: right;
`
const SaveButton = styled.button`
background: #1D1D22;
border-radius: 5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
width: 200px;
height: 40px;
border: none;
margin: 20px 0px;
font-size: 16px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
@media (max-width: 768px){
width: 130px;
margin: 8px 0px;
}
`
const SwitchWrapper = styled.div`

`
const SwitchButton = styled.div`
text-align: right;
`
const AddSelection = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */
color: #000000;
@media (max-width: 768px){
    font-size: 15px;
    line-height: 18px;
}
`
const SwitchSetion = styled.div`
border: 1px solid #808080;
padding: 15px;
@media (max-width: 768px){
padding: 10px; 
}
`
    const ModalSection = styled.div`
background-color: rgba(0,0,0,0.5);
height: 100%;
position: fixed;
width: 100%;
display: flex;
align-items: flex-end;
justify-content: center;
z-index: 1111;
`
    const ModalWrapper = styled.div`
    background-color: white;
    padding: 25px;
@media (max-width: 768px){
    padding: 10px;
}
`
    const RejectCookies = styled.div`
  
`
    const AcceptCookies = styled.div`
  
`
    const CookiesDescription = styled.div`
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
padding: 20px 0px;
line-height: 30px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 12px;
    padding: 5px 10px;
    line-height: 18px;
}
`
    const SwitchCookies = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
    font-size: 12px;
    line-height: 17px;
    color: rgba(0,0,0,0.5);
    width: 77%;
}
`
    const RejectCookiesButton = styled.button`
  background: #8D8D8D;
border-radius: 5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 30px;
/* identical to box height, or 188% */
width: 100%;
border: none;
height: 40px;
text-align: center;

color: #FFFFFF;
@media (max-width: 768px){
    font-size: 10px;
    line-height: 30px;
    width: 90%;
    border: none;
    margin: 10px;
    height: 30px;

}
`
    const AcceptCookiesButton = styled.button`
  background: #1D1D22;
border-radius: 5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 30px;
/* identical to box height, or 188% */
width: 100%;
border: none;
height: 40px;
text-align: center;

color: #FFFFFF;
@media (max-width: 768px){
    font-size: 10px;
    line-height: 30px;
    width: 100%;
    border: none;
    margin: 10px;
    height: 30px;

}
`

   
  

export default Cookies2
