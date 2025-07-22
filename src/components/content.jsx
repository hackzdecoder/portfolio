import React from "react";
import stylesheet from "@assets/css/main.module.scss";
import Layout from "@components/layout";

import AboutSection from "@pages/about-me";
import SkillSection from "@pages/skills";
import ProjectSection from "@pages/projects";

export default function Content() {
    return (
        <Layout>
            <div className={stylesheet.content_wrapper}>
                <div className={stylesheet.content_main_container}>
                    <div className={stylesheet.content_section_wrapper}>
                        <div className={stylesheet.content_section_container}>
                            <AboutSection />
                        </div>
                    </div>
                    <div className={stylesheet.content_section_wrapper}>
                        <div className={stylesheet.content_section_container}>
                            <SkillSection />
                        </div>
                    </div>
                    <div className={stylesheet.content_section_wrapper}>
                        <div className={stylesheet.content_section_container}>
                            <ProjectSection />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
