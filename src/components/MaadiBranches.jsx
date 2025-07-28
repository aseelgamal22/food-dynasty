import React from 'react'

export default function MaadiBranches() {
  return (
      <main className="maincard">
          <div className="branch-details">
              <h2>Maadi Branch</h2>
              <p> <span className='icon'>📍</span> Abdallah Abdel Rady Street, Cairo</p>
              <p> <span className='icon'>🕒</span> 10:00 AM – 1:00 AM </p>
              <p> <span className='icon'>📞</span> 01026489534</p>
              <div className="btnofcard">
                  <div>
                      <button className="call">Call Naw</button>
                  </div>
                  <div>
                      <button className="directions">Directions</button>
                  </div>
              </div>
          </div>
          <div className="branch-images">
              <img src="Ellipse 7.png" alt="" className="img img1" />
              <img src="Ellipse 8.png" alt="" className="img img2" />
              <img src="Ellipse 9.png" alt="" className="img img3" />
              <img src="Ellipse 10.png" alt="" className="img img4" />
          </div>
      </main>
  );
}
