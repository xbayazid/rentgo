import React, { useContext } from 'react';
import { IoCallSharp } from "react-icons/io5";
import { AuthContext } from '../../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import toast from 'react-hot-toast';

const TransportBanner = () => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if(loading){
        return <Loader/>
    }

    const handleTransportBooking = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const userEmail = user?.email;
        const email = form.email.value;
        const date = form.date.value;
        const shiftFrom = form.shiftFrom.value;
        const shiftTo = form.shiftTo.value;

        const booking = {
            name,
            phone,
            userEmail,
            email,
            date,
            shiftFrom,
            shiftTo
        }

        console.log(booking);

        if(!user){
            navigate('/login');
        }
        else{
            fetch('https://rentgo-server.vercel.app/transportBooking', {
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
                toast.success('Booking Confirmed');
                form.reset();
            }
            else{
                toast.error(data.message);
            }
        })
        }
    }

    return (
        <div>
            <div className="md:py-10 md:bg-[url('https://i.ibb.co/SR2JZ4z/truck.jpg')] bg-cover bg-left bg-no-repeat md:px-[7%] md:grid grid-cols-1 md:grid-cols-2 md:items-center">
                <div className="h-[70vh] bg-[url('https://i.ibb.co/SR2JZ4z/truck.jpg')] md:bg-none bg-cover bg-left bg-no-repeat px-[7%] md:px-0 flex items-center">
                    <div>
                    <h1 className="text-4xl md:text-6xl font-semibold text-blue-600">Enjoy hassle-free <br /> shifting</h1>
                    <fieldset className='w-fit text-white px-5 pb-2 border-2 rounded-3xl cursor-pointer hover:bg-error hover:border-error transition-all duration-500 group'>
                        <legend>Hotline</legend>
                        <p className='flex items-center gap-3 text-xl'><IoCallSharp /> | +8801975773092</p>
                    </fieldset>
                    </div>
                </div>
                <div className='px-[7%] -mt-10 md:mt-0'>
                    <form onSubmit={handleTransportBooking} className='bg-white rounded-md px-5 py-10 shadow-md' id='transport-booking'>
                        <h1 className="text-2xl font-semibold">Contact us to ease your shifting process</h1>
                        <p>Submit the form to book a shifting slot for Transport</p>
                        <fieldset className='w-full px-5 pb-2 border-2 border-blue-500 rounded-xl mt-2'>
                            <legend className='px-1 text-lg font-semibold'>Name </legend>
                            <input type="text" className='w-full focus:outline-none' name="name" id="" required />
                        </fieldset>
                        <fieldset className='w-full px-5 pb-2 border-2 border-blue-500 rounded-xl mt-2'>
                            <legend className='px-1 text-lg font-semibold'>Phone Number </legend>
                            <input type="text" className='w-full focus:outline-none' name="phone" id="" required />
                        </fieldset>
                        <fieldset className='w-full px-5 pb-2 border-2 border-blue-500 rounded-xl mt-2'>
                            <legend className='px-1 text-lg font-semibold'>Email (optional) </legend>
                            <input type="text" className='w-full focus:outline-none' name="email" id="" />
                        </fieldset>
                        <fieldset className='w-full px-5 pb-2 border-2 border-blue-500 rounded-xl mt-2'>
                            <legend className='px-1 text-lg font-semibold'>Shifting Date </legend>
                            <input type="date" className='w-full focus:outline-none' name="date" id="" required />
                        </fieldset>
                        <fieldset className='w-full px-5 pb-2 border-2 border-blue-500 rounded-xl mt-2'>
                            <legend className='px-1 text-lg font-semibold'>Product From </legend>
                            <input type="text" className='w-full focus:outline-none' name="shiftFrom" id="" required />
                        </fieldset>
                        <fieldset className='w-full px-5 pb-2 border-2 border-blue-500 rounded-xl mt-2'>
                            <legend className='px-1 text-lg font-semibold'>Shifting Location </legend>
                            <input type="text" className='w-full focus:outline-none' name="shiftTo" id="" required />
                        </fieldset>
                        <input type="submit" value="Submit" className='w-full btn btn-error mt-5' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TransportBanner;