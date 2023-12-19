import axios from 'axios';

const handlePayment = async () => {
  try {

    const response = await axios.post('http://localhost:3001/api/payment', {
      userDetails,
      paymentDetails,
    });
    console.log('Payment Response:', response.data);
  } catch (error) {
    console.error('Payment failed:', error.message);
  }
};

