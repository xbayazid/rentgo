import React from 'react';
import AboutGrid from './AboutGrid/AboutGrid';
import Profit from './Profit/Profit';
import Mission from './Mission/Mission';
import Planning from './Planning/Planning';
import Offer from './Offer/Offer';
import Explore from './Explore/Explore';

const About = () => {
    return (
        <div>
            <AboutGrid/>
            <Profit/>
            <Mission/>
            <Planning/>
            <Offer/>
            <Explore/>
        </div>
    );
};

export default About;