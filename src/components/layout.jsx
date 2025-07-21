
import Navbar from "@components/navbar";
import stylesheet from "@assets/css/main.module.scss";

export default function Layout({ children }) {
    return (
        <div className={stylesheet.layout_container_wrapper}>
            <div className={stylesheet.layout_container}>
                <div className={stylesheet.layout_inline_container}>
                    <div className={stylesheet.layout_navbar_content}>
                        <Navbar />
                    </div>
                    <div className={stylesheet.layout_section_content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
