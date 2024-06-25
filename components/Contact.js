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
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/fernandoelialtamirano/"
        >
          <Icon icon={linkedin} size="40" className="icon" />
        </Link>
        <Link target="_blank" href="https://wa.me/+51986175271">
          <Icon icon={whatsapp} size="40" className="icon" />
        </Link>
        <Link href="mailto:fernandoelialtamirano@gmail.com">
          <Icon icon={envelope} size="40" className="icon" />
        </Link>
        <Link target="_blank" href="http://github.com/FernandoAltamirano">
          <Icon icon={github} size="40" className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
