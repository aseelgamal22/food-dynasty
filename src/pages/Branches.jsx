import React from "react";
import NewCairoBranches from "../components/NewCairoBranches";
import MaadiBranches from "../components/MaadiBranches";
import NasrCityBranches from "../components/NasrCityBranches"


export default function Branches() {
    return (
        <main>
            <h1>Our Branches</h1>
            <NewCairoBranches />
            <MaadiBranches />
            <NasrCityBranches />
            <div className="more">
                <h1>See More</h1>
                
            </div>
        </main>
    );
}
