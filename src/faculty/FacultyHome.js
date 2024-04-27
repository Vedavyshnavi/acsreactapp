import React from 'react'
import './faculty.css'

export default function FacultyHome() {
  return (
    <div className="home-background">
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome Faculty</h1>
    <p style={{ fontSize: '1.5rem' }}>“With great power comes great responsibility.”</p>
    <p style={{ fontSize: '1.5rem' }}>“Passion Led us here.”</p>
  </div>
  </div>
  )
}