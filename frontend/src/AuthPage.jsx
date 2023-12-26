import React from 'react';
import axios from 'axios';

const AuthPage = (props) => {

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const { value: username } = event.target[0];
      const { data } = await axios.post('http://localhost:3001/authenticate', { username: username });
      props.onAuth({ ...data, secret: username });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome to silly chat</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input type="text" className="auth-input" name="username" />
          <button className="auth-button">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;