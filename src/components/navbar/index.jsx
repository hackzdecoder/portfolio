import { useViewContext } from "@context";
import React, { useEffect, useRef, useState } from "react";
import stylesheet from "@assets/css/navbar.module.scss";

const Navbar = () => {

    const { activeStatePage, setStateActivePage } = useViewContext();

    const watchActiveRef = useRef([]);
    const preventAutloadRef = useRef([]);

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const pageIdentifier = ["about", "skills", "projects"];
        const sectionContent = pageIdentifier.map((id) => document.getElementById(id)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.isIntersecting ? setStateActivePage(entry.target.id) : false;
                });
            }, { threshold: 0.6 }
        );

        sectionContent.forEach((section) => observer.observe(section));
        watchActiveRef.current = observer;

        return () => {
            watchActiveRef.current ? watchActiveRef.current.disconnect() : false;
            clearTimeout(preventAutloadRef.current);
        };
    }, []);

    const handleScrollTo = (id, event) => {
        event.preventDefault();
        setMenuOpen(false);
        setStateActivePage(id);

        watchActiveRef.current === true ? watchActiveRef.current.disconnect() : false;

        const pageLoadContent = setInterval(() => {
            const targetSection = document.getElementById(id);

            if (targetSection) {
                clearInterval(pageLoadContent);
                targetSection.scrollIntoView({ behavior: "smooth" });
                setStateActivePage(id);

                preventAutloadRef.current = setTimeout(() => {
                    const pageIdentifier = ["about", "skills", "projects"];
                    const sections = pageIdentifier.map((id) => document.getElementById(id)).filter(Boolean);

                    const observer = new IntersectionObserver(
                        (entries) => {
                            entries.forEach((entry) => {
                                entry.isIntersecting
                                    ? setStateActivePage(entry.target.id)
                                    : false;
                            });
                        },
                        { threshold: 0.6 }
                    );

                    sections.forEach((section) => observer.observe(section));
                    watchActiveRef.current = observer;
                }, 800);
            }
        }, 50);
    };

    return (
        <nav className={stylesheet.navbar_container}>
            <button
                className={`${stylesheet.navbar_menu_toggle} ${menuOpen ? stylesheet.active : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>

            <ul className={stylesheet.navbar_link_container}>
                <li
                    className={`${stylesheet.navbar_links} ${activeStatePage === "about" ? stylesheet.navbar_active : ""}`}
                    onClick={(e) => handleScrollTo("about", e)}
                >
                    <a href="#">About Me</a>
                </li>
                <li
                    className={`${stylesheet.navbar_links} ${activeStatePage === "skills" ? stylesheet.navbar_active : ""}`}
                    onClick={(e) => handleScrollTo("skills", e)}
                >
                    <a href="#">Skills</a>
                </li>
                <li
                    className={`${stylesheet.navbar_links} ${activeStatePage === "projects" ? stylesheet.navbar_active : ""}`}
                    onClick={(e) => handleScrollTo("projects", e)}
                >
                    <a href="#">My Projects</a>
                </li>
            </ul>

            <div className={`${stylesheet.mobile_menu} ${menuOpen ? stylesheet.mobile_menu_open : ''}`}>
                <ul className={stylesheet.mobile_menu_links}>
                    <li onClick={(e) => handleScrollTo("about", e)}>
                        <a className={activeStatePage === "about" ? stylesheet.mobile_active : ""}>
                            About Me
                        </a>
                    </li>
                    <li onClick={(e) => handleScrollTo("skills", e)}>
                        <a className={activeStatePage === "skills" ? stylesheet.mobile_active : ""}>
                            Skills
                        </a>
                    </li>
                    <li onClick={(e) => handleScrollTo("projects", e)}>
                        <a className={activeStatePage === "projects" ? stylesheet.mobile_active : ""}>
                            My Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;