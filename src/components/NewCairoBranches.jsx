import React from "react";


export default function NewCairoBranches() {
    return (
        <main className="maincard">
            <div className="branch-details">
                <h2>New Cairo Branch</h2>
                <p> <span className="icon">📍</span> El Sebaei Street, next to XYZ Mall, Cairo</p>
                <p> <span className="icon">🕒</span> 10:00 AM – 1:00 AM</p>
                <p> <span className="icon">📞</span> 01234567890</p>
                <div className="btnofcard">
                    <button className="call">Call Now</button>
                    <button className="directions">Directions</button>
                </div>
            </div>

            <div className="branch-images">
                <img src="Ellipse 4.png" alt="" className="img img1" />
                <img src="Ellipse 5.png" alt="" className="img img2" />
                <img src="Ellipse 3.png" alt="" className="img img3" />
                <img src="Ellipse 6.png" alt="" className="img img4" />
            </div>
        </main>
    );
}
