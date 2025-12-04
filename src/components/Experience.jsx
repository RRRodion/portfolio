import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLang } from "../context/LanguageContext";

import { psu, courses, army, selfEducation } from "../assets";

const ExperienceCard = ({ experience, icon }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: icon.background }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img src={icon.src} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, idx) => (
                    <li key={idx} className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const { t } = useLang();
    const experiences = t("experience", { returnObjects: true });
    const header = t("experienceHeader", { returnObjects: true });

    const icons = [
        { src: psu, background: "#383E56" },
        { src: courses, background: "#E6DEDD" },
        { src: army, background: "#383E56" },
        { src: selfEducation, background: "#E6DEDD" },
    ];

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    {header.subtitle}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    {header.title}
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={`exp-${index}`} experience={exp} icon={icons[index]} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
