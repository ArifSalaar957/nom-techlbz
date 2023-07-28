import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const Footer = () => {
  return (
    <>
     <FooterContainer>
    <ContainerWrapper className='container'>
    <WrapperRow className='row justify-content-center'>
    <LogoImage className = "col-12">
        <Image className='my-4 black_logo_labz img-fluid' src={process.env.PUBLIC_URL + '/images/Logo (3).png'}/>
          </LogoImage>
          
          <div className="row">
          <div className="col-md-2">
            <h3 className='Footer_heading'>Reach us</h3>
            <div className='Footer_menu'>
                <span><i className="fas me-2 fa-phone-alt"></i>+1012 3456 789</span>
            </div>
            <div className='Footer_menu'>
                <span><i className="fas me-2 fa-envelope"></i>demo@gmail.com</span>
            </div>
            <div className='Footer_menu'>
                <span><i className="fas me-2 fa-map-marker"></i>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <h3 className='Footer_heading'>Company</h3>
            <div className='Footer_menu'>
                <Link to='/'>About</Link>
            </div>
            <div className='Footer_menu'>
                <Link to='/contact_us'>Contact</Link>
            </div>
            <div className='Footer_menu'>
                <Link to='/blog'>Blogs</Link>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <h3 className='Footer_heading'>Legal</h3>
            <div className='Footer_menu'>
                <a href='#'>Privacy Policy</a>
            </div>  
            <div className='Footer_menu'>
                <Link to='/terms_&_services'>Terms & Services</Link>
            </div>  
            <div className='Footer_menu'>
                <Link to='/return_policy'>Return Policy</Link>
            </div>  
            <div className='Footer_menu'>
                <Link to='/shipping_policy'>Shipping Policy</Link>
            </div>  
            <div className='Footer_menu'>
                <Link to='/refund_policy'>Refund Policy</Link>
            </div>  
          </div>
          <div className="col-md-2">
            <h3 className='Footer_heading'>Useful Links</h3>
            <div className='Footer_menu'>
                <a href='#'>TechLabz</a>
            </div>
            <div className='Footer_menu'>
                <a href='#'>Downloads</a>
            </div>
            <div className='Footer_menu'>
                <Link to='/forum1'>Forum1</Link>
            </div>
            <div className='Footer_menu'>
                <Link to='/forum2'>Forum2</Link>
            </div>
          </div>
          <div className="col-md-4">

            <div className='Footer_menu'>
                <img src={process.env.PUBLIC_URL + '/images/instagram.svg'} className = "me-2" alt="" />
                <img src={process.env.PUBLIC_URL + '/images/facebook.svg'} className = "me-2" alt="" />
                <img src={process.env.PUBLIC_URL + '/images/Group 1000001970 (2).svg'} className = "me-2 linkdin" alt="" />
                <img src={process.env.PUBLIC_URL + '/images/Group 1000001971 (2).svg'} className = "me-2 Google" alt="" />
                <img src={process.env.PUBLIC_URL + '/images/Group 1000001972 (2).svg'} className = "me-2" alt="" />
                <img src={process.env.PUBLIC_URL + '/images/Group 1000001973 (2).svg'} className = "me-2" alt="" />
            </div>
           <div className="newsletter_black px-3 pt-2">
             <h2 className='pb-2'>Join Our Newsletter</h2>
             <input type="email" className='email_subscription' placeholder='Your email address' />
             <button type='submit' className='subscribe_btn'>Subscribe</button>
             <p className='py-2'>*  Will send you weekly updates for your better tool management.</p>
           </div>
          </div>
          <div className="col-12 py-3 text-center">
            <p className='copyrights'>Copyright © TechLabz 2023, All Rights Reserved.</p>
          </div>
          </div>

    </WrapperRow>
    </ContainerWrapper>
    </FooterContainer>
          
    </>

  )
}
const LogoImage = styled.div`
text-align: left;
      @media (max-width: 768px) {
        text-align: center;
      }       
`
const FooterContainer = styled.div`
background: #FFFFFF;
box-shadow: 0px -2px 26px rgba(131, 131, 131, 0.25);       
`
const ContainerWrapper = styled.div`
 
`
const WrapperRow = styled.div`
             
`
export default Footer
