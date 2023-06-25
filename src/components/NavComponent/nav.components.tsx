import { NavLink } from "react-router-dom"
import './nav.style.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { routes, barndIcons, IBrandIcon } from '../../data/captions.ts';
import { useState } from "react";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

const NavBar = () => {
    const [toggleModal, setToggleModal] = useState(false);

    const setIsActive = ({ isActive, isPending }: { isActive: boolean, isPending: boolean }): string => isPending ? "pending" : isActive ? "active" : ""

    const renderItems = () => {
        return routes?.length > 0 &&
            routes.map(
                (route: string, index: number) =>
                    <li key={index} className="nav-item route">
                        <NavLink className={"route " + setIsActive} to={route}>
                            <span>{route}</span>
                        </NavLink>
                    </li>
            )
    }

    const rednerIcons = (size: SizeProp) => {
        return barndIcons?.length > 0 &&
            barndIcons.map(
                (brand: IBrandIcon, index: number) =>
                    <li key={index} className="nav-item">
                        <a href={brand.link} target="_blank">
                            <FontAwesomeIcon className="icon" icon={brand.iconName} size={size} />
                        </a>
                    </li>
            )
    }

    const barMenuModalElement: JSX.Element =
        <div className="bar-menu-modal-container">
            <ul className="bar-modal-items">
                {
                    renderItems()
                }
                <ul className="bar-modal-social">
                    {
                        rednerIcons("lg")
                    }
                </ul>
            </ul>
        </div>

    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <div className="logo-container">
                        <NavLink className="logo" to="/">
                        </NavLink>
                    </div>
                    <nav className="nav-items-container">
                        <ul className="nav-items">
                            {
                                renderItems()
                            }
                            <li className="nav-item social-container">
                                <ul className="social">
                                    {
                                        rednerIcons("2xl")
                                    }
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* Appears on small screens */}
                    <div className="bars-menu">
                        <FontAwesomeIcon icon={faBars} size={"xl"}
                            onClick={() => setToggleModal(prev => !prev)} />
                    </div>
                </div>
            </div>
            {
                toggleModal && barMenuModalElement
            }
        </>
    )
}

export default NavBar