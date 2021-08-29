import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_51JOJRiSHfAlafyd4TTxjphsfW9JGlOrHywlst6DDmfD1ikRrZodMRORjTcQxIuuktLdAe6GnSCmHV8v83HZE2fYd00V4z47fni'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token

            }  
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment error: ',JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provided credit card.');

        })
        
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='S&M Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency="INR"
            email="chandra.piyush17@gmail.com"
            bitcoin
            allowRememberMe
        
        />
    )
}

export default StripeCheckoutButton;