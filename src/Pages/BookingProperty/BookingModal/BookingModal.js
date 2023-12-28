import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const BookingModal = ({ property, setHouse }) => {
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, "PP");

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const propertyName = property.propertyName;
        const authorEmail = property.ownerEmail;
        const name = user?.displayName;
        const email = user?.email;
        const phone = form.phone.value;
        const nid = form.nid.value;
        const tourDate = date;
        const propertyId = property._id;
        const propertyImage = property.image;

        const booking = {
            propertyId,
            propertyName,
            name,
            email,
            phone,
            authorEmail,
            nid,
            tourDate,
            propertyImage
        }

        // console.log(booking)
        // fetch('https://rentgo-server.vercel.app/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             setHouse(null);
        //             toast.success('Booking Confirmed.')
        //         }
        //         else {
        //             toast.error(data.message)
        //         }

        //     })

        fetch('https://rentgo-server.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setHouse(null)
                toast.success('Booking Confirmed')
            }
            else{
                toast.error(data.message);
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    {/* <h3 className="text-lg font-bold">{name}</h3> */}
                    <form onSubmit={handleBooking} className="grid gap-5 mt-12">
                        <p className="text-red-500">Please provide all of your information according to your Identification Card</p>
                        <input
                            type="text"
                            disabled
                            value={property.propertyName}
                            className="input input-bordered w-full"
                        />
                        <input type="text" name="name" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input type="email" name="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" required/>
                        <input type="text" name="nid" placeholder="NID / Passport Number" className="input input-bordered w-full" required/>
                        <p className='font-semibold'>Please select your requested Apartment tour date:</p>
                        <div className='mx-auto'>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                        </div>
                        <input
                            className="btn btn-accent w-full"
                            type="submit"
                            value="Book Now"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;