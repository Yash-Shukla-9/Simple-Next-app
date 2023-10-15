import Link from "next/link";
import Image from "next/image";
import Logoimg from "../../../public/logo.png";
import css from "./styles.module.css";

const list = [
  {
    id: 1,
    title: "Home",
    url: "/home",
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
        {list.map((item) => {
          return <Link href={item.url}>{item.title}</Link>;
        })}
      </div>
    </div>
  );
};
export default Header;
