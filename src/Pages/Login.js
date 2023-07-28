import React from 'react'
import BlackNavbar from '../components/BlackNavbar'
import styled from 'styled-components'
import BlackFooter from '../components/BlackFooter'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";
const Login = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisable(true);

    if (
      !values.email ||
      !values.password
    ) {
      setError("Please fill in all fields.");
      setButtonDisable(false);
      return;
    }

  
    setError("");

    signInWithEmailAndPassword(auth, values.email, values.password)
    .then( (res) => {
        setButtonDisable(false);
        navigate("/about")
        console.log(res);
      }
    ).catch((error) => {
      setButtonDisable(false);
      console.log(error);
    });
  };
  
  return (
    <>
      
      {/* Navbar  */}

      <BlackNavbar />

{/* login Section  */}

<Container className='container'>
    <WrapperRow className='row'>
      <ImageColumn className='col-md-6'>
<Image src = {process.env.PUBLIC_URL + '/images/Rectangle 3824 (1).png'}  />
      </ImageColumn>
      <LoginColumn className='col-md-6'>
      <LoginForm>
        <LoginText>Login</LoginText>
        <WelcomeText>Welcome back! we’re happy to see you again.</WelcomeText>
         <EmailLabel>Email</EmailLabel>
<EmailField type= "email" placeholder='Ex. xyz@company.com' 
 value={values.email}
 onChange={(event) =>
   setValues((prev) => ({ ...prev, email: event.target.value }))
 }
/>
         <PasswordLabel>Password</PasswordLabel>
<PasswordField type= "Password" placeholder='*****' 
  value={values.password}
  onChange={(event) =>
    setValues((prev) => ({ ...prev, password: event.target.value }))
  }
/>
<Link to = "/forgot_password"><ForgotPassword>Forgot Password?</ForgotPassword></Link>
<p>{error}</p>
<LoginButton type='submit' disabled = {buttonDisable} onClick={handleSubmit}>Login</LoginButton>
<GoToSigpup>
<NoAccount>Don’t have an account?</NoAccount>
<Link to = "/signup" style={{textDecoration:"none"}}><SignupText>SignUp</SignupText></Link>
</GoToSigpup>
      </LoginForm>
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
const LoginForm = styled.form`

`;
const ForgotPassword = styled.span`
float: right;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 40px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
  font-size: 17px;
}
`;
const ImageColumn = styled.div`
@media (max-width: 768px){
    display: none;
}
`;
const GoToSigpup = styled.div`
text-align: center;
padding: 15px 0px;
`;
const LoginButton = styled.button`
background: #1D1D22;
border-radius: 5px;
width: 100%;
margin-top: 30px;
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
const LoginText = styled.h3`
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
const SignupText = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 40px;
padding: 0px 3px;
color: #000000;
@media (max-width: 768px){
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
const PasswordField = styled.input`
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
const PasswordLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-top: 20px;
line-height: 20px;
color: #656565;
`;
const WelcomeText = styled.p`
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
const NoAccount = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 40px;
color: rgba(0, 0, 0, 0.5);
@media (max-width: 768px){
  font-size: 17px;
}
`;
const WrapperRow = styled.div`
margin: 50px 0px;
@media (max-width: 768px){
  padding: 0px;
}
`;
export default Login
