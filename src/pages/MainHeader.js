import styles from "./MainHeader.module.css";

import { NavLink } from "react-router-dom";

import DropDown from "./DropDown";

function MainHeader({ children }) {
    return (
        <div className={styles.home}>
            {/* <Link to="/about">About</Link> */}
            {/* <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/about"
            >
                About
            </NavLink> */}
            <DropDown />
            <div className={styles.header_visible}>
                <header>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/expierience"
                    >
                        Expierience
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/resume"
                    >
                        Resume
                    </NavLink>
                </header>
            </div>
            <main>{children}</main>
            <footer className={styles.footer}>
                Developed by Marus Luka Copyright 2023 Github that is true yo I
                dont know how but its true you also linkdin or smth
            </footer>
        </div>
    );
}

export default MainHeader;
