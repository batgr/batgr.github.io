"use client";
import style from "@/app/ui/heroSection.module.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "./data/Images";
import logo from "../../public/images/logo.png";

const Herosection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //on initialise les conteurs on applique une transformation pour arrondir les valeurs du compteurs
  const countHour = useMotionValue(0);
  const countMin = useMotionValue(0);
  const roundedHour = useTransform(countHour, Math.round);
  const roundedMin = useTransform(countMin, Math.round);

  const imageHero = {
    initialPos: {
      marginLeft: "45%",
    },
    center: {
      marginLeft: 0,
      transition: {
        duration: 2,
        delay: 3,
        ease: "easeIn",
      },
    },
  };
  const counterBorder = {
    colorShadow: {
      boxShadow: [
        "#C6FFDD 0px 7px 29px 0px",
        "#FBD786 0px 7px 29px 0px",
        "#f7797d 0px 7px 29px 0px",
      ],
      transition: {
        duration: 2,
        ease: "easeIn",
        delay: 1,
      },
    },
  };
  const heroInfo = {
    blur: { filter: "blur(6px)", opacity: 0.3 },
    unblur: {
      filter: "blur(0)",
      opacity: 1,
      transition: { duration: 1.5, delay: 3.5, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const animationHour = animate(countHour, 4, { duration: 2, delay: 1 });
    const animationMin = animate(countMin, 50, { duration: 2, delay: 1 });
  }, []);

  useEffect(() => {
    const intervalId = setTimeout(
      () => {
        if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      },
      currentImageIndex === 0 ? 1000 : 333
    );

    return () => clearTimeout(intervalId);
  }, [currentImageIndex]);

  return (
    <section className={style.heroSection}>
      <motion.div
        className={style.heroDivGifCounter}
        variants={imageHero}
        initial="initialPos"
        animate="center"
      >
        <motion.div
          className={style.counter}
          variants={counterBorder}
          animate="colorShadow"
        >
          <motion.span>{roundedHour}</motion.span> <span>h: </span>
          <motion.span>{roundedMin}</motion.span>
          <span>min</span>
        </motion.div>
        <motion.div
          className={style.divImage}
          initial={currentImageIndex === 0 ? { opacity: 1 } : { opacity: 0 }}
          animate={
            currentImageIndex === 0
              ? { opacity: 1 }
              : {
                  opacity: [
                    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.9, 0.6, 0.7, 0.9, 1,
                  ],
                }
          }
          transition={{ duration: 0, ease: "easeInOut" }}
        >
          <Image
            className={style.imageGif}
            src={images[currentImageIndex]}
            alt="presentation focus app"
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={style.heroInfo}
        variants={heroInfo}
        initial="blur"
        animate="unblur"
      >
        <Image src={logo} alt="logo" className={style.heroLogo} />
        <h1 className={style.heroTitle}>Focus App</h1>
        <p className={style.heroText}>
          Se <span>concentrer</span> sur ce qui compte réellement.
        </p>
        <button className={style.btnFree}>1 mois d'essai gratuit</button>
      </motion.div>
    </section>
  );
};

export default Herosection;
