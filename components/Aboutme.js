import Link from "next/link";
import { useSpring, a, config } from "react-spring";

function Aboutme() {
  const animation = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });
  return (
    <a.div style={animation} className="aboutme" id="aboutme">
      <div className="title_section">
        <div></div>
        <h1>About me</h1>
      </div>
      <div className="wrapper">
        <p>
          Hi, my name is Fernando Altamirano Alca, I'm from Peru, mainly
          dedicated to Frontend Development but also I have knowledge in backend
          development. This because I like to be constantly research 🔍 and
          learning about new technologies. Also I like watch documentals about
          tech industry, sports and videogames 💻 .
        </p>
        <p>
          {" "}
          I considered that the future is on the web and is very important to me
          be part of this growth and constant evolution of the tech industry.
          For this i don't have a problem to learn new things, is more, with
          desire, motivation, time and some coffee ☕ I can learn many things.
          Also I like to do many things like practice sports, cook in my house
          and talk with my friends about many themes.
        </p>
        <div className="downloadcv">
          <Link href="./Fernando Eli Altamirano Alca-CURRICULUM.pdf">
            <a target="_blank" download>
              Download my CV
            </a>
          </Link>
        </div>
      </div>
    </a.div>
  );
}

export default Aboutme;
