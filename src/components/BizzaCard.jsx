import React from 'react'

import { MdAddShoppingCart } from "react-icons/md";

export default function PizzaCard() {
  return (
    <main>
        <div className='thecard'>
            <img src="BBQ Chicken Pizza.png" alt="" />
            <h4>BBQ Chicken Pizza</h4>
            <div className='p_a'>
                <p>30$</p>
                <button className='pizzacardbtn'> <MdAddShoppingCart /> Add to Cart</button>
            </div>
        </div>
    </main>
  )
}
