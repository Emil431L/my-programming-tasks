import React, { useState, useEffect } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); // с пустым массивом, чтобы выполнялось один раз при загрузке

  const handleAuth = () => {
    if (password === confirmPassword) {
      const newUser = { email, nickname, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser); 
      setError('');
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Enter nickname"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={() => {}}>Register</button> {/* пока ничего не делает */}
    </div>
  );
};

export default Auth;
