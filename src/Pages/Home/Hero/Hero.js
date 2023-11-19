import React, { useState } from 'react';
import heroBg from '../../../assets/images/home-bg.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [selectCity, setSelectCity] = useState(null);
    const [handleDesable, setHandleDesble] = useState(true)
    const navigate = useNavigate();
    const handleCity = (event) => {
        const city = event.target.value;
        setSelectCity(city)
        setHandleDesble(false)
    }
    const handleSearch =(event) => {
        event.preventDefault();

        const form = event.target;
        const city = form.city.value;
        const area = form.area.value;
        const type = form.type.value;

        const search = {
            city,
            area,
            type
        }
        console.log(search)

        // Stringify the object and include it in the query parameter
        const queryString = Object.keys(search).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(search[key])}`).join('&');

        console.log(queryString)
        navigate(`/property/${queryString}`);

        // setSelectProperty(queryString)
        
    }
    return (
        <div className='w-full h-screen -mt-12' style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="flex justify-center items-center h-full flex-col">
                <h1 className='text-5xl font-semibold capitalize text-white'>Let us guide you home</h1>
                <form onSubmit={handleSearch} className='grid grid-cols-4 gap-4 mt-3 bg-gray-300 p-5 w-[80%] justify-between outline-none focus:outline-none visited:outline-none'>
                    {/* <input type="text" className='w-2/3 px-3 outline-none' placeholder='Enter Property,Location,Landmark...' /> */}
                    <select name='city' className="select select-primary w-full" onChange={handleCity}>
                    <option  disabled selected>Select City</option>
                        <option value="Dhaka">Dhaka</option>
                    </select>
                    <select name='area' className="select select-primary w-full" disabled={handleDesable}>
                        <option disabled selected>Select Area</option>
                        {
                            selectCity === 'Dhaka' &&
                            <>
                                <option value="Mirpur">Mirpur</option>
                                <option value="Dhanmondi">Dhanmondi</option>
                                <option value="Uttara">Uttara</option>
                                <option value="Banani">Banani</option>
                            </>
                        }
                    </select>
                    <select name='type' className="select select-primary w-full" disabled={handleDesable}>
                        <option disabled selected>Select House Type</option>
                        <option value="Family">Family</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Family & Bachelor">Family & Bachelor</option>
                    </select>

                    <button className='px-7 py-3 bg-purple-800 text-white rounded' disabled={handleDesable}>Search</button>
                </form>
            </div>

        </div>
    );
};

export default Hero;