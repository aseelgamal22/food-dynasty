import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

export default function BeefBurgerCard() {
    return (
        <main>
            <div className="thecard">
                <img src="Beef Burger.png" alt="" />
                <h4>Beef Burger</h4>
                <div className="p_a">
                    <p>30$</p>
                    <button className="burgercardbtn">
                        {" "}
                        <MdAddShoppingCart /> Add to Cart
                    </button>
                </div>
            </div>
        </main>
    );
}
