import React from 'react'

export default function Contact() {
  return (
      <main className="mainOfContact">
          <Navbar />
          <h1>LET’S ANSWER YOUR QUERIES</h1>
          <div className="mainOfInputs">
              <div className="inputs">
                  <div>
                      <label htmlFor="">Full Name</label>
                      <br />
                      <input type="text" />
                  </div>
                  <div>
                      <label htmlFor="">Email-address</label>
                      <br />
                      <input type="email" name="" id="" />
                  </div>
                  <div>
                      <label htmlFor="">mobileNumber</label>
                      <br />
                      <input type="tel" name="" id="" />
                  </div>
              </div>
              <div className="inputs">
                  <div>
                      <input type="text" />
                  </div>
                  <div>
                      <button type="submit" className="btn">
                          Submit
                      </button>
                  </div>
              </div>
          </div>
          <div className="mainPartTwo">
              <div>
                  <img src="Left_Hand_Holding_Smartphone_Mockup-transformed 1.png" alt="" />
              </div>
              <div>
                  <h1>
                      <span>Download</span> The App
                  </h1>
              </div>
          </div>
      </main>
  );
}
