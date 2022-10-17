import { useState } from "react";
import { Link } from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem
} from "reactstrap";
import LogoImg from "../../assets/images/logo.svg";
import { HeaderLink } from "../../components/layout/HeaderLink";
import { RoutesMap } from "../../constants/RoutesMap.enum";

import "./Header.scss";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar
            className="header mb-2"
            color="dark"
            container="xl"
            expand="md"
            dark
        >
            <NavbarBrand tag={Link} to={RoutesMap.Home}>
                <img
                    alt="logo"
                    src={LogoImg}
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <HeaderLink route={RoutesMap.Home}>
                            All
                        </HeaderLink>
                    </NavItem>
                    <NavItem>
                        <HeaderLink route={RoutesMap.Comic}>
                            Comic
                        </HeaderLink>
                    </NavItem>
                    <NavItem>
                        <HeaderLink route={RoutesMap.Magazine}>
                            Magazine
                        </HeaderLink>
                    </NavItem>
                    <NavItem>
                        <HeaderLink route={RoutesMap.DigitalComic}>
                            Digital Comic
                        </HeaderLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}   
