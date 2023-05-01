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
          <p>👾 {t("Web developer")}</p>
          <p>🎓 {t("System engineer")}</p>
          <p>👥 {t("Soft skills")}</p>
        </div>
        <div className="contact_me">
          <span>{t("Contact me")}</span>
          <div className="buttons_contact">
            <Link href="https://github.com/FernandoAltamirano">
              <a target="_blank">Github</a>
            </Link>
            <Link href="https://www.linkedin.com/in/fernandoelialtamirano/">
              <a className="linkedin-link" target="_blank">
                Linkedin
              </a>
            </Link>
          </div>
        </div>
      </div>
    </a.div>
  );
}

export default Principal;
