import { Outlet } from "react-router-dom";
import Nav from "../../Components/Shared/Nav";
import Footer from "../../Components/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;