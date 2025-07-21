import React, { useState, useEffect } from "react";

import stylesheet from "@assets/css/main.module.scss";

import pentagram_img from "@assets/img/pentagram.png";
import avatar_img from "@assets/img/avatar.png";
import facebook_icon from "@assets/icons/fb-icon.png";
import linked_icon from "@assets/icons/linked-icon.png";
import tg_icon from "@assets/icons/tg-icon.png";

import { RiDownloadLine } from "react-icons/ri";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

import Layout from "@components/layout";

const Index = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    useEffect(() => {
        const headerTitle = "<Hi, I'm Paul John/>";
        const headerSubTitle = "<Aspiring Software Engineer & Developer/>";

        let titleIndex = 0;
        let subtitleIndex = 0;

        const typeTitle = () => titleIndex <= headerTitle.length ? (setTitle(headerTitle.slice(0, titleIndex)), titleIndex++, setTimeout(typeTitle, 100)) : setTimeout(typeSubtitle, 500);

        const typeSubtitle = () => subtitleIndex <= headerSubTitle.length ? (setSubtitle(headerSubTitle.slice(0, subtitleIndex)), subtitleIndex++, setTimeout(typeSubtitle, 50))

            : setTimeout(() => {
                setTitle("");
                setSubtitle("");
                titleIndex = 0;
                subtitleIndex = 0;
                setTimeout(typeTitle, 1000);
            }, 3000);

        typeTitle();

    }, []);

    return (
        <Layout>
            <div className={stylesheet.home_container_wrapper}>
                <div className={stylesheet.home_image_wrapper}>
                    <div className={stylesheet.home_img_pentagram}>
                        <img src={pentagram_img} className={stylesheet.pentagram_img} alt="pentagram" />
                    </div>
                    <div className={stylesheet.home_img_avatar}>
                        <img src={avatar_img} className={stylesheet.avatar_img} alt="avatar" />
                    </div>
                </div>
                <div className={stylesheet.home_description_wrapper}>
                    <div className={stylesheet.header_description}>
                        <h1 className={stylesheet.header_title}>{title}</h1>
                        <h6 className={stylesheet.header_sub_title}>{subtitle}</h6>
                    </div>
                    <div className={stylesheet.download_cv}>
                        <button className={stylesheet.btn_download_cv}>
                            <i><RiDownloadLine /></i>
                            DOWNLOAD CV
                        </button>
                    </div>
                    <div className={stylesheet.home_section_footer_container_wrapper}>
                        <ul className={stylesheet.home_section_footer_wrapper}>
                            <li className={stylesheet.home_section_footer}>
                                <i><BsEnvelopeFill /> sagerpj311@gmail.com</i>
                            </li>
                            <li className={stylesheet.home_section_footer}>
                                <i><BsFillTelephoneFill /> 0936 770 3025</i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={stylesheet.home_social_media_icons_container_wrapper}>
                    <nav className={stylesheet.social_media_links_wrapper}>
                        <ul>
                            <li className={stylesheet.social_media_links}>
                                <a href="#"><img src={facebook_icon} alt="facebook_icon" /></a>
                            </li>
                            <li className={stylesheet.social_media_links}>
                                <a href="#"><img src={linked_icon} alt="linked_icon" /></a>
                            </li>
                            <li className={stylesheet.social_media_links}>
                                <a href="#"><img src={tg_icon} alt="tg_icon" /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
