import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
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
                element:<Login/>
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


