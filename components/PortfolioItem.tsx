import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/portfolio.module.scss';
import { IPortfolioItem } from './../constans/portfolio';

const PortfolioItem: React.FC<IPortfolioItem> = ({
  name,
  desc,
  github,
  images,
  link,
  listOfTechnologies
}) => {
  const img = useRef<null | HTMLImageElement>(null);
  const imagesTimer = useRef<null | ReturnType<typeof setTimeout>>(null);
  const loading1 = useRef<null | HTMLDivElement>(null);
  const loading2 = useRef<null | HTMLDivElement>(null);
  const loading3 = useRef<null | HTMLDivElement>(null);

  const [isImagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (img && !img.current!.complete) {
      img.current!.addEventListener('load', imagesLoadingNoise);
    } else {
      setImagesLoaded(true);
    }

    return () => {
      imagesTimer.current && clearTimeout(imagesTimer.current);
      img.current!.removeEventListener('load', imagesLoadingNoise);
    }
  }, []);

  const imagesLoadingNoise = () => {
    imagesTimer.current = setTimeout(() => {
      setImagesLoaded(true);
    }, 200);
  }

  return (
    <div className={styles.portfolio_item}>
      <div className={styles.wrapper}>
        {!isImagesLoaded && <div className={styles.loading_wrapper}>
          <div className={`${styles.img1} ${styles.loading1}`} ref={loading1} />
          <div className={`${styles.img2} ${styles.loading2}`} ref={loading2} />
          <div className={`${styles.img3} ${styles.loading3}`} ref={loading3} />
        </div>}
        <img
          ref={img}
          className={styles.img1}
          src={images[0]}
          alt={name}
          style={{ height: !isImagesLoaded ? '0' : '' }}
          loading="lazy"
        />
        <img
          className={styles.img2}
          src={images[1]}
          alt={name}
          style={{ height: !isImagesLoaded ? '0' : '' }}
          loading="lazy"
        />
        <img
          className={styles.img3}
          src={images[2]}
          alt={name}
          style={{ height: !isImagesLoaded ? '0' : '' }}
          loading="lazy"
        />
        <div className={styles.flex_wrap}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.btn_wrap}>
            {link && <a href={link} className={styles.view} target="_blank">view</a>}
            <a href={github} className={styles.code} target="_blank">code</a>
          </div>
        </div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.technologies}>{
          listOfTechnologies && listOfTechnologies.map((tech) => {
            return <div className={styles.tech} key={tech}>{tech}</div>
          })
        }</div>
        <div className={styles.decor}></div>
      </div>
    </div>
  );
}

export default PortfolioItem;