import Image from "next/image";
import reactImage from "../public/react.png";
import nodeImage from "../public//node.png";
import firebaseImage from "../public/firebase.png";
import layoutImage from "../public/layout.png";
import figmaImage from "../public/icons8-figma-96.png";
import notionImage from "../public/notion.png";

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
            </div>
          </div>
        </div>
        <div>
          <Image src={reactImage} />
          <div className="content_item">
            <p>Frontend Development</p>
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
          <Image
            src="https://nmelentjevs.com/static/media/react-native.2081a364.png"
            width="70"
            layout="fixed"
            height="70"
          />
          <div className="content_item">
            <p>Mobile Development</p>
            <div>
              <span>React Native</span>
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
          <Image src={notionImage} />
          <div className="content_item">
            <p>Team Management </p>
            <div>
              <span>Notion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
