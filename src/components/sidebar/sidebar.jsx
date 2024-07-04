import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import hideSidebar from "../../assets/svg/sidebar-svgrepo-com.svg"
import '../scss/sidebar.scss';
import SidebarHide from './component/sidebarHide';
import SidebarHorizontal from './component/sidebarHorizontal';
import SidebarVertical from './component/sidebarVertical';
import useStore from "../../store/index";

const email = localStorage.getItem('email')
const password = localStorage.getItem('password')

const sidebarNavItems = [
    {
        display: 'Login',
        to: '/',
        section: ''
    },
    {
        display: 'Register',
        to: '/register',
        section: 'register'
    }
]

const sidebarNavItemsLoggedIn = [
    {
        display: 'Welcome',
        to: '/welcome',
        section: 'welcome'
    }
]

const SideBar = () => {
    const { setScroll, direction, setDirection } = useStore()
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    const onSidebarClick = () => {
        setIsShowSidebar(true)
        setScroll(false)
    }

    const onSidebarClickInHorizontal = () => {
        setIsShowSidebar(true)
        setScroll(true)
    }

    const onChangeDirection = () => {
        setDirection("horizontal")
        setScroll(true)
    }

    const handleOnSidebarClickShow = () => {
        setIsShowSidebar(false)
        setScroll(true)
    }

    const onChangeDirectionVertical = () => {
        setDirection("vertical")
        setScroll(false)
    }

    const hideSidebarInHorizontal = () => {
        setIsShowSidebar(false)
    }

    const logout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        navigate('/')
    }

    return (
        <div className='navbar-wrapper'>
            {!isShowSidebar &&
                <SidebarHide
                    src={hideSidebar}
                    rotate={direction === 'horizontal' ? 'sidebar__button sidebar__btn__rotate' : 'sidebar__button'}
                    onClick={direction === 'horizontal' ? onSidebarClickInHorizontal : onSidebarClick}
                />}
            {isShowSidebar && direction === 'vertical' &&
                <SidebarVertical
                    sidebarRef={sidebarRef}
                    rotate='sidebar__button sidebar__btn__right'
                    onClickShow={handleOnSidebarClickShow}
                    onChangeDirection={onChangeDirection}
                    clickToClose={handleOnSidebarClickShow}
                    indicatorRef={indicatorRef}
                    display={email && password ?
                        sidebarNavItemsLoggedIn.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                    {item.display}
                                </div>
                            </Link>
                        ))
                        :
                        sidebarNavItems.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                    {item.display}
                                </div>
                            </Link>
                        ))
                    }
                    logout={email && password ? <div className="logout-btn" onClick={logout}>Logout</div> : <></>}
                />
            }
            {isShowSidebar && direction === 'horizontal' &&
                <SidebarHorizontal
                    sidebarRef={sidebarRef}
                    rotate='sidebar__button sidebar__btn__left'
                    onClickShow={hideSidebarInHorizontal}
                    onChangeDirection={onChangeDirectionVertical}
                    indicatorRef={indicatorRef}
                    display={email && password ?
                        sidebarNavItemsLoggedIn.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                    <div className="sidebar__menu__item__text">
                                        {item.display}
                                    </div>
                                </div>
                            </Link>
                        ))
                        :
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
                    onLogout={logout}
                />
            }
        </div >
    )
};

export default SideBar;
