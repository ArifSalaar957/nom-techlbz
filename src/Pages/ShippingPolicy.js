import React from 'react'
import BlackNavbar from '../components/BlackNavbar'
import styled from 'styled-components'
import BlackFooter from '../components/BlackFooter'
const ShippingPolicy = () => {
  return (
    <>
      
      {/* Navbar  */}

      <BlackNavbar />


        {/* shipping policy section  */}

        <MainHeading>
  <Container className='container'>
    <WrapperRow className='row'>
      <Heading>SHIPPING POLICY</Heading>
       </WrapperRow>
  </Container>
</MainHeading>

{/* Content section  */}

<Container className='container'>
  <WrapperRow className='row'>
    <PolicyDescription style={{paddingTop:"15px"}}>{maindes}</PolicyDescription>
<PolicyHeading>Please note that;</PolicyHeading>
    <PolicyDescription>
    <UnOrderListing>
        <ListingItem>The order processing time (where an order is made ready for shipping) differs from the shipping times (carrier transit time) mentioned at checkout.</ListingItem>
        <ListingItem>After receiving your order confirmation email, all orders are processed within SEVEN business days (excluding weekends and holidays). You will receive another notification when your order has shipped.</ListingItem>
        <ListingItem>The order may be delayed (for a reasonable period) due to a high volume of orders, postal service problems, pandemics, or for reasons that are beyond our control.</ListingItem>
    </UnOrderListing>
    </PolicyDescription>
<PolicyHeading>1. SHIPPING DESTINATIONS</PolicyHeading>
<PolicyDescription>Currently, we offer to ship to the following countries:
    <UnOrderListing>
        <ListingItem>USA </ListingItem>
        <ListingItem>Canada</ListingItem>
    </UnOrderListing>
</PolicyDescription>
<PolicyHeading>2. SHIPPING RATES AND DELIVERY ESTIMATES</PolicyHeading>
<PolicyDescription>We value our customers and offer free shipping to the USA and Canada. Find below the estimated transit duration: <br />
Ship From Destination Carrier Estimated Duration Shipping Charges <br />
China US/Canada FedEx 7-20 days Free <br />
USA US/Canada FedEx 3-7 days Free <br />
All the deliveries are made during working business hours.</PolicyDescription>
<PolicyHeading>3. IMPORT DUTIES AND TAXES:</PolicyHeading>
<PolicyDescription>Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Techlabz LLC is not responsible for these charges if they are applied and are your responsibility as the customer.</PolicyDescription>
<PolicyHeading>4. HOW DO I CHECK THE STATUS OF MY ORDER?</PolicyHeading>
<PolicyDescription>When your order has shipped, you will receive an email notification from us including a tracking number so you can check the status online. Please allow 24 hours for the tracking information to become available. <br />
If you haven’t received your order within 20 days of receiving your shipping confirmation email, don’t hesitate to get in touch with us at support@techlabz.io with your name and order number, and we will look into it for you.</PolicyDescription>

<PolicyHeading>5. HOW DO I CHANGE MY SHIPPING ADDRESS?</PolicyHeading>
<PolicyDescription>You can change the shipping address before the product is shipped. For an address modification, proceed with these steps:
    <UnOrderListing>
        <ListingItem>Contact us by emailing support@techlabz.io with the subject “address change request.”</ListingItem>
        <ListingItem>Mention your order number in the email.</ListingItem>
        <ListingItem>We do not entertain address change requests when the product is shipped.</ListingItem>
        <ListingItem>Disclaimer: The customer is responsible for entering the write shipping address. The techlabz.io shall not bear any loss for the fault of the customer.</ListingItem>
        <ListingItem>Orders returned undelivered due to incorrect shipping addresses are subject to a restocking fee to be determined by Techlabz LLC</ListingItem>
    </UnOrderListing>
</PolicyDescription>
<PolicyHeading>6. HOW DO I CANCEL MY ORDER?</PolicyHeading>
<PolicyDescription>You can cancel your order before the shipment of the product. Once the product is shipped, we are unable to cancel or make changes to the order. For cancellation of your order, follow these steps:
    <UnOrderListing>
        <ListingItem>Contact us by emailing support@techlab.io with the subject “order cancellation request.”</ListingItem>
        <ListingItem>Mention your order number in the email.</ListingItem>
    </UnOrderListing>
</PolicyDescription>
<PolicyHeading>7. LOST/STOLEN PACKAGES</PolicyHeading>
<PolicyDescription>We do not hold any responsibility for the lost or stolen packages. Once your tracking number shows that your package was delivered to your address and you have not received it, please report the matter to the local authorities.</PolicyDescription>

<PolicyHeading>8. REFUNDS, RETURNS, AND EXCHANGES</PolicyHeading>
<PolicyDescription>We do not accept the exchange of products. <br />
We accept returns up to 30 days after delivery if the item is unused and in its original condition, and we will refund the full order amount minus the shipping costs for the return.
If your order arrives damaged in any way, please email us as soon as possible at support@techlabz.io with your order number and a photo of the item’s condition. We address these on a case-by-case basis but will try our best to work towards a satisfactory solution. <br />
If you have any further questions, please don't hesitate to contact us at support@techlabz.io</PolicyDescription>
<PolicyHeading>9. ACKNOWLEDGMENT AND ACCEPTANCE</PolicyHeading>
<PolicyDescription className='mb-5'>Techlabz LLC reserve the right to modify, change, or suspend any or all terms at any time, without notice. Please, keep yourself updated by regularly visiting our policies.
You willingly agree that the following terms will become applicable when you purchase a product from us.
For further details, please read our return policy here and refund policy here.</PolicyDescription>
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

const maindes = "Techlabz LLC is committed to delivering your product on time, free of shipping charges. If you want to know more about the process of delivery, please read our shipping policy below;"
export default ShippingPolicy
