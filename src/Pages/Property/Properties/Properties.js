import React, { useEffect, useState } from 'react';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import { useParams } from 'react-router-dom';

const Properties = () => {
    const {value} = useParams()
    const [selectPorperty, setSelectProperty] = useState(null);
    const [selectCity, setSelectCity] = useState(null);
    const [handleDesable, setHandleDesble] = useState(true)
    const handleCity = (event) => {
        const city = event.target.value;
        setSelectCity(city)
        setHandleDesble(false)
    }

    useEffect(() => setSelectProperty(value), [value])
// for(let i = 0; i<1; i++){
//     if(value !== undefined){
//         setSelectProperty(value);
//     }
//     i++;
// }
    console.log(selectPorperty)

    const {data: properties = [], isLoading, refetch} = useQuery({
        queryKey: ['proerty'],
        queryFn: async () => {
            const res = await fetch(`https://rentgo-server.vercel.app/properties?${selectPorperty}`);
            const data = await res.json();
            return data;
        }
    })

    

    console.log(properties)

    if(selectPorperty){
        refetch();
    }

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = properties.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(properties.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const prevPage = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage -1);
        }
    }

    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    }

    const nextPage = () => {
        if(currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
        }
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

        setSelectProperty(queryString)
        
    }

    if(isLoading){
        return <Loader/>
    }
    return (
        <div>
            <div className="flex justify-center items-center h-full flex-col">
                <h1 className='text-5xl font-semibold capitalize text-white'>Let us guide you home</h1>
                <form className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 shadow-xl p-5 w-[80%] justify-between outline-none focus:outline-none visited:outline-none' onSubmit={handleSearch}>
                    {/* <input type="text" className='w-2/3 px-3 outline-none' placeholder='Enter Property,Location,Landmark...' /> */}
                    <select className="select select-primary w-full" name='city' onChange={handleCity}>
                    <option disabled selected>Select City</option>
                        <option value="Dhaka">Dhaka</option>
                    </select>
                    <select className="select select-primary w-full" name='area' disabled={handleDesable}>
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
                    <select className="select select-primary w-full" name='type' disabled={handleDesable}>
                        <option disabled selected>Select House Type</option>
                        <option value="Family">Family</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Family & Bachelor">Family & Bachelor</option>
                    </select>

                    <input type='submit' value="Search" className='px-7 py-3 bg-purple-800 text-white rounded cursor-pointer' disabled={handleDesable} />
                </form>
            </div>
            <div className="my-6 mx-8">
                <div className="grid gap-5 lg:grid-cols-3">
                    {
                        records.map((property) => <PropertyCard key={property._id} property={property} />)
                    }
                </div>
            </div>
            <div className='text-center'>
            <div className="join mx-auto">
                <button className="join-item btn hover:bg-purple-800 hover:text-white duration-500 transition-all" onClick={prevPage}>Prev</button>
                {
                    numbers.map((n,i) => (
                        <button className={`join-item btn ${currentPage === n ? 'btn-active bg-purple-800 text-white': ''}`} key={i} onClick={() => changeCurrentPage(n)}>{n}</button>
                    ))
                }
                <button className="join-item btn hover:bg-purple-800 hover:text-white duration-500 transition-all" onClick={nextPage}>Next</button>
            </div>
            </div>
        </div>
    );
};

export default Properties;