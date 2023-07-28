import React from 'react'
import BlackNavbar from '../components/BlackNavbar'
import styled from 'styled-components'
import BlackFooter from '../components/BlackFooter'
const ForgotPassword = () => {
  return (
    <>
    {/* Navbar  */}

      <BlackNavbar />

      {/* ForgotPassword Section  */}

      <Container className='container'>
    <WrapperRow className='row'>
      <ImageColumn className='col-md-6'>
<Image src = {process.env.PUBLIC_URL + '/images/Rectangle 3824 (1).png'}  />
      </ImageColumn>
      <LoginColumn className='col-md-6'>
        <Heading>Forgot Password</Heading>
        <ChangePassword>Change your password.</ChangePassword>
         <EmailLabel>Email</EmailLabel>
<EmailField type= "email" placeholder='Ex. xyz@company.com' />
         <ChangPasswordLabel>Change Password</ChangPasswordLabel>
<ChangPasswordField type= "Password" placeholder='*****'/>
         <ConfrimPasswordLabel>Confrim Password</ConfrimPasswordLabel>
<ChangPasswordField type= "Password" placeholder='*****'/>
<ConfrimButton type='submit'>Confrim</ConfrimButton>

      </LoginColumn>
       </WrapperRow>
  </Container>

  {/* Footer  */}

  <BlackFooter />
    </>
  )
}

const Container = styled.div`

`;

const ImageColumn = styled.div`
@media (max-width: 768px){
    display: none;
}
`;

const ConfrimButton = styled.button`
background: #1D1D22;
border-radius: 5px;
width: 100%;
margin-top: 50px;
height: 66px;
font-family: 'Poppins';
border: none;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
`;
const LoginColumn = styled.div`
padding: 40px;
align-self: center;
@media (max-width: 768px){
   padding: 10px;
}
`;
const Heading = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 40px;
text-decoration-line: underline;
color: #000000;
@media (max-width: 768px){
  text-align: center;
  font-size: 17px;
}
`;

const Image = styled.img`
width: 100%;
height: auto;
`;
const EmailField = styled.input`
width: 100%;
height: 50px;
border: none;
padding: 0px 20px;
margin-top: 10px;
background: rgba(239, 239, 239, 0.5);
border-radius: 5px;
`;
const ChangPasswordField = styled.input`
width: 100%;
height: 50px;
border: none;
padding: 0px 20px;
margin-top: 10px;
background: rgba(239, 239, 239, 0.5);
border-radius: 5px;
`;
const EmailLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-top: 20px;
line-height: 20px;
color: #656565;
`;
const ChangPasswordLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-top: 20px;
line-height: 20px;
color: #656565;
`;
const ConfrimPasswordLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-top: 20px;
line-height: 20px;
color: #656565;
`;
const ChangePassword = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 40px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
  text-align: center;
  font-size: 17px;
}
`;

const WrapperRow = styled.div`
margin: 50px 0px;
@media (max-width: 768px){
  padding: 0px;
}
`;
export default ForgotPassword
