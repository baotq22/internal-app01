import showSidebar from "../../../assets/svg/sidebar-svgrepo-com.svg"
import switchDirection from "../../../assets/svg/switch-horizontal-svgrepo-com.svg"
import logoutSVG from "../../../assets/svg/logout-svgrepo-com.svg"
import NavItems from "./navItems"

export default function SidebarVertical({ logged, onClickShow, onChangeDirection, clickToClose, sidebarRef, direction, rotate, logout, currentItems, activeIndex, clickAction }) {
    return (
        <div className='overlay'>
            <div className='sidebar'>
                <div className="sidebar__hide">
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
                <div ref={sidebarRef} className="sidebar__menu">
                    {currentItems?.map((item, index) => {
                        return <NavItems
                            key={index}
                            to={item.to}
                            direction={direction}
                            activeIndex={activeIndex}
                            display={item.display}
                            clickAction={clickAction}
                        />
                    }
                    )}
                </div>
            </div>
            <div className="blurry" onClick={clickToClose}></div>
        </div>
    )
}