import React from 'react';
import Hero from '../Hero/Hero';
import Featured from '../Featured/Featured';
import FindProperties from '../FindProperties/FindProperties';
import Choose from '../Choose/Choose';
import Consultation from '../Consultation/Consultation';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Featured/>
            <FindProperties/>
            <Choose/>
            <Feedback/>
            <Consultation/>
        </div>
    );
};

export default Home;