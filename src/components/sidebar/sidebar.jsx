import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import hideSidebar from "../../assets/svg/sidebar-svgrepo-com.svg"
import '../scss/sidebar.scss';
import SidebarHide from './component/sidebarHide';
import SidebarHorizontal from './component/sidebarHorizontal';
import SidebarVertical from './component/sidebarVertical';
import useStore from "../../store/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const sidebarNavItemsForUnauthenticated = [
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

const sidebarNavItemsForAuthenticated = [
    {
        display: 'Welcome',
        to: '/welcome',
        section: 'welcome'
    },
    {
        display: 'Memory Game',
        to: '/memory-game',
        section: 'memory-game'
    }
]

const SideBar = () => {
    const { setScroll, direction, setDirection, isAuthenticated, setIsAuthenticated } = useStore()
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const [currentNavbarItems, setCurrentNavbarItems] = useState([])
    const [isSidebarLoggedIn, setIsSidebarLoggedIn] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = currentNavbarItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location, currentNavbarItems]);

    useEffect(() => {
        if (isAuthenticated) {
            setIsSidebarLoggedIn(true)
            setCurrentNavbarItems([...sidebarNavItemsForAuthenticated])
        } else {
            setIsSidebarLoggedIn(false)
            setCurrentNavbarItems([...sidebarNavItemsForUnauthenticated])
        }
    }, [isAuthenticated])

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
        localStorage.removeItem('token')
        setIsAuthenticated(false)
        setIsShowSidebar(false)
        toast.success("Logged Out")
        navigate('/login')
    }

    return (
        <>
            {!isShowSidebar &&
                <SidebarHide
                    src={hideSidebar}
                    rotate={direction === 'horizontal' ? 'sidebar__button sidebar__btn__rotate' : 'sidebar__button'}
                    onClick={direction === 'horizontal' ? onSidebarClickInHorizontal : onSidebarClick}
                />}
            <div className={`navbar-wrapper ${isShowSidebar && direction === 'vertical'? '' : 'hiddenBlurry'}` }>
                {isShowSidebar && direction === 'vertical' &&
                    <SidebarVertical
                        sidebarRef={sidebarRef}
                        rotate='sidebar__button sidebar__btn__right'
                        onClickShow={handleOnSidebarClickShow}
                        onChangeDirection={onChangeDirection}
                        clickToClose={handleOnSidebarClickShow}
                        indicatorRef={indicatorRef}
                        currentItems={currentNavbarItems}
                        direction={direction}
                        activeIndex={activeIndex}
                        logout={logout}
                        logged={!isSidebarLoggedIn && 'button__hide'}
                        clickAction={handleOnSidebarClickShow}
                    />
                }
            </div>
                {isShowSidebar && direction === 'horizontal' &&
                    <SidebarHorizontal
                        sidebarRef={sidebarRef}
                        rotate='sidebar__button sidebar__btn__left'
                        onClickShow={hideSidebarInHorizontal}
                        onChangeDirection={onChangeDirectionVertical}
                        indicatorRef={indicatorRef}
                        currentItems={currentNavbarItems}
                        direction={direction}
                        activeIndex={activeIndex}
                        logout={logout}
                        logged={!isSidebarLoggedIn && 'button__hide'}
                        clickAction={handleOnSidebarClickShow}
                    />
                }
        </>
    )
};

export default SideBar;
