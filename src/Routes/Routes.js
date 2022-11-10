import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../pages/ErrorPage";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import DoubleSection from "../pages/DoubleSection/DoubleSection";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Home/Services/Services";
import Login from "../pages/Login/Login";
import Review from "../pages/Review/Review";
import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/servicesDetails',
                loader: async () =>
                    fetch("https://bd-travel-server-ismail360deg.vercel.app/services"),
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: '/review',
                element: <PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path: '/doubleSection/:id',
                loader: async ({ params }) =>
                    fetch(`https://bd-travel-server-ismail360deg.vercel.app/services/${params.id}`),
                element: <DoubleSection></DoubleSection>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
])

export default router