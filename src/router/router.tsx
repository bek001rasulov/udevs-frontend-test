import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout";
import Orders from "../pages/orders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Orders/>
            }
        ]
    }
])