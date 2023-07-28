import React from 'react'
import styled from 'styled-components'
import BlackFooter from '../components/BlackFooter'
import BlackNavbar from '../components/BlackNavbar'
const RefundPolicy = () => {
  return (
    <>

    {/* Navbar  */}

      <BlackNavbar />

      {/* Refund policy section  */}

      <MainHeading>
  <Container className='container'>
    <WrapperRow className='row'>
      <Heading>REFUND POLICY</Heading>
       </WrapperRow>
  </Container>
</MainHeading>

{/* content section  */}

<Container className='container'>
  <WrapperRow className='row'>
    <PolicyDescription style={{paddingTop:"15px"}}>{maindes}</PolicyDescription>
<PolicyHeading>REFUNDS</PolicyHeading>
    <PolicyDescription>{REFUNDS}</PolicyDescription>
<PolicyHeading>CONDITIONS FOR REFUND</PolicyHeading>
    <PolicyDescription>
<UnOrderListing>
    <ListingItem>The terms of the return policy must be complied with</ListingItem>
    <ListingItem>The refund shall be subject to the inspection report of our engineers showing no customer’s fault.</ListingItem>
    <ListingItem>The refund shall be made on your original payment method</ListingItem>
</UnOrderListing>
    </PolicyDescription>
    <PolicyHeading>QUERIES</PolicyHeading>
    <PolicyDescription className='mb-5'>In case of any query or doubt concerning our refund policy, please get in touch with us at: <br />
support@techlabz.io <br />
ACKNOWLEDGMENT AND ACCEPTANCE <br />
Techlabz LLC reserve the right to modify, change, or suspend any or all terms at any time, without notice. Please, keep yourself updated by visiting our policies.
You willingly agree that the following terms will become applicable when you purchase a product from us.</PolicyDescription>
  </WrapperRow>
</Container>

{/* footer  */}

<BlackFooter />
    </>
  )
}


const MainHeading = styled.div`
height: 103px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background: #1D1D22;
@media (max-width: 768px){
height: 65px;
}
`;
const Container = styled.div`

`;
const UnOrderListing = styled.ul`
margin-bottom: 0px;
`;
const ListingItem = styled.li`

`;
const WrapperRow = styled.div`
@media (max-width: 768px){
  padding: 0px 15px;
}
`;
const PolicyDescription = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: #656565;
@media (max-width: 768px){
  font-size: 12px;
  line-height: 23px;
}
`;
const PolicyHeading = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
margin-bottom: 0px;
font-size: 24px;
line-height: 45px;
color: #1D1D22;
@media (max-width: 768px){
  font-size: 18px;
  line-height: 30px;
}
`;
const Heading = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
color: #FFFFFF;
@media (max-width: 768px){
  font-size: 20px;
line-height: 30px;
}
`;

const maindes = "We honor our customers by following the best market practices for initiating a refund within a minimum time frame. To initiate a refund, we require you to comply with the return policy terms. Please, read the return policy here."

const REFUNDS = "After receiving your return and examining the condition of your item, we will process your refund. The process of refund usually takes at least 7 days from the receipt of your item to process your refund. Depending on your credit card company, refunds may take 1-2 billing cycles to appear on your credit card statement. We will inform you by email when we complete the process of your return."

export default RefundPolicy
