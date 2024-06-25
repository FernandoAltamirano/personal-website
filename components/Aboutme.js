import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSpring, a, config } from "react-spring";

function Aboutme() {
  const { t } = useTranslation();
  const animation = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });
  return (
    <a.div style={animation} className="aboutme" id="aboutme">
      <div className="title_section">
        <div></div>
        <h1>{t("About me")}</h1>
      </div>
      <div className="wrapper">
        <p>{t("about-1")}</p>
        <div className="downloadcv">
          <Link
            target="_blank"
            download
            href="./Fernando Eli Altamirano Alca-CURRICULUM.pdf"
          >
            {t("Download CV")}
          </Link>
        </div>
      </div>
    </a.div>
  );
}

export default Aboutme;
