import React from "react";
import stylesheet from "@assets/css/main.module.scss";
import Navbar from "@components/navbar";

export default function Layout({ children }) {
    return (
        <div className={stylesheet.layout_wrapper}>
            <div className={stylesheet.layout_container}>
                <div className={stylesheet.layout_navbar}>
                    <div className={stylesheet.layout_container}>
                        <Navbar/>
                    </div>
                </div>
                <div className={stylesheet.layout_main_wrapper}>
                    <div className={stylesheet.layout_main_container}>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}
