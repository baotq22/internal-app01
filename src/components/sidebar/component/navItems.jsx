import { Link } from "react-router-dom";

export default function NavItems({to, direction, display, activeIndex, clickAction}) {
    return (
        <Link to={to}>
            <div className={`sidebar__menu__item ${activeIndex}`} onClick={clickAction}>
                {direction === "vertical" && <>{display}</>}
                {direction === "horizontal" &&
                    <>
                        <div className="sidebar__menu__item__text">
                            {display}
                        </div>
                    </>
                }
            </div>
        </Link>
    )
}