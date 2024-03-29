import { Icon } from "react-icons-kit";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { github } from "react-icons-kit/fa/github";
import { envelope } from "react-icons-kit/fa/envelope";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact" id="contact">
      <div className="title_section">
        <div></div>
        <h1>{t("Contact")}</h1>
      </div>
      <div className="wrapper">
        <Link href="https://www.linkedin.com/in/fernandoelialtamirano/">
          <a target="_blank">
            <Icon icon={linkedin} size="40" className="icon" />
          </a>
        </Link>
        <Link href="https://wa.me/+51986175271">
          <a target="_blank">
            <Icon icon={whatsapp} size="40" className="icon" />
          </a>
        </Link>
        <Link href="mailto:fernandoelialtamirano@gmail.com">
          <a>
            <Icon icon={envelope} size="40" className="icon" />
          </a>
        </Link>
        <Link href="http://github.com/FernandoAltamirano">
          <a target="_blank">
            <Icon icon={github} size="40" className="icon" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
