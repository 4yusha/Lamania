import Image from "next/image";
import styles from "./page.module.css";
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Turning your ideas into reality. We bring together the teams from the global tech industry.
          </p>
          <Button url="/portfolio" text= "See Our Works"/>
        </div>
        <div className={styles.item}>
          <Image 
            src="/hero.png" 
            alt="Hero Image" 
            width={500} 
            height={300} 
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
