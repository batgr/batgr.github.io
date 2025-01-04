"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { images } from "./data/imagesFunc";

import style from "@/app/ui/featuresParallax.module.css";
// import Scrollbar from "scrollbar";

gsap.registerPlugin(ScrollTrigger);

const SectionFeaturesParallax = () => {
  const container = useRef(null);
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${style.scroller}`,

        start: "top top",
        end: () => "+=" + window.innerHeight,
        pin: `.${style.scroller}`,
        scrub: 1,
        toggleActions: "play none reverse none",
      },
    });
    let tl0 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${style.scroller}`,
        start: "top top",
        end: () => "+=" + window.innerHeight,
        scrub: 1,
        toggleActions: "play none reverse none",
      },
    });
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${style.scroller}`,
        start: "top top",
        end: () => "+=" + window.innerHeight * 2,
        scrub: 1,
        toggleActions: "play none reverse none",
      },
    });
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${style.scroller}`,
        start: "top top",
        end: () => "+=" + window.innerHeight * 2.5,
        scrub: 1,
        toggleActions: "play none reverse none",
      },
    });
    tl.to(`.${style.panel}.pos2`, {
      height: 0,
    });
    tl.to(`.${style.panel}.pos1`, {
      height: 0,
    });
    tl0.to(`.${style.panelText}.${style.textPos0}`, {
      y: "-=" + window.innerHeight,
    });
    tl1.to(`.${style.panelText}.${style.textPos1}`, {
      y: "-=" + window.innerHeight * 2,
    });
    tl2.to(`.${style.panelText}.${style.textPos2}`, {
      y: "-=" + window.innerHeight * 2.5,
    });
    // tl1.to(
    //   `.${style.panelText}.${style.textPos1}`,
    //   {
    //     y: "-=" + window.innerHeight,
    //   },
    //   "+=" + window.innerHeight
    // );
    // tl2.to(
    //   `.${style.panelText}.${style.textPos2}`,
    //   {
    //     y: "50%",
    //   },
    //   "+=110%"
    // );

    // tl.to(
    //   `.${style.panelText}.${style.textPos0}`,
    //   {
    //     y: "-100%",
    //   },
    //   "-=50%"
    // );
    // let tl1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: `.${style.panelText}.${style.textPos0}`,
    //     start: "top 30%",
    //     end: "+=350%",
    //     scrub: 1,
    //     toggleActions: "play none reverse none",
    //   },
    // });
    // gsap.to(`.${style.panelText}.${style.textPos1}`, {
    //   y: "50%",
    // });
    // tl1.to(`.${style.panelText}.${style.textPos1}`, {
    //   y: "-100%",
    // });
  });

  return (
    <>
      <div className={style.scroller} ref={container}>
        <section className={style.black}>
          <div className={style.textWrap}>
            <div className={`${style.panelText} ${style.textPos2}`}>
              <ul className={style.list}>
                <li className={style.titre}>Restrictions </li>
                <li>
                  <p className={style.pg}>
                    Notre système de restrictions d'écran est basé sur vos
                    réglages et est évolutif
                  </p>{" "}
                </li>
                <li>
                  <p className={style.pg}>Restriction programmée.</p>
                </li>
                <li>
                  <p className={style.pg}>
                    Le choix vous appartient. Possiblité de désactiver la
                    restriction
                  </p>
                </li>
                <li>
                  <p className={style.pg}>
                    Des propositions d'activités sur mesure générées par IA
                  </p>{" "}
                </li>
              </ul>
            </div>
            <div className={`${style.panelText} ${style.textPos1}`}>
              <ul className={style.list}>
                <li className={style.titre}>Le jardin</li>
                <li>
                  <p className={style.pg}>
                    Planter les graines de votre bien être !
                  </p>
                </li>
                <li>
                  <p className={style.pg}>
                    Croissance de la plante en fonction du temps passé sans
                    téléphone.
                  </p>
                </li>
                <li>
                  <p className={style.pg}>
                    Possibilité de débloquer de nouvelles plantes.
                  </p>
                </li>
                <li>
                  <p className={style.pg}>
                    Pénalités en cas de trop grand temps d'écran
                  </p>
                </li>
              </ul>
            </div>
            <div className={`${style.panelText} ${style.textPos0}`}>
              <ul className={style.list}>
                <li className={style.titre}>Fixez vos objectif</li>
                <li>
                  <p className={style.pg}>
                    Focus app donne la possibilité à l'utilisateur de définir un
                    temps d'écran maximum journalier, ainsi que la possiblité de
                    choisir un niveau de difficulté. Plus le niveau augmente
                    plus le temps d'écran consécitif baisse.{" "}
                  </p>
                </li>
                <li className={style.titre}>Définir des temps de pause</li>
                <p className={style.pg}>
                  En plus des restrictions liées à votre objectif vous pouvez
                  vous accorder des moments de tranquilité en programmant à
                  l'avance des restrictions. C'est vous qui décidez !{" "}
                </p>
                <li className={style.titre}>
                  Suivi précis de votre temps d'écran
                </li>
                <p className={style.pg}>
                  Obtenez des rapports hebdomadaires sur l'évolution de votre
                  temps d'écran et sur l'évolution de l'intensité d'utilisation
                  des applications jugées ou paramétrées comme distrayantes.{" "}
                  Retrouver en un clin d'oeil votre temps d'écran total sur
                  votre page d'accueil.
                </p>
                <li className={style.titre}>
                  Conseils et astuces grâce à une IA
                </li>
                <p className={style.pg}>
                  Obtenez des conseils et astuces personnalisés basés sur la
                  répartition de votre temps d'écran total par application grâce
                  à notre IA .
                </p>
              </ul>
            </div>
          </div>
          <div className={style.panelWrap}>
            {images.map((image, idx) => (
              <div key={idx} className={`${style.panel} pos${idx}`}>
                <Image
                  className={style.image}
                  src={image}
                  alt="image fonctionnalié"
                  priority
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionFeaturesParallax;
