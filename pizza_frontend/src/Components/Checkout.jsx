import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from 'react-redux';
import { placeOrder } from '../Actions/orderAction';

const Checkout = ({subTotal}) => {

    const dispatch = useDispatch()
    const tokenHandler=(token)=>{
        dispatch(placeOrder(token,subTotal));
        console.log(token,subTotal)
    }
  return (
      
    <StripeCheckout 
    amount={subTotal*100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51Kix6ySBjdoABuMkwgH4oyn7oUhLaVq8VetY6Lp8gEjn168AFMVGA02dYyKaSnRJAQK7GSZArEjwamvxFfyiiscY005prBy52a'
    currency='INR'
    >
        <Button>
            Pay Now
        </Button>
    </StripeCheckout>
    
  )
}

export default Checkout