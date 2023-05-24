import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/indexPage";

export const Router = createBrowserRouter([
    {
        path : '/',
        index : true,
        element : <IndexPage/>,
    }
])