import showSidebar from "../../../assets/svg/sidebar-svgrepo-com.svg"
import switchDirection from "../../../assets/svg/switch-horizontal-svgrepo-com.svg"
import logoutSVG from "../../../assets/svg/logout-svgrepo-com.svg"

export default function SidebarHorizontal({onClickShow, onChangeDirection, onLogout, sidebarRef, indicatorRef, display, rotate}) {
    const name = localStorage.getItem('email')
    return (
        <div className='navbar'>
            <div className="navbar__hide">
                <img
                    src={showSidebar}
                    className={rotate}
                    onClick={onClickShow}
                />
                <img
                    src={switchDirection}
                    className='sidebar__button'
                    onClick={onChangeDirection}
                />
                <img
                    src={logoutSVG}
                    className='sidebar__button'
                    onClick={onLogout}
                />
            </div>
            <div>{name}</div>
            <div ref={sidebarRef} className="navbar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                ></div>
                {display}
            </div>
        </div>
    )
}