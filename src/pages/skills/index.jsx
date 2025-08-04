import React from "react";
import stylesheet from "@assets/css/main.module.scss";
import { BiLogoPhp, BiLogoJavascript, BiLogoJava, BiLogoTypescript } from "react-icons/bi";
import { SiReact, SiVuedotjs, SiJquery, SiAngular, SiCodeigniter, SiLaravel, SiNodedotjs, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiLinux, SiGit, SiJenkins, SiCpanel, SiDocker } from "react-icons/si";


const Index = () => {
    return (
        <section id="skills" className={stylesheet.section_skills_wrapper}>
            <div className={stylesheet.section_skills_container}>
                <div className={stylesheet.section_skills_header_title}>
                    <label>Skills</label>
                </div>
                <div className={stylesheet.section_skills_content}>
                    <div className={stylesheet.skills_card}>
                        <div className={stylesheet.skills_card_title}>
                            &lt;Programming/&gt;
                        </div>
                        <div className={stylesheet.skills_icon_list}>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <BiLogoPhp className={stylesheet.skills_icon} />
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <BiLogoJava className={stylesheet.skills_icon} />
                                <span>Java</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <BiLogoJavascript className={stylesheet.skills_icon} />
                                <span>JavaScript</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <BiLogoTypescript className={stylesheet.skills_icon} />
                                <span>TypeScript</span>
                            </div>
                        </div>
                    </div>
                    <div className={stylesheet.skills_card}>
                        <div className={stylesheet.skills_card_title}>
                            &lt;Frontend/&gt;
                        </div>
                        <div className={stylesheet.skills_icon_list}>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiReact className={stylesheet.skills_icon} />
                                <span>ReactJS</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiVuedotjs className={stylesheet.skills_icon} />
                                <span>VueJS</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiJquery className={stylesheet.skills_icon} />
                                <span>jQuery</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiAngular className={stylesheet.skills_icon} />
                                <span>Angular</span>
                            </div>
                        </div>
                    </div>

                    <div className={stylesheet.skills_card}>
                        <div className={stylesheet.skills_card_title}>
                            &lt;Backend/&gt;
                        </div>
                        <div className={stylesheet.skills_icon_list}>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiLaravel className={stylesheet.skills_icon} />
                                <span>Laravel</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiCodeigniter className={stylesheet.skills_icon} />
                                <span>CodeIgniter</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiNodedotjs className={stylesheet.skills_icon} />
                                <span>Node.js</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiSpringboot className={stylesheet.skills_icon} />
                                <span>Spring Boot</span>
                            </div>
                        </div>
                    </div>
                    <div className={stylesheet.skills_card}>
                        <div className={stylesheet.skills_card_title}>
                            &lt;DevOops/&gt;
                        </div>
                        <div className={stylesheet.skills_icon_list}>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiLinux className={stylesheet.skills_icon} />
                                <span>Linux</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiGit className={stylesheet.skills_icon} />
                                <span>Git</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiJenkins className={stylesheet.skills_icon} />
                                <span>Jenkins</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiCpanel className={stylesheet.skills_icon} />
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiDocker className={stylesheet.skills_icon} />
                                <span>Docker</span>
                            </div>
                        </div>
                    </div>
                    <div className={stylesheet.skills_card}>
                        <div className={stylesheet.skills_card_title}>
                            &lt;Database/&gt;
                        </div>
                        <div className={stylesheet.skills_icon_list}>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiMysql className={stylesheet.skills_icon} />
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiPostgresql className={stylesheet.skills_icon} />
                                <span>PostgreSQL</span>
                            </div>
                            <div className={stylesheet.skills_icon_wrapper}>
                                <SiMongodb className={stylesheet.skills_icon} />
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
