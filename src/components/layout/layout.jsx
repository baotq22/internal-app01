import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/sidebar";

const AppLayout = () => {
    return (
        <div>
            <Outlet />
            <SideBar />
        </div>
    )
};

export default AppLayout;