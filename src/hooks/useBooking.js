import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from '../firebase/config';

const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitBooking = async (bookingData) => {
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      await addDoc(collection(db, 'appointments'), {
        ...bookingData,
        createdAt: serverTimestamp(),
        status: 'pending',
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  return { loading, success, error, submitBooking };
};

export default useBooking;
