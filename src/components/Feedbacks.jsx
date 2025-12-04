import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, company, image }) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 rounded-3xl xs:w-[320px] w-full flex flex-col overflow-hidden"
    >
        <div className="bg-black-300 text-white text-center py-2 font-bold text-[16px]">
            {company}
        </div>

        <div className="flex-1">
            <img
                src={image}
                alt={`company-${company}`}
                className="w-full h-full object-cover"
            />
        </div>
    </motion.div>
);

const Feedbacks = () => {
    const { t } = useLang();

    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            {/* Header section */}
            <div className="bg-tertiary rounded-2xl min-h-[100px] flex flex-col items-center justify-center py-6">
                <motion.div variants={textVariant()}>
                    <p className="text-secondary text-sm">{t("feedbacks.subtitle")}</p>
                    <h2 className="text-white text-2xl font-bold text-center">
                        {t("feedbacks.title")}
                    </h2>
                </motion.div>
            </div>

            <div className="mt-8 pb-14 px-4 flex flex-wrap gap-7 justify-center">
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={index}
                        index={index}
                        company={testimonial.company}
                        image={testimonial.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");

