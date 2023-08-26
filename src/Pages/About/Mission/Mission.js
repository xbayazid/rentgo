import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
    return (
        <div className='mx-[7%] my-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
                <div>
                <h1 className='text-2xl lg:text-4xl font-bold'>Mission</h1>
                <p className='text-justify mt-4 mb-9 lg:w-2/3'>Mazim saepe instructior mel ei, sanctus assueverit per at, ad eam veri putent nonumes. Id duo modo quidam maluisset, ut mel tractatos intellegat. Ea electram repudiandae qui. Ea soluta meliore accumsan vel, est veniam populo ea. Mel habeo elitr dissentiunt id, oratio fabulas lobortis te pri.</p>
                    <Link className='bg-orange-400 px-7 py-5 font-semibold'>View more</Link>
                </div>
                <div>
                    <img className='rounded' src="https://i.ibb.co/hMm1myz/about-us-img3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Mission;