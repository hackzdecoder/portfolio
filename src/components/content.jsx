import React, { useEffect, useState } from "react";
import { useViewContext } from '@context';
import stylesheet from "@assets/css/main.module.scss";

import Home from "@pages/home";
import Skills from "@pages/skills";
import Projects from "@pages/projects";

export default function Content() {
    const { activeStatePage } = useViewContext();
    const [loadContext, setLoadContext] = useState(["about"]);

    useEffect(() => {
        !loadContext.includes(activeStatePage)
            ? (setLoadContext(prev => [...prev, activeStatePage]))
            : false;
    }, [activeStatePage]);

    const invokeContext = (id) => activeStatePage && loadContext.includes(id);

    return (
        <div className={stylesheet.content_wrapper}>
            {invokeContext('about') && (
                <section id="about" className={stylesheet.section_container_wrapper}>
                    <div className={stylesheet.section_container}>
                        <Home />
                    </div>
                </section>
            )}

            {invokeContext('skills') && (
                <section id="skills" className={stylesheet.section_container_wrapper}>
                    <div className={stylesheet.section_container}>
                        <Skills />
                    </div>
                </section>
            )}

            {invokeContext('projects') && (
                <section id="projects" className={stylesheet.section_container_wrapper}>
                    <div className={stylesheet.section_container}>
                        <Projects />
                    </div>
                </section>
            )}

        </div>
    );
}
