import React, {  useContext, } from 'react';
import Banner from './HomeComponents/banner';
import LatestAdditions from './HomeComponents/LatestAdditions';
import ExplorebyGenre from './HomeComponents/ExplorebyGenre';
import TopRatedBooks from './HomeComponents/TopRatedBooks';
import AboutThePage from './HomeComponents/AboutThePage';
import { DataContext, ThemeContext } from '../Context/AuthContext';



const Home = () => {
    const {isDark} = useContext(ThemeContext);
   
    const {books} = useContext(DataContext)
    
    


    
    return (
        <div className={`${isDark ? "dark" : "bg-white transition-colors"}`}>
        <Banner></Banner>
        <LatestAdditions books={books} ></LatestAdditions>
        <ExplorebyGenre></ExplorebyGenre>
        <TopRatedBooks></TopRatedBooks>
        <AboutThePage></AboutThePage>
        </div>
    );
};

export default Home;