import { createBrowserRouter } from "react-router-dom";
import Main from './view/pages/main/Main';
import Login from './view/pages/login/Login';
import Register from './view/pages/register/Register';
import AddProductForm from "../components/AddProductForm";




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
                element: <AddProductForm />,
                path: "element-addProduct"
            }
        ]
    }
]);
