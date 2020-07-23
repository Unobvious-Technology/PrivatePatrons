// import styled from "styled-components";

// const Title = styled.h1`
//   color: red;
//   font-size: 50px;
// `;

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header--background">
          <div className="App-header--background-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="App-header--background-bottom">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <h1 className="App-title">PrivatePatrons</h1>
        <h2 className="App-intro">The Inbox for Sex Workers</h2>
      </header>
      <section id="content">
        <h3>
          <span>Streamline Your Conversations</span>{" "}
          <span>With Potential Clients</span>
        </h3>
        <div className="Media">
          <div className="Media-figure">
            <svg viewBox="0 0 24 24" height="52px" width="52px">
              <path
                fill="#7755CC"
                d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
              />
            </svg>
          </div>
          <p className="Media-body">
            Save time with magical filtering of your enquiries. <br />
            Let automation handle the standard questions and collection of
            required information. <br />
            Don't waste time with time wasters.
          </p>
        </div>
        <div className="Media">
          <div className="Media-figure">
            <svg viewBox="0 0 24 24" height="52px" width="52px">
              <path
                fill="#7755CC"
                d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z"
              />
            </svg>
          </div>
          <p className="Media-body">
            Improve your privacy and safety with smart tools and secure
            technology. All your data is{" "}
            <a
              href="https://protonmail.com/blog/what-is-end-to-end-encryption/"
              target="_blank"
              rel="noopener noreferrer"
            >
              end-to-end encrypted
            </a>
            . <br />
            We can't read your messages.
          </p>
        </div>
        <div className="Media">
          <div className="Media-figure">
            <svg viewBox="0 0 24 24" height="52px" width="52px">
              <path
                fill="#7755CC"
                d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z"
              />
            </svg>
          </div>
          <p className="Media-body">
            Designed to work where you work. Easy to use on your phone on the
            way to an appointment, or on your laptop/computer from the comfort
            home or favourite café.
          </p>
        </div>
      </section>
      <footer id="footer">
        Made in Berlin, Germany
        <br />
        <a
          href="https://unobvious.technology"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unobvious Technology
        </a>{" "}
        &copy; 2020
      </footer>
    </div>
  );
}
