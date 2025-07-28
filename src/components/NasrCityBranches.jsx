import React from 'react'

export default function NasrCityBranches() {
  return (
      <main className="maincard">
          <div className='branch-details'>
              <h2>Nasr City Branch</h2>
              <p> <span className='icon'>📍</span> 9 Al-Alay Street, Cairo </p>
              <p> <span className='icon'>🕒</span> 10:00 AM – 1:00 AM </p>
              <p> <span className='icon'>📞</span> 01133306789</p>
              <div className='btnofcard'>
              <div><button className="call">Call Naw</button></div>
              <div><button className="directions">Directions</button></div>
              </div>
          </div>
          <div className='branch-images'>
              <img src="Ellipse 11.png" alt="" className='img img1'/>
              <img src="Ellipse 12.png" alt="" className='img img2'/>
              <img src="Ellipse 13.png" alt="" className='img img3'/>
              <img src="Ellipse 14.png" alt="" className='img img4'/>
          </div>
      </main>
  );
}
