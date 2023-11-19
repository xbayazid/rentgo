import React from 'react';
import Hero from '../Hero/Hero';
import Featured from '../Featured/Featured';
import FindProperties from '../FindProperties/FindProperties';
import Choose from '../Choose/Choose';
import Consultation from '../Consultation/Consultation';
import Feedback from '../Feedback/Feedback';
import PropertyValuation from '../PropertyValuation/PropertyValuation';
import SingleMap from '../../../components/Map/SingleMap';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Featured/>
            <FindProperties/>
            <Choose/>
            <Feedback/>
            <PropertyValuation/>
            {/* <Consultation/> */}
            {/* <SingleMap/> */}
        </div>
    );
};

export default Home;