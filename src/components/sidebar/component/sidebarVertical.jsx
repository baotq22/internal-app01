import showSidebar from "../../../assets/svg/sidebar-svgrepo-com.svg"
import switchDirection from "../../../assets/svg/switch-horizontal-svgrepo-com.svg"

export default function SidebarVertical({onClickShow, onClickHorizontal, sidebarRef, indicatorRef, display, rotate}) {
    return (
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
                    onClick={onClickHorizontal}
                />
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                ></div>
                {display}
            </div>
        </div>
    )
}