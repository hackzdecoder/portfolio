import React, { useState, useEffect, useRef } from "react";
import styles from "@assets/css/navbar.module.scss";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("about");
    const sectionRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 100; // offset for detection

            Object.entries(sectionRefs.current).forEach(([key, ref]) => {
                if (!ref) return;
                const top = ref.offsetTop;
                const bottom = top + ref.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    setActiveLink(key);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (id) => {
        setMenuOpen(false);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        ["about", "skills", "projects"].forEach((id) => {
            sectionRefs.current[id] = document.getElementById(id);
        });
    }, []);

    return (
        <React.Fragment>
            <nav className={styles.navbar_container}>
                <ul className={styles.navbar_link_container}>
                    {["about", "skills", "projects"].map((id) => (
                        <li
                            key={id}
                            className={`${styles.navbar_links} ${activeLink === id ? styles.navbar_active : ""
                                }`}
                            onClick={() => handleLinkClick(id)}
                        >
                            <a>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`${styles.navbar_menu_toggle} ${menuOpen ? styles.active : ""
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            
            <div
                className={`${styles.mobile_menu} ${menuOpen ? styles.mobile_menu_open : "" }`}>
                <ul className={styles.mobile_menu_links}>
                    {["about", "skills", "projects"].map((id) => (
                        <li key={id}>
                            <a
                                className={activeLink === id ? styles.mobile_active : ""}
                                onClick={() => handleLinkClick(id)}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
