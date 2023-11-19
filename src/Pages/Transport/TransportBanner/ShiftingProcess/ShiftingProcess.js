import React from 'react';
import Image from '../../../../assets/images/poster-2-bn.webp'
import poster from '../../../../assets/images/poster.webp'

const ShiftingProcess = () => {
    return (
        <div className='mt-20 mx-[7%]'>
            <h1 className="text-3xl font-semibold text-center">How to take truck shifting service?</h1>
            <p className="text-center">Complete home/office shifting in a few easy steps</p>

            <div className="grid md:grid-cols-2 mt-10 gap-10 items-center">
                <div>
                    <div className="collapse collapse-plus shadow-xl">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-2xl font-semibold">
                            Get Free Quotation by Submitting Shifting Service Form
                        </div>
                        <div className="collapse-content">
                            <p>Submit the form with the required information to book Truck Laggar Home/Office Shifting Services. One of our shifting experts will contact you and let you know the cost instantly. Also there is an opportunity to see your home/office furniture and then know the complete cost.</p>

                            <div className='mt-5'>
                                <a href="#transport-booking" className='btn btn-error text-white'>booking Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus shadow-xl mt-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-semibold">
                            Confirm
                        </div>
                        <div className="collapse-content">
                            <p>After pre-inspection our shifting team will confirm your shifting service.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus shadow-xl mt-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-semibold">
                            Enjoy the shifting service
                        </div>
                        <div className="collapse-content">
                            <p>Finally, the Truck Laggar shifting team will reach your location on time to ensure your home/office shifting on the scheduled day.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Image} alt="" className='rounded-md' />
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl my-20">
                <figure><img src={poster} alt="Movie" className='h-[300px]'/></figure>
                <div className="card-body">
                    <h2 className="card-title">Shift Home/Office with Truck Needed</h2>
                    <p>Our professional shifting service is at your side 24/7 to meet your home/office shifting needs. So contact us now for a unique experience of home/office shifting.</p>
                    <div className='-mt-20'>
                        <a href="#transport-booking" className='btn btn-error text-white'>booking Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShiftingProcess;