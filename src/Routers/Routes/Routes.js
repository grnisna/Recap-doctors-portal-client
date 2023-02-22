import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appointment from "../../Pages/Component/Appointment/Appointment/Appointment";
import Home from "../../Pages/Component/Home/Home/Home";
import Login from "../../Pages/Component/Login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<Login/>
            },
            {
                path:'/appointment',
                element:<Appointment/>
            },
            {
                path:'/reviews',
                element:<Login/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            
        ]
    }
]);


