import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext"

const DefaultLayout = () => {

    const { isLoading } = useContext(GlobalContext);

    return <>
        <Header />
        <Outlet />
        {isLoading && <Loader />}
        <Footer />
    </>
};

export default DefaultLayout;