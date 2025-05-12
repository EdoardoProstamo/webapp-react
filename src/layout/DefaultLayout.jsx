import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer";
import Movies from "../pages/movies";

const DefaultLayout = () => {

    return <>
        <Header />
        <Movies>
            <Outlet />
        </Movies>
        <Footer />
    </>
};

export default DefaultLayout;