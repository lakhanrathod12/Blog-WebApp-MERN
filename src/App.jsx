import React from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import lab from './assets/images/main.jpeg';
import course1 from './assets/images/course-1.jpeg';
import course2 from './assets/images/course-2.jpeg';
import course3 from './assets/images/course-3.jpeg';


function App() {
  return (
    <div className="App">
      <nav className="sticky-nav">
        <div className="logo-img">
          {/* <img className='logo' src={logo} /> */}
        </div>
        <ul className='header'>
          <li>Courses</li>
          <li>Become an Instructor</li>
          <li>BLOG</li>
          <li>LOGIN / REGISTER</li>
        </ul>
      </nav>
      <main>
        <img src="https://d3nwjxsdgvupoe.cloudfront.net/img/labdoxbanner.webp" alt="this slowpoke moves" style={{width: '100%', height: 'auto'}} />
      </main>
      <form className='select-card'>
      <div className="select-container" id='category'>
        <label htmlFor="select1">Category:</label>
        <select id="select1">
          <option value="option1">Select Category</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="select-container" id='city'>
        <label htmlFor="select2">City:</label>
        <select id="select2">
          <option value="option1">Select City</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="select-container" id='level'>
        <label htmlFor="select3">Level</label>
        <select id="select3">
          <option value="option1">Select Level</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="select-container" id='btn'>
        <button type='submit'>check your course</button>
      </div>
      </form>
      <section className="courses">
        <div className="card">
        <img src={course1} alt="" />
        <a>Online 3D Printing Course</a>
        <p>3D Printing has transformed into one of the hottest technologies of the decade. This decade has been 3D printing expands its scope to a..</p>
        </div>
        <div className="card">
          <img src={course2} alt="" />
          <a>Online Course on Amazon alexa skils</a>
          <p><p>3D Printing has transformed into one of the hottest technologies of the decade. This decade has been 3D printing expands its scope to a..</p></p>
        </div>
        <div className="card">
          <img src={course3} alt="" />
          <a>Process Instrumentation and Control online Training</a>
          <p><p>3D Printing has transformed into one of the hottest technologies of the decade. This decade has been 3D printing expands its scope to a..</p></p>
            </div>
      </section>

    </div>
  );
}

export default App;
