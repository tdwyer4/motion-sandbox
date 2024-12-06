import styles from "./Hero.module.css";
import { useRef } from "react";
import { useScroll } from "motion/react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hello, I'm Tim Dwyer</h1>
        <p className={styles.heroDescription}>
          I'm a designer who is learning to become a Creative Developer.
        </p>
      </div>
    </section>
  );
};

export default Hero;
