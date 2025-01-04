import style from "@/app/ui/card.module.css";
import { animate, motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div className={style.card}>
      <h3>Anonyme</h3>
      <ul className={style.ul}>
        <li>
          <span className={style.question}>Age : </span> {props.age}{" "}
        </li>
        <li>
          <span className={style.question}>Profession : </span>
          {props.profession}{" "}
        </li>
        <li>
          <span className={style.question}>Temps d'écran : </span> {props.temps}
        </li>
        <li>
          <span className={style.question}>Votre utilisation : </span>{" "}
          {props.utilisation}
        </li>
        <li>
          <span className={style.question}>Impact sur votre santé : </span>{" "}
          {props.impact}
        </li>
        <li>
          <span className={style.question}>
            Avez vous conscience d'une addiction :{" "}
          </span>
          {props.addiction}{" "}
        </li>
        <li>
          <span className={style.question}>Sensibilité écologique : </span>
          {props.sensi}{" "}
        </li>
        <li>
          <span className={style.question}>
            Quelles solutions pour l'addiction aux écrans :{" "}
          </span>
          {props.solu}{" "}
        </li>
      </ul>
    </motion.div>
  );
};

export default Card;
