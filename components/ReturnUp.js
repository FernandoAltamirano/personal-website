import { useEffect, useState } from "react";
import { Icon } from "react-icons-kit/Icon";
import { arrowUp2 } from "react-icons-kit/icomoon/arrowUp2";
import Link from "next/link";
function ReturnUp() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  });
  return (
    <div className={scroll > 0 ? "returnup" : "returnup hidden"}>
      <Link href="#header">
        <a>
          <div>
            <Icon icon={arrowUp2} size="30" />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ReturnUp;
