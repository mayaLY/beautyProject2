import { createBrowserRouter } from "react-router-dom";
import Main from './view/pages/main/Main';
import Login from './view/pages/login/Login';
import Register from './view/pages/register/Register';
import AddProductForm from "../components/addProduct/addProductForm";
import Admin from "./view/pages/admin/Admin";




export const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        children: [

            {
                element: <Register />,
                path: "element-register"
            },

            {
                element: <Login />,
                path: "element-logIn"
            },
            {
                path: "admin",
                element: <Admin />,
            },
            {
                element: <AddProductForm />,
                path: "element-addProduct"
            }
        ]
    }
]);
