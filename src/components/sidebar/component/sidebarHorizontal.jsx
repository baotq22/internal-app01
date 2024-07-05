import showSidebar from "../../../assets/svg/sidebar-svgrepo-com.svg"
import switchDirection from "../../../assets/svg/switch-horizontal-svgrepo-com.svg"

export default function SidebarHorizontal({onClickShow, onChangeDirection, sidebarRef, indicatorRef, display, logout, rotate}) {
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
                {logout}
                
            </div>
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