import Image from "next/image";
import reactImage from "../public/react.png";
import nodeImage from "../public//node.png";
import firebaseImage from "../public/firebase.png";
import layoutImage from "../public/layout.png";
import figmaImage from "../public/icons8-figma-96.png";
import dockerImage from "../public/docker.png";
import vueImage from "../public/vue.png";
import flutterImage from "../public/flutter.png";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="title_section">
        <div></div>
        <h1>Skills</h1>
      </div>
      <div className="wrapper">
        <div>
          <Image src={layoutImage} />
          <div className="content_item">
            <p>Layout</p>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>Tailwindcss</span>
              <span>Chakra UI</span>
              <span>Material UI</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={reactImage} />
          <div className="content_item">
            <p>Frontend Development - React</p>
            <div>
              <span>Javascript</span>
              <span>React</span>
              <span>Redux</span>
              <span>Nextjs</span>
              <span>Typescript</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={nodeImage} />
          <div className="content_item">
            <p>Backend Development</p>
            <div>
              <span>Node/Express</span>
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={figmaImage} />
          <div className="content_item">
            <p>UI Design</p>
            <div>
              <span>Figma</span>
            </div>
          </div>
        </div>
        <div>
        <Image src={flutterImage} />
          <div className="content_item">
            <p>Hybrid Development</p>
            <div>
              <span>Flutter mobile and web</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={dockerImage} />
          <div className="content_item">
            <p>Tools</p>
            <div>
              <span>Docker</span>
              <span>Firebase</span>
              <span>Vercel</span>
              <span>Notion</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={vueImage} />
          <div className="content_item">
            <p>Frontend Development - Vue</p>
            <div>
              <span>Javascript</span>
              <span>Vue</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={firebaseImage} />
          <div className="content_item">
            <p>Firebase</p>
            <div>
              <span>Firestore</span>
              <span>Storage</span>
              <span>Hosting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
