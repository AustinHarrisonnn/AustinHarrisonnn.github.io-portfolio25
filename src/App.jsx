import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <section class="spikes">
      <header className="header">
        <h2>
          <span className="color1">A</span>
          <span className="color2">u</span>
          <span className="color3">s</span>
          <span className="color4">t</span>
          <span className="color5">i</span>
          <span className="color6">n</span>
          <span className="color7"> </span>
          <span className="color8">H</span>
          <span className="color9">a</span>
          <span className="color10">r</span>
          <span className="color11">r</span>
          <span className="color12">i</span>
          <span className="color13">s</span>
          <span className="color14">o</span>
          <span className="color15">n</span>
        </h2>
        <nav className="nav-links">
          <a href="https://github.com/AustinHarrisonnn"><img id='github' src='src\assets\icons8-github-85.png'/></a>
          <a href="https://github.com/AustinHarrisonnn"><img id='linkedin' src='src\assets\icons8-linkedin-85.png'/></a>
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
      <br></br>
      </section>
      <div className="project-container">
        <div className="project-header">
          <h2>Projects</h2>
        </div>
        <ul>
          <li>
            <div className="project-card">
              <div className="card-header">
                <img src="src\assets\tiktactoe.PNG" />
              </div>
              <div className="card-body">
                <h2>description...</h2>
                <p>yap yap yap</p>
                <button>Take a Look</button>
              </div>
            </div>
          </li>
          <li>
            <div className="project-card">
              <div className="card-header">
                <img src="src\assets\weather.PNG" />
              </div>
              <div className="card-body">
                <h2>description...</h2>
                <p>yap yap yap</p>
                <button>Take a Look</button>
              </div>
            </div>
          </li>
          <li>
            <div className="project-card">
              <div className="card-header">
                <img src="src\assets\vdaypic.PNG" />
              </div>
              <div className="card-body">
                <h2>description...</h2>
                <p>yap yap yap</p>
                <button>Take a Look</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <br></br>
    </div>
  )
}

export default App
