import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";
function Portfolio() {
  const Project = (item) => (
    <>
      <div className="item">
        <h2 className="title_item">{item.title}</h2>
        <div className="image_container">
          <Link href={item.URLapp}>
            <a target="_blank">
              <Image
                className="imagep"
                src={item.image}
                width="400"
                height="200"
              />
            </a>
          </Link>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{item.description}</p>
        </div>
        <div className="bottom_options">
          <div className="technologies_container">
            <span>TECHNOLOGIES</span>
            <div className="line"></div>
            <div className="technologies">
              {item.technologies.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
          </div>
          <div className="buttons_container">
            {item.URLcode && (
              <Link href={item.URLcode}>
                <a target="_blank">View code</a>
              </Link>
            )}
            <Link href={item.URLapp}>
              <a target="_blank">View project</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="portfolio" id="portfolio">
      <div className="title_section">
        <div></div>
        <h1>Portfolio</h1>
      </div>
      <div className="wrapper">
        {projects.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>
      <Link href="http://github.com/FernandoAltamirano">
        <a target="_blank" className="vermas">
          View more
        </a>
      </Link>
    </div>
  );
}

export default Portfolio;
