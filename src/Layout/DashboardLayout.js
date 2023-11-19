import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loader from '../components/Loader/Loader';
import useAdmin from '../hooks/useAdmin';
import useOwner from '../hooks/useOwner';

const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isOwner] = useOwner(user?.email)
    console.log(isOwner)

    if (loading) {
        return <Loader />
    }
    return (
        <div>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="p-4 px-10 w- min-h-full bg-[#2B3440] text-white gap-5 flex flex-col">
                        {/* Sidebar content here */}
                        <li className='hover:text-orange-600 cursor-pointer'><Link to='/dashboard'>My Bookings</Link></li>
                        
                       
                        {
                            (isOwner || isAdmin) &&
                            <>
                            <li className='hover:text-orange-600 cursor-pointer'><Link to='/dashboard/myProperty'>My Property</Link></li>
                            <li className='hover:text-orange-600 cursor-pointer'><Link to='/dashboard/addProperty'>Add Property</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                            <li className='hover:text-orange-600 cursor-pointer'><Link to='/dashboard/allUser'>All User</Link></li>
                            <li className='hover:text-orange-600 cursor-pointer'><Link to='/dashboard/allBookings'>All Bookings</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;