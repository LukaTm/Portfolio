import styles from "./MainHeader.module.css";

import { NavLink } from "react-router-dom";

function DropDown() {
    return (
        <div>
            <div className={styles.dropdown_logo} tabIndex="0">
                Dropdown
            </div>
            <div className={styles.dropdown}>
                <header>
                    <ul>
                        <li>
                            <NavLink
                                className={(navData) => [
                                    navData.isActive
                                        ? styles.active
                                        : styles.default,
                                ]}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => [
                                    navData.isActive
                                        ? styles.active
                                        : styles.default,
                                ]}
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => [
                                    navData.isActive
                                        ? styles.active
                                        : styles.default,
                                ]}
                                to="/expierience"
                            >
                                Expierience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => [
                                    navData.isActive
                                        ? styles.active
                                        : styles.default,
                                ]}
                                to="/projects"
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => [
                                    navData.isActive
                                        ? styles.active
                                        : styles.default,
                                ]}
                                to="/resume"
                            >
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    );
}

export default DropDown;
