import { useState } from "react";
import Image from "next/image";
import { Icon } from "react-icons-kit";
import { bars } from "react-icons-kit/fa/bars";
import Link from "next/link";
import logo from "../public/logo.jpg";
import React from "react";
import Modal from "./Modal";
import { useSpring, a, config } from "react-spring";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const animation = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });
  return (
    <>
      <a.div style={animation} className="header wrapper" id="header">
        <Link href="/">
          <a>
            <Image src={logo} width="150" height="45" />
          </a>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="links">
            <Link href="#aboutme">
              <a>About me</a>
            </Link>
            <Link href="#skills">
              <a>Skills</a>
            </Link>
            <Link href="#portfolio">
              <a>Portfolio</a>
            </Link>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </div>

          <div>
            <Icon
              style={{ cursor: "pointer" }}
              icon={bars}
              size="30"
              className="icon"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </a.div>
      <Modal showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}

export default Header;
