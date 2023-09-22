import React, { useEffect, useState } from 'react';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

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

    console.log(properties);
    return (
        <div>
            <div className="my-6 mx-8">
                <div className="grid gap-5 lg:grid-cols-3">
                    {
                        records.map((property) => <PropertyCard key={property._id} property={property} />)
                    }
                </div>
            </div>
            <div className="join text-center">
                <button className="join-item btn" onClick={prevPage}>Prev</button>
                {
                    numbers.map((n,i) => (
                        <button className={`join-item btn ${currentPage === n ? 'btn-active': ''}`} key={i} onClick={() => changeCurrentPage(n)}>{n}</button>
                    ))
                }
                <button className="join-item btn" onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export default Properties;