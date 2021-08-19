import React from 'react';

function App() {
  return (
    <div className="body">
      <div className="card">
        <img src="../public/images/illustration-hero.svg" alt="illustration-hero" />
        <h3>Order Summary</h3>

        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!

        Annual Plan
        $59.99/year

        Change
        <div className="buttons">
          <button>Proceed to Payment</button>
          <button>Cancel Order</button>
        </div>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
