

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

// import.meta.env.VITE_Payment_key
const stripePromise = loadStripe('pk_test_51OEnb1KGlZmWRjB9BJiGpajRjL2fQllBYvPkEBW06XTNoWVV7wzhY1cdNk7BFO8Y7Z3poLacjbbjiG77z9D7DTcL000RNXgo9G');
console.log(import.meta.env.VITE_Payment_key);
const Payment = () => {
   
    return (
        <div className="max-w-5xl px-3 mx-auto">
            <div className='flex justify-center mt-4 mb-4'>
                <h1 className='text-4xl md:text-5xl font-bold'>Payment</h1>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;