import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import { RoutesMap } from '../../constants/RoutesMap.enum';

import "./HeaderLink.scss"

type Props = {
    route: RoutesMap,
    children: string;
}

export const HeaderLink = ({ route, children }: Props) => {
    const { pathname } = useLocation();
    const activeClass = pathname === route ? "active-link" : ""
    return (
        <NavLink
            tag={Link}
            className={`mx-4 ${activeClass}`}
            to={route}
        >
            {children}
        </NavLink>
    )
}
