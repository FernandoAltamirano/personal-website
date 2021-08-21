import Image from "next/image";
import Link from "next/link";
import photo from "../public/prueba.jpeg";
import { useSpring, a, config } from "react-spring";

function Principal() {
  const animation = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });
  return (
    <a.div style={animation} className="principal wrapper">
      <Image src={photo} />
      <div>
        <h1>Fernando Altamirano Alca</h1>
        <div className="description">
          <p>👨‍💻 Frontend Developer</p>
          <p>🎓 System Engineering Student</p>
          <p>🚀 Developer by passion</p>
        </div>
        <div className="contact_me">
          <span>Contact me</span>
          <div className="buttons_contact">
            <Link href="https://github.com/FernandoAltamirano">
              <a target="_blank">Github</a>
            </Link>
            <Link href="https://www.linkedin.com/in/fernando-eli-altamirano-alca-51b717208/">
              <a target="_blank">Linkedin</a>
            </Link>
          </div>
        </div>
      </div>
    </a.div>
  );
}

export default Principal;
