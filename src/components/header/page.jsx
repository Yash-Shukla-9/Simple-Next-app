import Link from "next/link";

import Image from "next/image";
import Logoimg from "public/logo.png";
import css from "./styles.module.css";
import Button from "../Button/Button";
import Darkmode from "../Darkmode/Darkmode";

const list = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "Blogs",
    url: "/blogs",
  },

  {
    id: 3,
    title: "About",
    url: "/about",
  },

  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 5,
    title: "DashBoard",
    url: "/dashboard",
  },
];

const Header = () => {
  return (
    <div className={css.navbar}>
      <div className="img-div">
        <Link href="/home">
          <Image src={Logoimg} alt="Logo " width={55} />
        </Link>
      </div>

      <div className={css.links}>
        <Darkmode />
        {list.map((item) => {
          return (
            <Link key={item.id} href={item.url} className={css.text}>
              {item.title}
            </Link>
          );
        })}

        <Button text="Logout" url="/" />
      </div>
    </div>
  );
};
export default Header;
