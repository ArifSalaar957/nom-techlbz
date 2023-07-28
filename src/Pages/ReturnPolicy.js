import React from 'react'
import BlackNavbar from '../components/BlackNavbar'
import styled from 'styled-components'
import BlackFooter from '../components/BlackFooter'
const ReturnPolicy = () => {
  return (
    <>

    {/* Navbar  */}

      <BlackNavbar />

        {/* Return policy section  */}

        <MainHeading>
  <Container className='container'>
    <WrapperRow className='row'>
      <Heading>RETURN POLICY</Heading>
       </WrapperRow>
  </Container>
</MainHeading>

{/* Content section  */}

<Container className='container'>
  <WrapperRow className='row'>
    <PolicyDescription style={{paddingTop:"15px"}}>{maindes}</PolicyDescription>
<PolicyHeading>RETURNS</PolicyHeading>
    <PolicyDescription>{RETURNS}</PolicyDescription>
<PolicyHeading>RETURN PROCESS</PolicyHeading>
    <PolicyDescription>{RETURN_PROCESS}</PolicyDescription>
<PolicyHeading>CONDITIONS FOR RETURN</PolicyHeading>
    <PolicyDescription>For the product to be eligible for a return, please make sure that:
        <UnOrderListing>
            <ListingItem>You immediately sent us a picture of the damaged product.</ListingItem>
            <ListingItem>The product must be sent to us in original packaging.</ListingItem>
            <ListingItem>The product must not be in use, altered, or in damaged condition.</ListingItem>
            <ListingItem>All the tags and labels must be intact.</ListingItem>
            <ListingItem>The product must have a receipt or proof of purchase.</ListingItem>
            <ListingItem>We will not be responsible for any damage to the product during the return shipment. We strongly urge that you use an insured trackable method to mail your return. This will help us to follow the product.</ListingItem>
            <ListingItem>Return shipping charges must be paid by the customer subject to our policy on return on damaged products below.</ListingItem>
            <ListingItem>The products whose warranty period is expired are not eligible for return.</ListingItem>
        </UnOrderListing>
    </PolicyDescription>
    <PolicyHeading>RETURN OF DAMAGED PRODUCTS</PolicyHeading>
    <PolicyDescription>{DAMAGED_PRODUCTS} <br />
    Techlabz LLC <br />
ATTN: Returns Department <br />
1200 Blair Mill Road <br />
Silver Spring MD, 20910
    </PolicyDescription>
    <PolicyHeading>CANCELLATION OF ORDER:</PolicyHeading>
    <PolicyDescription>For cancellation of your order, please read our shipping policy here. <br />
QUERIES <br />
In case of any query or doubt concerning our return policy, please contact us at: <br />
support@techlabz.io</PolicyDescription>
    <PolicyHeading>ACKNOWLEDGMENT AND ACCEPTANCE</PolicyHeading>
    <PolicyDescription className='mb-5'>{ACCEPTANCE}</PolicyDescription>
  </WrapperRow>
</Container>

{/* Footer  */}

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


const maindes = "We value our customers and strive our best to give you the best possible services. If for any reason, you feel unsatisfied with the purchase, this return policy will help you with how to proceed."

const RETURNS = "We allow a return for all products. To apply for a return, you are required to contact us within 7 to 30 days of the purchase to become eligible. The returned products necessarily be in new and unused condition, with all original tags and labels attached."

const RETURN_PROCESS = "To return an item, please email us at support@techlabz.io. If your return request is accepted, we will notify you via email of the procedure to be followed. No direct return of the product will be accepted without first contacting us and getting the approval for return."

const DAMAGED_PRODUCTS = "A damaged product means an initial defective product upon receiving, not caused by the customer (non-human damage). We have stringent quality control and sourcing mechanism. That is the reason we have seldom witnessed fault returns. However, we accept the return of damaged /defective products. If our engineering experts confirm non-human damage to the product and conclude that it is no customer’s fault, we will initiate a refund.For defective or damaged products, please get in touch with us immediately at support@techlabz.io to process a refund.Mail your return to the following address:"

const ACCEPTANCE = "Techlabz LLC reserve the right to modify, change, or suspend any or all terms at any time, without notice. Please, keep yourself updated by visiting our policies. You willingly agree that the following terms will become applicable when you purchase a product from us."
export default ReturnPolicy
