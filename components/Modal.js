import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Icon from "react-icons-kit/Icon";
import { ic_close } from "react-icons-kit/md/ic_close";
function Modal({ showMenu, setShowMenu, Moon, Sun, handleDarkMode, checked }) {
  const { t } = useTranslation();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    });
    return () =>
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          setShowMenu(false);
        }
      });
  });
  const closeModal = () => setShowMenu(false);
  return (
    <div className={showMenu ? "modal showModal" : "modal"}>
      <div className="close_container">
        <Icon
          style={{ cursor: "pointer" }}
          icon={ic_close}
          size="35"
          onClick={() => setShowMenu(false)}
        />
      </div>
      <div className="links_container">
        <label style={{ cursor: "pointer", marginTop: "15px" }}>
          <input
            hidden
            type="checkbox"
            checked={checked}
            onChange={handleDarkMode}
          />
          {!checked ? <Moon /> : <Sun />}
        </label>
        <Link href="#aboutme">
          <a onClick={closeModal}>{t("About me")}</a>
        </Link>
        <Link href="#skills">
          <a onClick={closeModal}>{t("Skills")}</a>
        </Link>
        <Link href="#portfolio">
          <a onClick={closeModal}>{t("Portfolio")}</a>
        </Link>
        <Link href="#contact">
          <a onClick={closeModal}>{t("Contact")}</a>
        </Link>
      </div>
    </div>
  );
}

export default Modal;
