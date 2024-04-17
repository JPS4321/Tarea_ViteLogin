import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === 'diego' && password === '123') {
      console.log('Usuario autenticado con éxito');
      navigate('/Home');
    } else {
      alert('Usuario o contraseña equivocado');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Bienvenido</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.button} type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    color: '#ffffff',
    textAlign: 'center',
    boxSizing: 'border-box',
    padding: '20px',
    margin: '0',
  },
  card: {
    width: '350px',
    padding: '40px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: '20px',
    color: 'black',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor: "white",
    color: "black",
  },
  button: {
    width: '100%',
    padding: '15px',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#5cb85c',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
  }
};

export default Login;
