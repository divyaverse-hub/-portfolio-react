import { useState } from 'react'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('')

  const sayHello = () => {
    setGreeting('Thanks for visiting my portfolio!')
  }

  return (
    <>
      <header>
        <h1>Divya</h1>
        <p>B.Tech Student - Mathematics and Computing</p>
        <p>Ramaiah University of Applied Sciences, Bangalore</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm Divya. I'm a Mathematics and Computing student who enjoys
          solving problems and learning new things. I'm currently learning
          web development - HTML, CSS, JavaScript, and React - as part of
          my internship.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Mathematics</li>
          <li>Problem Solving</li>
          <li>Currently learning: React</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <article>
          <h3>To-Do List App</h3>
          <p>A simple web app to add and mark daily tasks as complete.</p>
        </article>
        <article>
          <h3>Personal Blog Page</h3>
          <p>A basic blog layout with a homepage, an about section, and blog post cards.</p>
        </article>
      </section>

      <section>
        <h2>Say Hi</h2>
        <button onClick={sayHello}>Click Me</button>
        <p id="greeting">{greeting}</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: divyaalagondi@gmail.com</p>
      </section>

      <footer>
        &copy; 2026 Divya. All rights reserved.
      </footer>
    </>
  )
}

export default App
