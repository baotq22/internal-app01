import showSidebar from "../../../assets/svg/sidebar-svgrepo-com.svg"
import switchDirection from "../../../assets/svg/switch-horizontal-svgrepo-com.svg"
import logoutSVG from "../../../assets/svg/logout-svgrepo-com.svg"
import NavItems from "./navItems"

export default function SidebarHorizontal({ logged, onClickShow, onChangeDirection, sidebarRef, currentItems, logout, rotate, activeIndex, direction, clickAction }) {
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
                <div className={logged}>
                    <img
                        src={logoutSVG}
                        className='sidebar__button'
                        onClick={logout}
                    />
                </div>
            </div>
            <div ref={sidebarRef} className="navbar__menu">
                {currentItems?.map((item, index) => {
                    return <NavItems
                        key={index}
                        to={item.to}
                        direction={direction}
                        activeIndex={activeIndex === index ? 'active' : ''}
                        display={item.display}
                        clickAction={clickAction}
                    />
                }
                )}
            </div>
        </div>
    )
}