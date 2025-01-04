"use client";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import style from "@/app/ui/faq.module.css";
import Card from "./Card";

const SectionFaq = () => {
  const infos = [
    {
      id: "a",
      age: "18 ans",
      profession: "Je suis une étudiante",
      temps: "30 min à 1h",
      utilisation: "Réseaux sociaux;Actualités;Travail/Etude.",
      impact: "Non, Je n'y passe pas assez de temps dessus.",
      addiction: "Non",
      sensi: "Oui",
      solu: "Devenir + responsable de son utilisation des écrans.",
    },
    {
      id: "b",
      age: "18 ans",
      profession: "Je suis une étudiante",
      temps: "5 à 7h",
      utilisation: "Réseaux sociaux;Diveritissement. Twitch principalement.",
      impact:
        "Oui, Un sentiment de mal-être. L’impression de perdre son temps aussi",
      addiction: "Peut-être",
      sensi: "Je me suis jamais interessée à la question",
      solu: "Passer plus de temps à faire du sport !",
    },
    {
      id: "a",
      age: "18 ans",
      profession: "Je suis une étudiante",
      temps: "4h",
      utilisation: "Réseaux sociaux;Actualités;Travail/Etude.",
      impact: "Non",
      addiction: "Non",
      sensi: "Oui",
      solu: "Aucune idée",
    },
    {
      id: "a",
      age: "18 ans",
      profession: "Je suis une étudiante",
      temps: "30 min à 1h",
      utilisation: "Réseaux sociaux;Actualités;Travail/Etude.",
      impact: "Non, Je n'y passe pas assez de temps dessus.",
      addiction: "Non",
      sensi: "Oui",
      solu: "Devenir + responsable de son utilisation des écrans.",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      y: 50,
    },
    animate: {
      y: 0,

      transition: {
        ease: "easeInOut",
        duration: 1,
      },
      once: true,
    },
  };

  return (
    <section className={style.container}>
      <motion.h2
        className={style.title}
        // variants={fadeInAnimationVariants}
        // initial="initial"
        // whileInView="animate"
      >
        Quelques témoignages
      </motion.h2>
      <motion.div
        className={style.scroller}
        // variants={fadeInAnimationVariants}
        // initial="initial"
        // whileInView="animate"
      >
        <motion.div className={style.innerScroller}>
          {[...infos].map((info) => (
            <Card
              key={info.id}
              age={info.age}
              profession={info.profession}
              temps={info.temps}
              utilisation={info.utilisation}
              impact={info.impact}
              addiction={info.addiction}
              sensi={info.sensi}
              solu={info.solu}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionFaq;
