"use client";
import { animate, motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import style from "@/app/ui/sectionIntro.module.css";

const SectionIntro = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      y: 0,
      opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <section className={style.section}>
      <motion.p
        // ref={refP1}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
      >
        En moyenne, les gens passent{" "}
        <span className={style.spanRed}>3 heures et 15 minutes </span> sur leurs
        smartphones <span className={style.spanRed}>chaque jour.</span>
      </motion.p>
      <motion.p
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
      >
        Une personne consulte son téléphone en moyenne{" "}
        <span className={style.spanRed}>58 fois </span> par{" "}
        <span className={style.spanRed}>jour.</span>
      </motion.p>
      <motion.p
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
      >
        <span className={style.spanRed}>3/4</span> des personnes de{" "}
        <span className={style.spanRed}>la génération Z disent</span> passer
        trop de temps sur leur téléphone.
      </motion.p>
      <motion.p
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
      >
        Pour des personnes{" "}
        <span className={style.spanRed}>agées entre 5 et 17 ans</span>, le temps
        d'écran <span className={style.spanRed}>peut</span> avoir{" "}
        <span className={style.spanRed}>des effets négatifs</span> sur: le
        poids, les problèmes comportementaux,{" "}
        <span className={style.spanRed}>l'anxiété</span>, l'hyperactivité, les
        troubles de l'attention,{" "}
        <span className={style.spanRed}>l'estime de soi</span> et des problèmes
        psychosociaux.
      </motion.p>
    </section>
  );
};

export default SectionIntro;
