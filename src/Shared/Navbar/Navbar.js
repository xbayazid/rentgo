import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUserAlt, IconName } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((err) => console.log(err))
    }

    const menuItems = (
        <React.Fragment>
            <li className='hover:text-orange-500 duration-300 ease-in-out'>
                <Link to="/">Home</Link>
            </li>
            <li className='hover:text-orange-500 duration-300 ease-in-out'>
                <Link to="/property">Property List</Link>
            </li>
            <li className='hover:text-orange-500 duration-300 ease-in-out'>
                <Link to="/transport">Transport</Link>
            </li>
            <li className='hover:text-orange-500 duration-300 ease-in-out'>
                <Link to="/about">About Us</Link>
            </li>
            <li className='hover:text-orange-500 duration-300 ease-in-out'>
                <Link to="/contact">Contact Us</Link>
            </li>
        </React.Fragment>
    );

    return (
        <div className="relative">
            <div>
                {/* <div className="relative">
                    <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
                        <div className="container mx-auto flex items-center justify-between">
                            <Link to='/' className="md:w-2/12 cursor-pointer title text-4xl text-gray-800 dark:text-white" aria-label="rent Go."> rentGo
                            </Link>
                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                                <li>
                                    <Link to="" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/property" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Property List
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            <Link to='/login'>
                            <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold rounded'>Log In</button>
                            </Link>
                        </div>
                    </div>
                </div> */}
                <div className="navbar bg-neutral text-neutral-content py-5 px-9">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2B3440] rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to='/' className="md:w-2/12 cursor-pointer title text-4xl text-white" aria-label="rent Go."> rentGo
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-6  px-1">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user?.uid ? (
                            <>

                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="rounded-full">
                                        {
                                            user?.photoURL ? (
                                                <>

                                                    <div className="avatar">
                                                        <div className="w-12 rounded-full">
                                                            <img src={user.photoURL} alt='' />
                                                        </div>
                                                    </div>
                                                </>
                                            ) :
                                                (
                                                    <FaUserAlt className='w-12 h-12' />
                                                )
                                        }
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box -ml-24 w-44">
                                        <li>
                                            <Link to='/dashboard' className='text-black'>My Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to='/wishlist' className='text-black'>WishList</Link>
                                        </li>
                                        <li className='text-center'>
                                        <Link className='text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold rounded' onClick={handleLogOut}>Log Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <><Link to='/login'>
                                <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold rounded'>Log In</button>
                            </Link></>
                        )}
 <label htmlFor="dashboard-drawer" className=" btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;