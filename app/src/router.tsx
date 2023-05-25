import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import AppOutlet from "./layout/AppOutlet";
import AppIndex from "./pages/application/appIndex";

export const Router = createBrowserRouter([
    {
        path : '/',
        index : true,
        element : <IndexPage/>,
    },
    {
        path : '/welcome',
        element : <LoginPage/>
    },
    {
        path : '/registration',
        element : <RegistrationPage/>
    },
    {
        path : '/app',
        element : <AppOutlet/>,
        children : [
            {
                index : true,
                element : <AppIndex/>
            }
        ]
    }
])