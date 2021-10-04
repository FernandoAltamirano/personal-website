import Image from "next/image";
import Link from "next/link";
import { useSpring, a, config } from "react-spring";
const profile =
  "http://fernandoimages.imgix.net/prueba/profile 2.jpg?auto=compress&cs=tinysrgb&dpr=4&h=400&w=300";
function Principal() {
  const animation = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });
  return (
    <a.div style={animation} className="principal wrapper">
      <div className="image_container">
        <Image src={profile} width="100%" height="100%" layout="responsive" />
      </div>
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
            <Link href="https://www.linkedin.com/in/fernandoelialtamirano/">
              <a target="_blank">Linkedin</a>
            </Link>
          </div>
        </div>
      </div>
    </a.div>
  );
}

export default Principal;
