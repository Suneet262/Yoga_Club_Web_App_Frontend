import axios from 'axios';

const handlePayment = async () => {
  try {

    const response = await axios.post('https://yoga-club.onrender.com/api/payment', {
      userDetails,
      paymentDetails,
    });
    console.log('Payment Response:', response.data);
  } catch (error) {
    console.error('Payment failed:', error.message);
  }
};

