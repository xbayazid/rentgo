import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Loader from '../../components/Loader/Loader';

const Wishlist = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    const {data: properties = [], isLoading} = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loader/>
    }
    return (
        <div className='min-h-screen'>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mx-[7%]">
            {
                properties.map(property => <PropertyCard key={property._id} property={property}/>)
            }
            </div>
        </div>
    );
};

export default Wishlist;