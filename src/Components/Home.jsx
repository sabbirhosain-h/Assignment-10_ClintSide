import React, { useContext } from 'react';
import Banner from './HomeComponents/banner';
import LatestAdditions from './HomeComponents/LatestAdditions';
import ExplorebyGenre from './HomeComponents/ExplorebyGenre';
import TopRatedBooks from './HomeComponents/TopRatedBooks';
import AboutThePage from './HomeComponents/AboutThePage';
import { ThemeContext } from '../Context/AuthContext';


const Home = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={`${isDark ? "bg-slate-800 transition-colors" : "bg-white transition-colors"}`}>
        <Banner></Banner>
        <LatestAdditions></LatestAdditions>
        <ExplorebyGenre></ExplorebyGenre>
        <TopRatedBooks></TopRatedBooks>
        <AboutThePage></AboutThePage>
        </div>
    );
};

export default Home;