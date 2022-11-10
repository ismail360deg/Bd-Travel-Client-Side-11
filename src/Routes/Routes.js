import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../pages/ErrorPage";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import DoubleSection from "../pages/DoubleSection/DoubleSection";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Home/Services/Services";
import Login from "../pages/Login/Login";
import Review from "../pages/Review/Review";
import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
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
                    fetch("http://localhost:5000/services"),
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/doubleSection/:id',
                loader: async ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
                element: <DoubleSection></DoubleSection>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            }
        ]
    }
])

export default router