import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import hideSidebar from "../../assets/svg/sidebar-svgrepo-com.svg"
import './sidebar.css';
import SidebarHide from './component/sidebarHide';
import SidebarHorizontal from './component/sidebarHorizontal';
import SidebarVertical from './component/sidebarVertical';

const sidebarNavItems = [
    {
        display: 'Welcome',
        to: '/',
        section: ''
    },
    {
        display: 'Login',
        to: '/login',
        section: 'login'
    },
    {
        display: 'Register',
        to: '/register',
        section: 'register'
    }
]

const SideBar = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const [isHorizontal, setIsHorizontal] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div>
            {!isShowSidebar ?
                <SidebarHide
                    src={hideSidebar}
                    // rotate='sidebar__button sidebar__btn__rotate'
                    rotate={isHorizontal ? 'sidebar__button sidebar__btn__rotate' : 'sidebar__button'}
                    onClick={() => setIsShowSidebar(true)}
                />
                : <>
                    {!isHorizontal ?
                        <SidebarVertical
                            sidebarRef={sidebarRef}
                            rotate='sidebar__button sidebar__btn__right'
                            onClickShow={() => setIsShowSidebar(false)}
                            onClickHorizontal={() => setIsHorizontal(true)}
                            indicatorRef={indicatorRef}
                            display={
                                sidebarNavItems.map((item, index) => (
                                    <Link to={item.to} key={index}>
                                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                            {item.display}
                                        </div>
                                    </Link>
                                ))
                            }
                        />
                        :
                        <SidebarHorizontal
                            sidebarRef={sidebarRef}
                            rotate='sidebar__button sidebar__btn__left'
                            onClickShow={() => setIsShowSidebar(false)}
                            onClickHorizontal={() => setIsHorizontal(false)}
                            indicatorRef={indicatorRef}
                            display={
                                sidebarNavItems.map((item, index) => (
                                    <Link to={item.to} key={index}>
                                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                            <div className="sidebar__menu__item__text">
                                                {item.display}
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        />
                    }

                </>}

        </div>
    )
};

export default SideBar;
