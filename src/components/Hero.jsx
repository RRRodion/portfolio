import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.png";
import { styles } from "../styles";
import { useLang } from "../context/LanguageContext";


const Hero = () => {
    const { t } = useLang();

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-between mx-auto px-5 pt-[80px] sm:pt-[120px]">
            <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-10">

                <div className="flex flex-row gap-5">
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                        <div className="w-1 sm:h-80 h-40 violet-gradient" />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            {t("hero.greeting")} <span className="text-[#915EFF]">{t("hero.name")}</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            {t("hero.description").split(" <br />").map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    <br className="sm:block hidden" />
                                </React.Fragment>
                            ))}
                            <br className="sm:block hidden" />
                            {t("hero.traits").split("•").map((trait, idx) => trait && (
                                <React.Fragment key={idx}>
                                    •{trait.trim()} <br className="sm:block hidden" />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="flex-shrink-0 self-center sm:self-auto">
                    <img
                        src={me}
                        alt="me"
                        className="w-40 sm:w-44 md:w-52 lg:w-64 xl:w-72 h-auto object-contain"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center mt-10 sm:mt-0">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
