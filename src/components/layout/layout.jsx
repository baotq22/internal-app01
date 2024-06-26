import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/sidebar";

const AppLayout = () => {
    return (
        <div style={{ padding: '50px 0px 0px 370px' }}>
            <SideBar />
            <Outlet />
        </div>
    )
};

export default AppLayout;