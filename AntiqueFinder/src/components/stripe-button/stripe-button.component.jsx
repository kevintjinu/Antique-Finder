import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqdsWJ5kGLDsVifD3181kTYJB5DAjIB4pi4bYzDwVK24BeBpuXaAKvlksPb77qbYZGx2oumD04WEs7jdI04tBoZ00HWdBOBFM';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
           label='Pay Now'
           name='Antique Finder'
           billingAddress
           shippingAddress
           image="https://images.unsplash.com/photo-1496309732348-3627f3f040ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
           //image="https://svgshare.com/i/CUz.svg"
           
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;