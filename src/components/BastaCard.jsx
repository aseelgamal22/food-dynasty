import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";


export default function BastaCard() {
  return (
    <main>
        <div className='thecard'>
            <img src="Shrimp Pasta Alfredo.png" alt="" />
            <h4>Shrimp Pasta Alfredo</h4>
            <div className='p_a'>
                <p>30$</p>
                <button className='pastacardbtn'><MdAddShoppingCart /> Add to Cart</button>
            </div>
        </div>
    </main>
  )
}
