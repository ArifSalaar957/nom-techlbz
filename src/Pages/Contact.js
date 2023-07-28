import React from 'react'
import BlackFooter from '../components/BlackFooter'
import BlackNavbar from '../components/BlackNavbar'
import styled from 'styled-components'
import Subscriptionmodal from './Subscriptionmodal'
const Contact = () => {
 
  return (
    <>
    <Subscriptionmodal />

    
      <BlackNavbar />


     {/* Contact Section  */}
<MainContainer className='container my-0 my-md-5 py-0 py-md-5'>
<WrapperRow className='row justify-content-between'>
<ContactSection className='col-md-6'>
<ContactHeading className='d-none d-md-block'>Contact Us</ContactHeading>
<ContactText className='d-none d-md-block'>Any question or remarks? Just write us a message!</ContactText>
<MessageHeading>Leave a Message For Us</MessageHeading>
<MessageText>{dummy_text}</MessageText>
<MainForm>
<WrapperRow className='row'>
<ContactForm className = "col-md-6">
<InputLabels>First Name</InputLabels>
<Input type = "text" placeholder='Ex.John'/>
<InputLabels>Business Email</InputLabels>
<Input type = "email" placeholder='Email Address'/>
</ContactForm>
<ContactForm className = "col-md-6">
<InputLabels>Last Name</InputLabels>
<Input type = "text" placeholder='Ex.John'/>
<InputLabels>Subject</InputLabels>
<Input type = "text" placeholder='Choose Subject'/>
</ContactForm>
<Message className = "col-12">
<InputLabels>Message</InputLabels>
<TextArea placeholder='Write your message here'></TextArea>
<SendMessage type = "submit">Send Message</SendMessage>
</Message>

</WrapperRow>
</MainForm>
</ContactSection>
<ImageSection className='col-md-6 contactimage'>
<ContactHeading className='d-block d-md-none'>Contact Us</ContactHeading>
<ContactText className='d-block d-md-none'>Any question or remarks? Just write us a message!</ContactText>



</ImageSection>
</WrapperRow>
</MainContainer>

{/* map section  */}

<MainContainer className='container-fluid contact_container'>
  <WrapperRow className='row '>
  <ContactBanner className='d-block d-md-none p-0' src={process.env.PUBLIC_URL + '/images/Group 1000001978.svg'} alt = "map"/>
  <div className='contactmap'>
<Map className='d-none d-md-block' src={process.env.PUBLIC_URL + '/images/Google-Maps (1) 1.svg'} alt = "map"/>
<Map className='d-block d-md-none' src={process.env.PUBLIC_URL + '/images/Google-Maps (1) 1 (1).svg'} alt = "map"/></div>
</WrapperRow>
</MainContainer>
      {/* Black Footer  */}

      <BlackFooter />

    </>
  )
}
const MainContainer = styled.div`
        margin-top: 35px; 
           
`
const WrapperRow = styled.div`
        
`
const ContactForm = styled.div`
          @media (max-width: 768px){
         padding: 0px 25px;
        } 
`
const Map = styled.img`
       mix-blend-mode: luminosity;
       /* height: 540px; */
       padding: 0;
   width: 100%;
   /* @media (max-width: 768px){
    height: 100%;
   } */
`
const ContactBanner = styled.img`
        width: 100%;
       height: auto;
   
`

const ContactImage = styled.div`
       
`
const SendMessage = styled.button`
width: 100%;
height: 66px;
background: #1D1D22;
border-radius: 5px;
margin-top: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
border: none;
`
const Message = styled.div`
      @media (max-width: 768px){
         padding:0px 25px;
        }     
`
const ContactSection = styled.div`
        padding-right: 4rem;
        @media (max-width: 768px){
          padding-right: 1rem;
        }
`
const ImageSection = styled.div`
        
`
const MainForm = styled.form`
        
`
const TextArea = styled.textarea`
      margin-top: 15px;
      width: 100%;
      background: rgba(239, 239, 239, 0.5);
      border-radius: 5px;
      height: 267px;  
      border: none;
      font-weight: 500;
      resize: none;
padding: 25px;
color: rgba(101, 101, 101, 0.2);
`
const Input = styled.input`
width: 100%;
height: 50px;
background: rgba(239, 239, 239, 0.5);
border-radius: 5px;
border: none;
margin-top: 15px;
font-weight: 500;
padding: 25px;
color: rgba(101, 101, 101, 0.2);
`
const ContactText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 40px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
font-size: 15px;
line-height: 20px;
text-align: center;
}
`
const MessageText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 40px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
  font-size: 15px;
line-height: 25px;
}
`
const ContactHeading = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 40px;
color: #000000;
@media (max-width: 768px){
  font-size: 25px;
  padding-top: 20px;
  text-align: center;
 } 

`
const MessageHeading = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 40px;
color: #000000;
margin-top: 40px;
@media (max-width: 768px) {
  font-size: 25px;
}
`
const InputLabels = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
color: #656565;
display: block;
padding-top: 20px;
`
  

const dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit teluctus nec ullamcorper mattis."
export default Contact
