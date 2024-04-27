import React from 'react';
import profile from './home.png';


export default function Home() {
  return (
    <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100vh' }}>
      <img src={profile} alt='profile' width='100%' height='100%' />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Our Academic  Student Course Registration System</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Empowering students to manage their academic journey with ease.</p>
        <button style={{ padding: '1rem 2rem', fontSize: '1.2rem', fontWeight: 'bold', backgroundColor: '#f857a8', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Get Started</button>
      </div>
    </div>
  );
}