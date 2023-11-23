import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import About from "../Pages/About/About";
// import Property from "../Pages/Property/Property";
import Contact from "../Pages/Contact/Contact";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Transport from "../Pages/Transport/Transport";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AllBookings from "../Pages/Dashboard/AllBookings/AllBookings";
import Wishlist from "../Pages/Wishlist/Wishlist";
// import SearchProperty from "../Pages/SearchProperty/SearchProperty";
import Properties from "../Pages/Property/Properties/Properties";
import AddProperty from "../Pages/Dashboard/AddProperty/AddProperty";
import MyProperty from "../Pages/Dashboard/MyProperty/MyProperty";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/property',
                element: <Properties/>
            },
            {
                path: '/property/:value',
                element: <Properties/>,
                
            },
            {
                path: '/transport',
                element: <Transport/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/wishlist',
                element: <Wishlist/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/propertyDetails/:id',
                element: <PrivateRoutes><PropertyDetails/></PrivateRoutes>,
                loader: ({params}) => {
                    return fetch(`https://rentgo-server.vercel.app/propertyDetails/${params.id}`)
                }
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/addProperty',
                element: <AddProperty/>
            },
            {
                path: '/dashboard/myProperty',
                element: <MyProperty/>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser/>
            },
            {
                path: '/dashboard/allBookings',
                element: <AllBookings/>
            },

        ]
    }
])

export default router;