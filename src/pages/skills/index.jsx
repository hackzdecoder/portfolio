import React from "react";
import stylesheet from "@assets/css/main.module.scss";
import Layout from "@components/layout";

import php_logo from "@assets/img/php-logo.png";
import js_logo from "@assets/img/js-logo.png";
import java_logo from "@assets/img/java-logo.png";
import html_logo from "@assets/img/html-logo.png";
import css_logo from "@assets/img/css-logo.png";
import tail_wind from "@assets/img/tailwind-logo.png";
import react_logo from "@assets/img/react-logo.png";
import bootstrap_logo from "@assets/img/bootstrap-logo.png";
import vue_logo from "@assets/img/vue-logo.png";
import laravel_logo from "@assets/img/laravel-logo.png";
import node_logo from "@assets/img/node-logo.png";
import spring_boot_logo from "@assets/img/springboot-logo.png";
import C_language_logo from "@assets/img/c_sharp.png";
import mysql_logo from "@assets/img/mysql-logo.png";
import github_logo from "@assets/img/github-logo.png";
import linux_logo from "@assets/img/linux-logo.png";

const Index = () => {
    return (
        <Layout>
            <div className={stylesheet.skills_container_wrapper}>
                <div className={stylesheet.skills_header_container}>
                    <div className={stylesheet.skills_header_title}>
                        <span className={stylesheet.skills_header_text}>SKILLS</span>
                    </div>
                </div>
                <div className={stylesheet.skills_container_set}>
                    <label className={stylesheet.skills_tag}>&lt;Programming/&gt;</label>
                    <div className={stylesheet.skills_description}>
                        <img src={php_logo} alt="PHP" />
                        <img src={js_logo} alt="JavaScript" />
                        <img src={java_logo} alt="Java" />
                    </div>
                </div>
                <div className={stylesheet.skills_container_set}>
                    <label className={stylesheet.skills_tag}>&lt;Frontend/&gt;</label>
                    <div className={stylesheet.skills_description}>
                        <img src={html_logo} alt="HTML" />
                        <img src={css_logo} alt="CSS" />
                        <img src={tail_wind} alt="Tailwind" />
                        <img src={react_logo} alt="React" />
                        <img src={vue_logo} alt="React" />
                        <img src={bootstrap_logo} alt="Bootstrap" />
                    </div>
                </div>
                <div className={stylesheet.skills_container_set}>
                    <label className={stylesheet.skills_tag}>&lt;Backend/&gt;</label>
                    <div className={stylesheet.skills_description}>
                        <img src={laravel_logo} alt="Laravel" />
                        <img src={node_logo} alt="node" />
                        <img src={spring_boot_logo} alt="Springboot" />
                        <img src={C_language_logo} alt="Csharp" />
                    </div>
                </div>
                <div className={stylesheet.skills_container_set}>
                    <label className={stylesheet.skills_tag}>&lt;Database/&gt;</label>
                    <div className={stylesheet.skills_description}>
                        <img src={mysql_logo} alt="Mysql" />
                    </div>
                </div>
                <div className={stylesheet.skills_container_set}>
                    <label className={stylesheet.skills_tag}>
                        &lt;Devoops & Tools/&gt;
                    </label>
                    <div className={stylesheet.skills_description}>
                        <img src={github_logo} alt="Github" />
                        <img src={linux_logo} alt="Linux" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
