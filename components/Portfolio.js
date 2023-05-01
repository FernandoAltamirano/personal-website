import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";
import { useTranslation } from "react-i18next";
const Project = ({
  title,
  URLapp,
  image,
  URLcode,
  technologies,
  description,
  t,
}) => (
  <>
    <div className="item">
      <h2 className="title_item">{t(title)}</h2>
      <div className="image_container">
        <Link href={URLapp}>
          <a target="_blank">
            <Image className="imagep" src={image} width="400" height="200" />
          </a>
        </Link>
      </div>
      <div className="description">
        <h3>{t("Description")}</h3>
        <p>{t(description)}</p>
      </div>
      <div className="bottom_options">
        <div className="technologies_container">
          <span>{t("TECHNOLOGIES")}</span>
          <div className="line"></div>
          <div className="technologies">
            {technologies.map((tech) => (
              <p key={tech}>{tech}</p>
            ))}
          </div>
        </div>
        <div className="buttons_container">
          {URLcode && (
            <Link href={URLcode}>
              <a target="_blank">{t("View code")}</a>
            </Link>
          )}
          <Link href={URLapp}>
            <a target="_blank">{t("View project")}</a>
          </Link>
        </div>
      </div>
    </div>
  </>
);
function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className="portfolio" id="portfolio">
      <div className="title_section">
        <div></div>
        <h1>{t("Portfolio")}</h1>
      </div>
      <div className="wrapper">
        {projects.map((item) => (
          <Project key={item.id} {...item} t={t} />
        ))}
      </div>
      <Link href="http://github.com/FernandoAltamirano">
        <a target="_blank" className="vermas">
          {t("View more")}
        </a>
      </Link>
    </div>
  );
}

export default Portfolio;
