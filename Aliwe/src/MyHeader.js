import React from 'react';
import './MyHeader.css'; 

function MyHeader() {
    return (
      <header>
        <h1>AliWe
          <p>An Engineering Stream Assistant</p>
        </h1>
		
        <nav class="nav-bar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><div class="dropdown">
              <button class="dropbtn">Tests
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Artificial Intelligence</a>
                <a href="#">Mechanical</a>
                <a href="#">Computer Science</a>
                <a href="#">Electronics & Telecommunication</a>
              </div>
              </div></li>
            <li><div class="dropdown">
              <button class="dropbtn">Streams
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Mechanical</a>
                <a href="#">Computer Science</a>
                <a href="#">Electronics & Telecommunication</a>
              </div>
              </div></li>
            <li><a href="#">Ask Away</a></li>
            <li><a href="#">About</a></li>
            <li class="split"><a href="./Login.html">Login</a></li>
            <li class="split"><a href="./SignUp.html">SignUp</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  export default MyHeader;

  