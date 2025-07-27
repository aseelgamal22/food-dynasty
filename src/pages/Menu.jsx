import React from "react";
import "../style/menu/_menu.scss";
import BeefBurgerCard from "../components/BeefBurgerCard";
import PizzaCard from "../components/PizzaCard";
import PastaCard from "../components/PastaCard";
import ChefRecommended from "../components/ChefRecommended";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "../components/Navbar";

export default function Menu() {
    return (
        <main>
            <div className="t_s">
                <h1>view Our Menu</h1>
                <div>
                    <div className="search-svg">
                        <AiOutlineSearch />
                    </div>
                    <div className="search-inbut">
                        <input type="search" name="" id="" className="search" placeholder="search" />
                    </div>
                </div>
            </div>
            <h1>Burger</h1>
            <div className="backgroundofmenu">
                <BeefBurgerCard />
                <BeefBurgerCard />
                <BeefBurgerCard />
                <BeefBurgerCard />
                <BeefBurgerCard />
                <BeefBurgerCard />
            </div>
            <h1>Pizza</h1>
            <div className="backgroundofmenu">
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
            <h1>Pasta</h1>
            <div className="backgroundofmenu">
                <PastaCard />
                <PastaCard />
                <PastaCard />
                <PastaCard />
                <PastaCard />
                <PastaCard />
            </div>
            <ChefRecommended />
        </main>
    );
}
