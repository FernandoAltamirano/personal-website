import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSpring, a } from "react-spring";
const profile = "/profile.jpeg";

function Principal() {
  const { t } = useTranslation();
  const animation = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });
  return (
    <a.div style={animation} className="principal wrapper">
      <div className="image_container">
        <img src={profile} />
      </div>
      <div>
        <h1>Fernando Altamirano Alca</h1>
        <div className="description">
          <p>💻 {t("Web and Mobile developer")}</p>
          <p>🎓 {t("System engineer")}</p>
          <p>👥 {t("Teamwork")}</p>
        </div>
        <div className="contact_me">
          <span>{t("Contact me")}</span>
          <div className="buttons_contact">
            <Link target="_blank" href="https://github.com/FernandoAltamirano">
              Github
            </Link>
            <Link
              className="linkedin-link"
              target="_blank"
              href="https://www.linkedin.com/in/fernandoelialtamirano/"
            >
              Linkedin
            </Link>
            <Link
              className="download-cv"
              target="_blank"
              download
              href="./Fernando Eli Altamirano Alca-CURRICULUM.pdf"
            >
              {t("Curriculum")}
            </Link>
          </div>
        </div>
      </div>
    </a.div>
  );
}

export default Principal;
