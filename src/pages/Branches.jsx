import React from "react";

export default function Branches() {
    return (
        <main>
            <h1>Our Branches</h1>
            <NewCairoBranch />
            <MaadiBranch />
            <NasrCityBranch />
            <div className="more">
                <h1>See More</h1>
                <FaArrowRight />
            </div>
        </main>
    );
}
