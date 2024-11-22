import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;