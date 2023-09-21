import React from 'react';
import heroBg from '../../../assets/images/home-bg.png';

const Hero = () => {
    return (
        <div className='w-full h-screen -mt-12' style={{backgroundImage: `url(${heroBg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
            <div className="flex justify-center items-center h-full flex-col">
                <h1 className='text-5xl font-semibold capitalize text-white'>Let us guide you home</h1>
                <div className='flex gap-4 mt-3 bg-gray-300 p-5 w-[80%] justify-between outline-none focus:outline-none visited:outline-none'>
                    <input type="text" className='w-2/3 px-3 outline-none' placeholder='Enter Property,Location,Landmark...' />
                    <select name="" id="" className='px-7 py-2'>
                        <option value="Select City">Select City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Chittagong">Chittagong</option>
                    </select>
                    <button className='px-7 py-3 bg-purple-800 text-white rounded'>Search</button>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;