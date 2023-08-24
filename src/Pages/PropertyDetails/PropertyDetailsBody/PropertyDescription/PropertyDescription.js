import React from 'react';

const PropertyDescription = () => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className='text-justify mt-4 text-[#888]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum minus voluptas expedita tenetur, totam maxime quae nobis, obcaecati accusantium repellat explicabo laudantium. Repudiandae explicabo deleniti, incidunt adipisci quidem accusantium quod corporis impedit laborum ea, non nostrum voluptatum porro dolorum enim. Quod, mollitia dolore tempora explicabo placeat eos hic ipsa veniam natus, aliquid reprehenderit aperiam temporibus. Quod reiciendis ducimus debitis ratione sunt, quia reprehenderit, in sequi laboriosam rerum ab eveniet culpa incidunt ipsa maiores dolore similique dignissimos maxime tenetur! Perspiciatis.</p>

            <h2 className="text-2xl font-semibold mt-8">Location</h2>
            <div className="grid grid-cols-3 mt-4 gap-5">
                <div>
                    <p>Address: <span className='text-[#888]'>42 Albemarle st.</span></p>
                    <p>State / Country: <span className='text-[#888]'>Dhaka</span></p>
                </div>
                <div>
                    <p>Neighborhood : <span className='text-[#888]'>Andersonville</span></p>
                    <p>Zip/Postal Code : <span className='text-[#888]'>Dhaka</span></p>
                </div>
                <div>
                    <p>Country : <span className='text-[#888]'>Bangladesh</span></p>
                    <p>City <span className='text-[#888]'>Dhaka</span></p>
                </div>
            </div>

        </div>
    );
};

export default PropertyDescription;