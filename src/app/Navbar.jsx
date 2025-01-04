import style from "@/app/ui/navbar.module.css";
const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <h2 className={style.navBarTitle}>Focus App</h2>
      <ul className={style.navBarElements}>
        <li>Accueil</li>
        <li>Produits</li>
        <li>A propos</li>
      </ul>
    </nav>
  );
};

export default Navbar;
