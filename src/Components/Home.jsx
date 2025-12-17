import React from 'react';
import Banner from './HomeComponents/banner';
import LatestAdditions from './HomeComponents/LatestAdditions';
import ExplorebyGenre from './HomeComponents/ExplorebyGenre';
import TopRatedBooks from './HomeComponents/TopRatedBooks';
import AboutThePage from './HomeComponents/AboutThePage';


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <LatestAdditions></LatestAdditions>
        <ExplorebyGenre></ExplorebyGenre>
        <TopRatedBooks></TopRatedBooks>
        <AboutThePage></AboutThePage>
        </>
    );
};

export default Home;