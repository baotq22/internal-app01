import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import showSidebar from "../../assets/svg/sidebar-left-svgrepo-com.svg"
import hideSidebar from "../../assets/svg/sidebar-right-svgrepo-com.svg"
import switchDirection from "../../assets/svg/switch-horizontal-svgrepo-com.svg"
import './sidebar.css';

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
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div>
            {!isShowSidebar ? <>
                <div className="sidebar__show">
                    <img
                        src={hideSidebar}
                        className='sidebar__button'
                        onClick={() => setIsShowSidebar(true)}
                    />
                </div>
            </> : <>
                {!isHorizontal ? <>
                    <div className='sidebar'>
                        <div className="sidebar__hide">
                            <img
                                src={showSidebar}
                                className='sidebar__button'
                                onClick={() => setIsShowSidebar(false)}
                            />
                            <img
                                src={switchDirection}
                                className='sidebar__button'
                                onClick={() => setIsHorizontal(true)}
                            />
                        </div>
                        <div ref={sidebarRef} className="sidebar__menu">
                            <div
                                ref={indicatorRef}
                                className="sidebar__menu__indicator"
                                style={{
                                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                                }}
                            ></div>
                            {
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
                        </div>
                    </div>
                </> : <>
                    <div className='navbar'>
                        <div className="navbar__hide">
                            <img
                                src={showSidebar}
                                className='sidebar__button'
                                onClick={() => setIsShowSidebar(false)}
                            />
                            <img
                                src={switchDirection}
                                className='sidebar__button'
                                onClick={() => setIsHorizontal(false)}
                            />
                        </div>
                        <div ref={sidebarRef} className="navbar__menu">
                            <div
                                ref={indicatorRef}
                                className="sidebar__menu__indicator"
                                style={{
                                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                                }}
                            ></div>
                            {
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
                        </div>
                    </div>
                </>}

            </>}

        </div>
    )
};

export default SideBar;
