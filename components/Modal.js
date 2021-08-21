import Link from "next/link";
import { useEffect } from "react";
import Icon from "react-icons-kit/Icon";
import { ic_close } from "react-icons-kit/md/ic_close";
function Modal({ showMenu, setShowMenu }) {
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
      <div>
        <Icon
          style={{ cursor: "pointer" }}
          icon={ic_close}
          size="35"
          onClick={() => setShowMenu(false)}
        />
      </div>
      <div className="links_container">
        <Link href="#aboutme">
          <a onClick={closeModal}>About me</a>
        </Link>
        <Link href="#skills">
          <a onClick={closeModal}>Skills</a>
        </Link>
        <Link href="#portfolio">
          <a onClick={closeModal}>Portfolio</a>
        </Link>
        <Link href="#contact">
          <a onClick={closeModal}>Contact</a>
        </Link>
      </div>
    </div>
  );
}

export default Modal;
