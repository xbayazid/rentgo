import React from 'react';

const Profit = () => {
    return (
        <div>
            <div className='bg-cyan-100 py-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-3/4 mx-auto'>
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>$980K</h1>
                        <p>Median sold price</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>24</h1>
                        <p>Property sold</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>$680K</h1>
                        <p>Median leased price</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>95</h1>
                        <p>Properties leased</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>$522K</h1>
                        <p>Sales & rental transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profit;