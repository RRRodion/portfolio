import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLang } from "../context/LanguageContext";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { lang, toggleLanguage, t } = useLang();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 ${
                scrolled ? "bg-primary" : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Лого */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Rodion's &nbsp;
                        <span className="sm:block hidden"> | CV</span>
                    </p>
                </Link>

                {/* Навигация пк */}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-white" : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
                        </li>
                    ))}
                </ul>

                {/* Правый блок: кнопка языка + моб меню */}
                <div className="flex items-center gap-4">
                    {/* Селект языка (всегда видимый) */}
                    <div className="relative inline-block">
                        <select
                            value={lang}
                            onChange={toggleLanguage}
                            className="bg-[#915EFF] text-white font-semibold px-3 py-1.5 rounded-md cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-purple-300 appearance-none pr-8"
                        >
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white">
              ▼
            </span>
                    </div>

                    {/* Моб меню */}
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle(!toggle)}
                        />

                        <div
                            className={`${
                                !toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                        >
                            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                                {navLinks.map((nav) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                            active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                        onClick={() => {
                                            setToggle(false);
                                            setActive(nav.title);
                                        }}
                                    >
                                        <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
