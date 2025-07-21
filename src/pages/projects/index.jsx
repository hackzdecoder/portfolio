import React from "react";
import stylesheet from "@assets/css/main.module.scss";
import Layout from "@components/layout";

const Index = () => {
    return (
        <Layout>
            <div className={stylesheet.projects_container_wrapper}>
                <div className={stylesheet.projects_header_container}>
                    <div className={stylesheet.projects_header_title}>
                        <span className={stylesheet.projects_header_text}>Projects</span>
                    </div>
                </div>
                <div className={stylesheet.projects_container_set}>
                    <div className={stylesheet.card_description}>
                        <div className={stylesheet.card_logo}>LOGO</div>
                        <div className={stylesheet.card_text}>
                            <div className="title">Title Project 1</div>
                            <div className="link">Link Here...</div>
                        </div>
                    </div>
                    <div className={stylesheet.card_description}>
                        <div className={stylesheet.card_logo}>LOGO</div>
                        <div className={stylesheet.card_text}>
                            <div className="title">Title Project 2</div>
                            <div className="link">Link Here...</div>
                        </div>
                    </div>
                    <div className={stylesheet.card_description}>
                        <div className={stylesheet.card_logo}>LOGO</div>
                        <div className={stylesheet.card_text}>
                            <div className="title">Title Project 3</div>
                            <div className="link">Link Here...</div>
                        </div>
                    </div>
                    <div className={stylesheet.card_description}>
                        <div className={stylesheet.card_logo}>LOGO</div>
                        <div className={stylesheet.card_text}>
                            <div className="title">Title Project 4</div>
                            <div className="link">Link Here...</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;