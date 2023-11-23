import React from 'react';
import { HiOutlineCheckCircle, HiOutlineLocationMarker, HiOutlineStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const MyPropertyCard = ({ property, setAction, setPropertyId, setPropertyName }) => {

    const { _id, image, propertyName, location, rent, bedroom, bath, garage, size, isRent } = property;
    return (
        <div>
            <div className="rounded overflow-hidden shadow-lg grid grid-cols-3 ">
                <div>
                    <img
                        className="w-[350px]"
                        src={image} // Replace this URL with your actual image URL
                        alt="Card"
                    />
                </div>
                <div className="px-6 py-4">
                    <Link to={`/propertyDetails/${_id}`} className="text-xl hover:text-blue-700">{propertyName}</Link>
                    <div className='mt-3'>
                        <p className='flex items-center gap-2'><HiOutlineLocationMarker className='text-blue-800' /><span className='text-gray-600'>{location}</span></p>
                        <div className="my-2">
                            <div className="grid grid-cols-2">
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{bedroom} Bedroom</p>
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{size} sq ft</p>
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{bath} Bath</p>
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{garage} Garage</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="grid lg:grid-cols-2">
                                <p className='flex items-center gap-2'><HiOutlineStar className='text-orange-300' />4.5</p>
                                <p className='text-xl font-medium text-blue-800'>৳ {rent}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-right mt-5 mr-10'>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {
                        isRent === true ? <button className="btn btn-outline btn-primary" onClick={() =>{ document.getElementById('action-modal').showModal(); setAction('hide'); setPropertyId(_id); setPropertyName(propertyName)} }>Hide Property</button>: <button className="btn btn-outline btn-success" onClick={() => { document.getElementById('action-modal').showModal(); setAction('active'); setPropertyId(_id); setPropertyName(propertyName)}}>Active Property</button>
                    }
                    
                
                </div>
            </div>
        </div>
    );
};

export default MyPropertyCard;