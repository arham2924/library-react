import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/featured";
import Discounted from "../components/Discounted";
import Explore from "../components/explore";

const Home = () => {
    return (
        <>
         <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    )
}

export default Home