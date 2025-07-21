import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!name) {
      setError('Please enter your name');
      return;
    }
    if (!email) {
      setError('Please enter your email');
      return;
    } else if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    if (!resume) {
      setError('Please upload your resume');
      return;
    }

    // If validation passes
    console.log({ name, email, phone, resume });
    alert('Application submitted successfully!');
    setName('');
    setEmail('');
    setPhone('');
    setResume(null);
    setError('');
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <h2 style={{ textAlign: 'center' }}>Job Application</h2>
      
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name: *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email: *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone: </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Resume: *</label>
          <input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            style={{ width: '100%' }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;