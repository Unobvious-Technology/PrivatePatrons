import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header--background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className="App-title">PrivatePatrons</h1>
          <p className="App-intro">
            The Inbox for Sex Workers<br/>
            Launching in 2018
          </p>
          <div className="App-intro-buttons">
            <a className="button button--primary" href="https://docs.google.com/forms/d/e/1FAIpQLSf2Nc6LWhQksoHJ87jH5j9_PaXJ0oF83vsXkI64ERaRlkESBw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Request Invite</a>
            <a className="button" href="#content">Learn More</a>
          </div>
        </header>
        <section id="content">
          <h2><span>Simplify Your Conversations</span> <span>With Potential Clients</span></h2>
          <div class="Media">
            <div className="Media-figure">
              <svg viewBox="0 0 24 24">
                <path fill="#7755CC" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
              </svg>
            </div>
            <p class="Media-body">
              Make the most of your time by automagically responding and filtering some of your enquiries. Don't waste time with time wasters.
            </p>
          </div>
          <div class="Media">
            <div className="Media-figure">
              <svg viewBox="0 0 24 24">
                <path fill="#7755CC" d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" />
              </svg>
            </div>
            <p class="Media-body">
              Enhance your privacy and safety with smart tools and secure technology.
            </p>
          </div>
          <div class="Media">
            <div className="Media-figure">
              <svg viewBox="0 0 24 24">
                <path fill="#7755CC" d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z" />
              </svg>
            </div>
            <p class="Media-body">
              Designed to be easy to use and work where you work, whether that's on your laptop or your phone.
            </p>
          </div>
        </section>
        <footer id="footer">
          Made in Berlin, Germany<br/>
          <a href="https://unobvious.technology" target="_blank" rel="noopener noreferrer">Unobvious Technology</a> &copy; 2018
        </footer>
      </div>
    );
  }
}

export default App;
