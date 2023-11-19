import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AddProperty = () => {
    const { user } = useContext(AuthContext);
    const [inputs, setInputs] = useState([""]);
    const [images, setImages] = useState([]);
    const [galleries, setGalleries] = useState([]);
    const [videoes, setVideoes] = useState([]);
    const [propertyPlans, setPropertyPlans] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [gallery, setGallery] = useState([]);

    const availability = format(selectedDate, "PP");
    // console.log(availability)
    console.log(gallery);
    console.log(galleries);
    console.log(propertyPlans)

    const handleInputs = () => {
        setInputs([...inputs, ""]);
    }

    const updateImage = e => {
        const gal = e.target.files[0];
        setGalleries([...galleries, gal]);
        cloudUpload(gal)
            .then(res => res.json())
            .then(data => {
                if (data.url) {
                    setGallery([...gallery, data.url]);
                }
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const propertyName = form.propertyName.value;
        const area = form.area.value;
        const sector = form.sector.value;
        const road = form.road.value;
        const houseNo = form.houseNo.value;
        const location = 'House: ' + houseNo + ',  Road: ' + road + ', ' + area + '-' + sector + ', Dhaka, Bangladesh';
        const flatRent = parseInt(form.flatRent.value);
        const gashBill = parseInt(form.gashBill.value);
        const serviceCharge = parseInt(form.serviceCharge.value);
        const waterBill = parseInt(form.waterBill.value);
        const parkingCharge = parseInt(form.parkingCharge.value);
        const rent = flatRent + serviceCharge + parkingCharge + waterBill;
        const description = form.description.value;
        const propertyType = form.propertyType.value;
        const propertyStatus = form.propertyStatus.value;
        const room = form.room.value;
        const bedroom = form.bedroom.value;
        const bath = form.bath.value;
        const garage = form.garage.value;
        const size = form.size.value;

        const rentDetails = [
            {
                flatRent,
                gashBill,
                waterBill,
                serviceCharge,
                parkingCharge
            }
        ]

        cloudUpload(videoes)
            .then(res => res.json())
            .then(data => {
                if (data.url) {
                    const video = data.url;
                    cloudUpload(images)
                        .then(res => res.json())
                        .then(data => {
                            const image = data.url;
                            if ([...propertyPlans].length) {
                                cloudUpload(propertyPlans[0])
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.url) {
                                            const propertyPlan = data.url;
                                            const property = {
                                                image,
                                                propertyName,
                                                location,
                                                ownerName: user?.displayName,
                                                authorImage: user?.photoURL,
                                                rent,
                                                description,
                                                video,
                                                propertyPlan,
                                                gallery,
                                                propertyType,
                                                propertyStatus,
                                                room,
                                                bedroom,
                                                bath,
                                                garage,
                                                size,
                                                area,
                                                city: 'Dhaka',
                                                rentDetails,
                                                review: [],
                                                isRent: true,
                                                availability
                                            }
                                            fetch('https://rentgo-server.vercel.app/properties/', {
                                                method: 'POST',
                                                headers: {
                                                    'content-type': 'application/json',
                                                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                                                },
                                                body: JSON.stringify(property)
                                            })
                                                .then(res => res.json())
                                                .then(result => {
                                                    console.log(result);
                                                    toast.success(`Porperty is added successfully`);
                                                    //   navigate('/dashboard/managedoctors');
                                                })
                                        }
                                    })
                            }
                            else {
                                const property = {
                                    image,
                                    propertyName,
                                    location,
                                    ownerName: user?.displayName,
                                    authorImage: user?.photoURL,
                                    rent,
                                    description,
                                    video,
                                    propertyPlan: null,
                                    gallery,
                                    propertyType,
                                    propertyStatus,
                                    room,
                                    bedroom,
                                    bath,
                                    garage,
                                    size,
                                    rentDetails,
                                    review: [],
                                    isRent: true,
                                    availability
                                }
                                fetch('https://rentgo-server.vercel.app/properties/', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json',
                                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                                    },
                                    body: JSON.stringify(property)
                                })
                                    .then(res => res.json())
                                    .then(result => {
                                        console.log(result);
                                        toast.success(`Porperty is added successfully`);
                                        //   navigate('/dashboard/managedoctors');
                                    })
                            }
                        })

                }
            })



    }

    const setProperty = ({ property }) => {
        console.log(property)
        fetch('https://rentgo-server.vercel.app/properties/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(property)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Porperty is added successfully`);
                //   navigate('/dashboard/managedoctors');
            })
    }

    const cloudUpload = (image) => {
        const data = new FormData();
        data.append("file", image)
        data.append("upload_preset", "blueBirdRent")
        data.append("cloud_name", "dohgbs7uo")

        return fetch("https://api.cloudinary.com/v1_1/dohgbs7uo/upload", {
            method: "post",
            body: data
        })
    }

    return (
        <div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi modi deleniti deserunt cumque! Odit sit in expedita veritatis? Rerum sint officiis nam asperiores a eos inventore cum! Sed quo pariatur ipsum accusantium non praesentium quas beatae! Deserunt assumenda optio incidunt nihil delectus, ad quia atque suscipit a explicabo velit quod necessitatibus. Ipsam non laboriosam reiciendis praesentium eius vitae eveniet beatae corporis magnam aliquid ab, inventore vel pariatur voluptatum est iusto voluptatibus dolorum quidem laborum culpa quaerat reprehenderit dolorem. Ab minus veritatis iusto unde, voluptatem blanditiis debitis enim corrupti, a magnam laboriosam vitae sunt facere. Explicabo a quod praesentium architecto.</p> */}
            <div className='flex justify-between items-center mb-5 border-b-2 '>
                <div>
                    <h3 className="text-4xl font-bold">Add Property</h3>
                    <p className='text-slate-600'>Welcome To Admin Panel</p>
                </div>
                <div className='mr-9'>
                    <p className='flex gap-3'>
                        <Link>Home</Link>
                        <span>/</span>
                        <Link>My Properties</Link>
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='p-10 shadow-lg'>
                <h3 className="text-2xl font-semibold underline">Add property details</h3>
                <div className='grid grid-cols-3 gap-6'>
                    <div>
                        <p className="font-semibold">House Name</p>
                        <input type="text" name='propertyName' placeholder='Villa on Hartford' className="input input-bordered w-full" />
                    </div>
                    <div>
                        <p className="font-semibold">House Status</p>
                        <select name='propertyStatus' className="select select-bordered w-full ">
                            <option value='For Rent' selected>For Rent</option>
                            <option value='For Sell'>For Sell</option>
                        </select>
                    </div>
                    <div>
                        <p className="font-semibold">Room</p>
                        <select name='room' className="select select-bordered w-full ">
                            <option value='1' selected>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
                    </div>
                    <div>
                        <p className="font-semibold">Bedroom</p>
                        <select name='bedroom' className="select select-bordered w-full ">
                            <option value='1' selected>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
                    </div>
                    <div>
                        <p className="font-semibold">Bath Room</p>
                        <select name='bath' className="select select-bordered w-full ">
                            <option value='1' selected>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </div>
                    <div>
                        <p className="font-semibold">Garage</p>
                        <select name='garage' className="select select-bordered w-full ">
                            <option value='1' selected>1</option>
                            <option value='2'>2</option>
                        </select>
                    </div>
                    <div>
                        <p className="font-semibold">House Type</p>
                        <select name='propertyType' className="select select-bordered w-full ">
                            <option value='Family' selected>Family</option>
                            <option value='Bachelor'>Bachelor</option>
                            <option value='Family & Bachelor'>Family / Bachelor</option>
                        </select>
                    </div>
                    <div>
                        <p className="font-semibold">Size (Sq Ft)</p>
                        <input type="text" name='size' placeholder='2840' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='mt-6'>
                    <p className="font-semibold">Description</p>
                    <textarea name="description" className="textarea textarea-bordered w-full"></textarea>

                </div>
                <div className='mt-6'>
                    <p className="text-2xl font-semibold underline">Location</p>
                    <div className='grid grid-cols-3 gap-6'>
                        <div>
                            <p className="font-semibold">Area</p>
                            <select name='area' className="select select-bordered w-full ">
                                <option value='Uttara' selected>Uttara</option>
                                <option value='Mirpur'>Mirpur</option>
                                <option value='Dhanmondi'>Dhanmondi</option>
                                <option value='Gulshan'>Gulshan</option>
                                <option value='Baridara'>Baridara</option>
                            </select>
                        </div>
                        <div>
                            <p className="font-semibold">Sector</p>
                            <input type="text" name='sector' placeholder='10' className="input input-bordered w-full" />
                        </div>
                        <div>
                            <p className="font-semibold">Road</p>
                            <input type="road" name='road' placeholder='7(A)' className="input input-bordered w-full" />
                        </div>
                        <div>
                            <p className="font-semibold">House No.</p>
                            <input type="text" name='houseNo' placeholder='35' className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <p className="text-2xl font-semibold underline">Rent Information</p>
                    <div className='grid grid-cols-3 gap-6'>
                        <div>
                            <p className="font-semibold">Flat Rent</p>
                            <input type="number" name='flatRent' placeholder='৳ 10000' className="input input-bordered w-full" />
                        </div>
                        <div>
                            <p className="font-semibold">Gash Bill</p>
                            <select name='gashBill' className="select select-bordered w-full ">
                                <option value='1080' selected>৳ 1080</option>
                                <option value='Pre-Paid'>Pre-Paid</option>
                            </select>
                        </div>
                        <div>
                            <p className="font-semibold">Service charge</p>
                            <input type="number" name='serviceCharge' placeholder='৳ 3000' className="input input-bordered w-full" />
                        </div>
                        <div>
                            <p className="font-semibold">Water Bill</p>
                            <input type="number" name='waterBill' placeholder='৳ 3000' className="input input-bordered w-full" />
                        </div>
                        <div>
                            <p className="font-semibold">Parking Charge</p>
                            <input type="number" name='parkingCharge' placeholder='৳ 1000' className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className="text-2xl font-semibold underline">Thumbnail Image</p>
                    <div className=" mt-3 w-full h-20 border-2 rounded-lg flex justify-center items-center">
                        <input type="file" name="image" className="w-full h-full pt-7 pl-28 md:pl-[30%]" onChange={(e) => setImages(e.target.files[0])} />
                    </div>
                </div>
                <div className='mt-5'>
                    <p className="text-2xl font-semibold underline">Gallery</p>
                    {
                        inputs.map((input, idx) => (
                            <div key={idx}>
                                <div className=" mt-3 w-full h-20 border-2 rounded-lg flex justify-center items-center">
                                    <input type="file" name="gallery" className="w-full h-full pt-7 pl-28 md:pl-[30%]" onChange={(e) => updateImage(e)} />
                                </div>
                            </div>
                        ))

                    }
                    <p className=' mt-3' onClick={handleInputs}>Add More</p>
                </div>
                <div className='mt-5'>
                    <p className="text-2xl font-semibold underline">Upload Video</p>
                    <div className=" mt-3 w-full h-20 border-2 rounded-lg flex justify-center items-center">
                        <input type="file" name="video" className="w-full h-full pt-7 pl-28 md:pl-[30%]" onChange={(e) => setVideoes(e.target.files[0])} />
                    </div>
                </div>
                <div className='mt-5'>
                    <p className="text-2xl font-semibold underline">Available From</p>

                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>

                </div>

                <div className='mt-5'>
                    <p className="text-2xl font-semibold underline">Property Plan</p>
                    <div className=" mt-3 w-full h-20 border-2 rounded-lg flex justify-center items-center">
                        <input type="file" name="propertyPlan" className="w-full h-full pt-7 pl-28 md:pl-[30%]" onChange={(e) => setPropertyPlans([...propertyPlans, e.target.files[0]])} />
                    </div>
                </div>
                <div className='text-center my-10'>
                    <button type='submit' className='px-5 py-2 border-2 border-orange-300 uppercase font-semibold tracking-wide hover:bg-orange-300 duration-500'>upload</button>
                </div>
            </form>

            <div className='text-center my-10'>
                <button type='submit' className='px-5 py-2 border-2 border-orange-300 uppercase font-semibold tracking-wide hover:bg-orange-300 duration-500' onClick={handleSubmit}>upload</button>
            </div>
        </div>
    );
};

export default AddProperty;