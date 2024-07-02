import classNames from "classnames";
import { Outlet } from "react-router-dom";
import useStore from "../../store";
import SideBar from "../sidebar/sidebar";

const AppLayout = () => {
    const { scroll } = useStore();
    
    return (
        <div id="main" className={classNames({ "noScroll": !scroll})}>
            <Outlet />
            <SideBar/>
        </div>
    )
};

export default AppLayout;