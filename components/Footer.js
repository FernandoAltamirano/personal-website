import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer wrapper">
      <div>
        <p>
          {t("Created by Fernando Altamirano with ❤️ -")}{" "}
          {new Date(Date.now()).getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
