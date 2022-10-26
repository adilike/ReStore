import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutPage from './CheckoutPage'

const stripePromise = loadStripe("pk_test_51LvyYxAVqHzOhOFIHAblSLYTfXKkupXYLKkVMK81SkRd0pqwEBINgyF0dQFXsl2xKOi4G6tHov4lt4rvzPyDrvgp00Tocc2t81")

const CheckoutWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
        <CheckoutPage />
    </Elements>
  )
}

export default CheckoutWrapper