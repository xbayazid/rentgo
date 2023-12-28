import React, { useContext, useState } from 'react';
// import banner from '../../../assets/images/property_header_1.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import BookNowButton from '../../../components/BookNowButton/BookNowButton';
import BookingModal from '../../BookingProperty/BookingModal/BookingModal';
import FavouriteButton from '../../../components/FavouriteButton/FavouriteButton';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const PropertyDetailsBanner = ({ property }) => {
    const {user} = useContext(AuthContext);
    const { _id, image, propertyName, location, authorImage, ownerName, rent } = property;

    const [house, setHouse] = useState(null);

    const addWishList = () =>{
        const propertyId = _id;
        const email = user?.email;

        const list = {
            propertyId,
            email
        }

        fetch('https://rentgo-server.vercel.app/wishlist', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(list)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('Added to Wishlist')
            }
            else{
                toast.error(data.message);
            }
        })
    }

    return (
        <div>
            <div className="h-[65vh] relative mb-[100px] px-[7%]" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='w-[85%] mx-auto bg-white p-5 rounded absolute -bottom-[80px] shadow-md flex justify-between items-center'>
                    <div >
                        <h2 className="text-3xl font-semibold">{propertyName}</h2>
                        <p className='flex items-center gap-2 my-3'><HiOutlineLocationMarker className='text-blue-800' /><span className='text-gray-600'>{location}</span></p>
                        <div className='flex gap-3 items-center'>
                            <img src={authorImage} alt="" className='rounded-full h-12 w-12' />
                            <h5 className="text-xl font-semibold">{ownerName}</h5>
                        </div>
                    </div>
                    <div>
                        <p>Stats From / <span className='text-2xl font-semibold text-blue-500'>৳{rent}</span></p>
                        <div className='flex gap-3 items-center mt-5'>
                        <button className="cursor-pointer" onClick={addWishList}>
                        <FavouriteButton ></FavouriteButton>
                        </button>
                        <label
                            htmlFor="booking-modal"
                            className=""
                            onClick={() => setHouse(property)}
                        >
                            <BookNowButton>Book Now</BookNowButton>
                        </label>
                        </div>
                    </div>
                </div>
            </div>

            {
                house &&
                <BookingModal
                    property={house}
                    setHouse={setHouse}
                >

                </BookingModal>
            }
        </div>
    );
};

export default PropertyDetailsBanner;