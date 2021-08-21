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
          {" "}
          Hi, my name is Fernando Altamirano Alca, I'm from Peru{" "}
          <span style={{ marginRight: 10 }}>
            <img
              src="https://images.emojiterra.com/twitter/512px/1f1f5-1f1ea.png"
              width="15"
              alt=""
            />
          </span>
          mainly dedicated to Frontend Development but also I have knowledge in
          backend development. This because I like to be constantly research 🔍
          and learning about new technologies. Also I like spend time other
          watch documentals about tech industry, sports and videogames 💻 .
        </p>
        <p>
          {" "}
          I considered that the future is on the web and is very important to me
          be part of this growth and constant evolution of the tech industry.
          For this i don't have a problem to learn new things, is more, with
          desire, motivation, time and some coffee ☕ I can learn many things.
          Finally, counting on me is counting on a person that seeks the
          constant personal growth and of the team 👨‍💻👩‍💻 , that is very important
          to growing up and to be a successful company 🏦 .
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
