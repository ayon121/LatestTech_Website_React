import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Providers/Authproviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const totaPrice = 40
    const [clientSecret, SetclientSecret] = useState('')
    const { user} = useContext(AuthContext)

    useEffect( ()=> {
        axiosSecure.post('/create-payment-intent' , {price : totaPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            SetclientSecret(res.data.clientSecret)
        })
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]');
            toast( error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        // confirm payment
        const {paymentIntent , error : confirmerror} = await stripe.confirmCardPayment(clientSecret  , {
            payment_method : {
                card : card,
                billing_details : {
                    email : user.email || 'anonymous'
                }
            }
        })

        if(confirmerror) {
            console.log('confirm error' , confirmerror);
        }
        else{
            console.log(paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                toast('Subscribed Successfully')
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn " type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <ToastContainer />

        </form >
    );
};

export default CheckoutForm;