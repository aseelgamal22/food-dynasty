import React from "react";

import BeefBurgerCard from "../components/BeefBurgerCard";
import BizzaCard from "../components/BizzaCard";
import BastaCard from "../components/BastaCard";
import ChefRecommended from "../components/ChefRecommended";
import { AiOutlineSearch } from "react-icons/ai";


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
                <BizzaCard />
                <BizzaCard />
                <BizzaCard />
                <BizzaCard />
                <BizzaCard />
                <BizzaCard />
            </div>
            <h1>Pasta</h1>
            <div className="backgroundofmenu">
                <BastaCard />
                <BastaCard />
                <BastaCard />
                <BastaCard />
                <BastaCard />
                <BastaCard />
            </div>
            <ChefRecommended />
        </main>
    );
}
