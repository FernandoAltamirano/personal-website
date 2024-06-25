import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "react-icons-kit";
import { bars } from "react-icons-kit/fa/bars";
import Link from "next/link";
import logoheaderw from "../public/logoheaderw.svg";
import logoheaderd from "../public/logoheaderd.svg";
import React from "react";
import Modal from "./Modal";
import { useSpring, a, config } from "react-spring";
import { useTranslation } from "react-i18next";

const Moon = (props) => (
  <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5 3.5c1.328 0 2.57.37 3.628 1.012a6 6 0 0 0-.001 11.977A7 7 0 1 1 11.5 3.5z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Sun = (props) => (
  <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity={0.3}>
        <path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4 0 2.22 1.781 4 4 4zM4.136 4.136 5.55 5.55M15.45 15.45l1.414 1.414M1.5 10.5h2M17.5 10.5h2M4.136 16.864 5.55 15.45M15.45 5.55l1.414-1.414M10.5 19.5v-2M10.5 3.5v-2" />
      </g>
      <g transform="translate(-210 -1)">
        <path d="M220.5 2.5v2M227 5l-1.5 1.5" />
        <circle cx={220.5} cy={11.5} r={4} />
        <path d="m214 5 1.5 1.5M220.5 20.5v-2M227 18l-1.5-1.5M214 18l1.5-1.5M211.5 11.5h2M227.5 11.5h2" />
      </g>
    </g>
  </svg>
);

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const { i18n, t } = useTranslation();
  const animation = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });
  const handleDarkMode = (ev) => {
    if (ev.target.checked) {
      document.body.classList.add("dark");
      window.localStorage.setItem("dark", true);
      setChecked(true);
    } else {
      document.body.classList.remove("dark");
      window.localStorage.removeItem("dark");
      setChecked(false);
    }
  };
  const handleSetLang = (language) => {
    let lang = "";
    if (language.toLowerCase() === "en") {
      lang = "en";
    } else {
      lang = "es";
    }
    i18n.changeLanguage(lang);
    window.localStorage.setItem("lang", lang);
  };
  useEffect(() => {
    const isDark = window.localStorage.getItem("dark");
    if (isDark) return setChecked(true);
    setChecked(false);
  }, []);
  return (
    <>
      <a.div style={animation} className="header wrapper" id="header">
        <Link href="/">
          <Image
            src={checked ? logoheaderw : logoheaderd}
            width="100"
            height="45"
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="links">
            <Link href="#aboutme">{t("About me")}</Link>
            <Link href="#skills">{t("Skills")}</Link>
            <Link href="#portfolio">{t("Portfolio")}</Link>
            <Link href="#contact">{t("Contact")}</Link>
            <label style={{ cursor: "pointer" }}>
              <input
                hidden
                type="checkbox"
                checked={checked}
                onChange={handleDarkMode}
              />
              {!checked ? <Moon /> : <Sun />}
            </label>
            <div className="lang">
              <img
                src={checked ? "/world-light.svg" : "/world.svg"}
                alt="world icon"
                className="world-icon"
                width={17}
                height={17}
                // style={{ cursor: "pointer" }}
              />
              <div class="dropdown-menu-lang">
                <p onClick={() => handleSetLang("ES")}>ES</p>
                <p onClick={() => handleSetLang("EN")}>EN</p>
              </div>
            </div>
          </div>
          <div>
            <Icon
              style={{ cursor: "pointer" }}
              icon={bars}
              size="30"
              className="icon"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </a.div>
      <Modal
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        Moon={Moon}
        Sun={Sun}
        handleDarkMode={handleDarkMode}
        checked={checked}
      />
    </>
  );
}

export default Header;
