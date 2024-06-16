import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const DefaultLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};
DefaultLayout.displayName = "AppLayout";
export default DefaultLayout;
