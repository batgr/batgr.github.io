"use client";
import style from "@/app/ui/banner.module.css";
import { motion } from "framer-motion";

const Banner = () => {
  const banner = {
    hidden: {
      opacity: 0,
      height: "0%",
    },
    visible: {
      opacity: 1,
      height: "100%",
      transition: { duration: 1, delay: 5, ease: "easeInOut" },
    },
  };
  return (
    <motion.section
      className={style.divBanner}
      variants={banner}
      initial="hidden"
      animate="visible"
    >
      <p>
        Profitez de Focus app gratuitement pendant 3 mois à l'achat d'appareil
        éligible.
      </p>
    </motion.section>
  );
};

export default Banner;
