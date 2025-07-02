import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div >



      <div className='navbar'>


        <div className='food-dynasty'>
          <img src="./Food-Dynasty.png" alt="" />
        </div>

        <div className='nav'>

          <Link to={"/"}>Home</Link>
          <Link to={"/Menu"}>Menu</Link>
          <Link to={"/Branches"}>Branches</Link>

          <Link to={"/Contact"}>Contact</Link>



        </div>
        <div>
          <img src="\src\cart.png" alt="" />
        </div>
      </div>



    </div>
  )
}
