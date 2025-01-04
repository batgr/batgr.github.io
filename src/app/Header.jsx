import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Banner from "./Banner";

import style from "@/app/ui/header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Navbar />
      <Banner />
      <Herosection />
    </header>
  );
};

export default Header;
