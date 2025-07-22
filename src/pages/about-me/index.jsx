import React, { useState, useEffect } from "react";
import stylesheet from "@assets/css/main.module.scss";
import { RiDownloadLine, RiGitBranchLine, RiFacebookBoxLine, RiTelegram2Line, RiPhoneLine, RiMailLine } from "react-icons/ri";

import pentagram_img from "@assets/img/pentagram.png";
import avatar_img from "@assets/img/avatar.png";

const Index = () => {

    const [title, setTitle] = useState(false);
    const [subtitle, setSubtitle] = useState(false);

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
        <section id="about" className={stylesheet.section_about_wrapper}>
            <div className={stylesheet.section_about_container}>
                <div className={stylesheet.section_about_image_wrapper}>
                    <div className={stylesheet.section_about_pentagram_img}>
                        <img src={pentagram_img} className={stylesheet.pentagram_img} alt="pentagram" />
                    </div>
                    <div className={stylesheet.section_about_avatar_img}>
                        <img src={avatar_img} className={stylesheet.avatar_img} alt="avatar" />
                    </div>
                </div>
                <div className={stylesheet.section_about_description_wrapper}>
                    <h1 className={stylesheet.section_about_header_title}>{title}</h1>
                    <h6 className={stylesheet.section_about_header_sub_title}>{subtitle}</h6>
                </div>
                <div className={stylesheet.section_about_download_btn_wrapper}>
                    <button className={stylesheet.section_about_download_btn}>
                        <i><RiDownloadLine /></i>
                        DOWNLOAD CV
                    </button>
                </div>
                <div className={stylesheet.section_about_social_media_wrapper}>
                    <ul className={stylesheet.section_about_social_media_icons}>
                        <li>
                            <a href="#"><RiGitBranchLine /></a>
                        </li>
                        <li>
                            <a href="#"><RiFacebookBoxLine /></a>
                        </li>
                        <li>
                            <a href="#"><RiTelegram2Line /></a>
                        </li>
                    </ul>
                </div>
                <div className={stylesheet.section_about_contact_wrapper}>
                    <ul className={stylesheet.section_about_contact_icons}>
                        <li><a href="#"><RiPhoneLine /> 0936 770 3025</a></li>
                        <li><a href="#"><RiMailLine /> sagerpj311@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Index;
