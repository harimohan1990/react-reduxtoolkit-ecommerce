import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_publishable_key');

function PaymentForm() {
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const elements = useElements();
  const stripe = useStripe();
  const cardElement = elements.getElement(CardElement);

  useEffect(() => {
    // Fetch the client secret from your server
    fetch('your_server_endpoint_to_create_payment_intent')
      .then((response) => response.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (error) {
        console.error(error);
      } else {
        // Payment is successful
        console.log('Payment success:', paymentIntent);
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <Elements stripe={stripePromise}>
        <div>
          <CardElement />
          <button
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay'}
          </button>
        </div>
      </Elements>
    </div>
  );
}

export default PaymentForm;
