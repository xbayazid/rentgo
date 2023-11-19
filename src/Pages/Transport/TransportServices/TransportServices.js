import React from 'react';
import Image from '../../../assets/images/owner_banner.webp';
import icon1 from '../../../assets/images/icon-0.svg';
import icon2 from '../../../assets/images/icon-1.svg';
import icon3 from '../../../assets/images/icon-2.svg';
import icon4 from '../../../assets/images/icon-3.svg';

const TransportServices = () => {
    return (
        <div className='mt-20 mx-[7%]'>
            <h1 className="text-4xl font-semibold text-center">What services does RentGo provide you</h1>
            <p className="text-center">25,000+ families and offices enjoy our shifting services every year</p>
            <div className="grid md:grid-cols-2 mt-10 gap-8 items-center">
                <div>
                    <img src={Image} alt="" className='rounded-md' />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={icon1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Affordable rates</h2>
                            <p>You are assured of professional shifting services at low cost</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={icon2} alt="Shoes" className="rounded-xl w-12" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Verified Truck</h2>
                            <p>Verified trucks and skilled labor to ensure the safety of your cargo</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={icon3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Packaging and set up</h2>
                            <p>Get expert packaging and setup services for your precious furniture</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={icon4} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Skilled technician</h2>
                            <p>Get installation service from our skilled technicians</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportServices;