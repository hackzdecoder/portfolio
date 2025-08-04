import React from "react";
import stylesheet from "@assets/css/main.module.scss";

const projectContent = [
    {
        title: "Library Record Management System",
        date: "May 2018 – November 2018",
        description:
            "An automated library system deployed at Pangasinan State University for student book searching, retrieval, monitoring, and record management."
    },
    {
        title: "Web Portal & Car Lease Record Management System",
        date: "February 2019 – May 2019",
        description:
            "A foreign project for Nooral Siraj Car Leasing in the UAE, handling car lease and customer record automation."
    },
    {
        title: "Paystore (E-Commerce Site)",
        date: "January 2022 – September 2022",
        description:
            "A billing portal and e-commerce site offering services like billing payments and money transfers, deployed online."
    },
    {
        title: "Paystore (Administrator Portal)",
        date: "January 2022 – September 2022",
        description:
            "Admin portal for Paystore, used to monitor registrations, payments, and customer billing statements."
    },
    {
        title: "Monitoring System Access for Partnership (Money Lending System)",
        date: "January 2021 – September 2022",
        description:
            "A money lending management platform deployed for business partnerships to track transactions, customers, and partners."
    },
    {
        title: "Enrollment Portal System",
        date: "October 2023 – December 2023",
        description:
            "A student enrollment system deployed at Dr. Juan A. Pastor National High School in Batangas, enabling online enrollment, grade monitoring, and subject schedule management."
    }
];

const Index = () => {
    return (
        <section id="projects" className={stylesheet.section_project_wrapper}>
            <div className={stylesheet.section_project_container}>
                <div className={stylesheet.section_project_header_title}>
                    <label>Projects</label>
                </div>
                <div className={stylesheet.section_project_card_grid_wrapper}>
                    <div className={stylesheet.section_project_card_grid}>
                        {projectContent.map((project, index) => (
                            <div key={index} className={stylesheet.section_project_card_box}>
                                <h3 className={stylesheet.section_project_card_title}>{project.title}</h3>
                                <span className={stylesheet.section_project_card_date}>{project.date}</span>
                                <p className={stylesheet.section_project_card_description}>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
