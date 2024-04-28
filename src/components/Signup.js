import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase/firebaseConfig';
import './css/Signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user account using Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, fullName, phoneNumber); // Update createUserWithEmailAndPassword to accept additional parameters
      // Add user data to Firestore or perform other actions if needed
      console.log('User signed up:', userCredential.user.uid);
      // Redirect to home page after successful signup
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='signup-container'>
      {/* <h2>Sign Up</h2> */}
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
