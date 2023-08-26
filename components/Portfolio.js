import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
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
      <Tilt>
        <div className="image_container">
          <Link href={URLcode}>
            <a target="_blank">
              <Image className="imagep" src={image} width="400" height="280" />
            </a>
          </Link>
        </div>
      </Tilt>
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
