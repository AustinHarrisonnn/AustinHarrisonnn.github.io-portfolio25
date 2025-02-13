import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>Austin Harrison ✿</h2>
        <nav className="nav-links">
          <a href="https://github.com/AustinHarrisonnn">Github</a>
          <a href="https://github.com/AustinHarrisonnn">LinkedIn</a>
        </nav>
      </header>
      <div className="photo-body">
        <div className="intro">
          <h1>Senior student at Florida Atlantic University interested in software engineering & web development</h1>
        </div>
        <div className="image-frame">
          <img src="src\assets\profile.JPG" alt="Me in spain!" />
        </div>
      </div>
      <div className="project-container">
        <div className="project-header">
          <h2>Projects</h2>
        </div>
      </div>
    </div>
  )
}

export default App
