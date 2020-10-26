import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Nav from './../components/Nav';
import Logo from './../components/Logo';
import styles from '../styles/components/portfolio.module.scss';
import { portfolioItems } from '../constans/portfolio';

const Portfolio: React.FC = () => {

  useEffect(() => {

    gsap.from(chapter.current, {
      opacity: 0,
      y: -50,
      duration: 1
    });

    gsap.from(chapter_addition.current, {
      width: '100%',
      duration: 3
    });
  }, [])

  const chapter = useRef<HTMLHeadingElement | null>(null);
  const chapter_addition = useRef<HTMLSpanElement | null>(null);
  return (
    <Nav>
      <section className={styles.portfolio}>
        <div className="container">
          <Logo />
          <div className={styles.text_wrap}>
            <h1 className="chapter"
              ref={chapter}>
              Portfolio
            </h1>
            <span className={`chapter_addition ${styles.chapter_addition}`}
              ref={chapter_addition}>
              SOME OF MY WORK
            </span>
          </div>
          <div className={styles.content}>
            {
              portfolioItems && portfolioItems.map(({name,
                                                    desc,
                                                    github,
                                                    images,
                                                    link,
                                                    listOfTechnologies }) => {
              return <div className={styles.portfolio_item} key={name}>
                  <div className={styles.wrapper}>
                    <img className={styles.img1} src={images[0]} alt={name}/>
                    <img className={styles.img2} src={images[1]} alt={name}/>
                    <img className={styles.img3} src={images[2]} alt={name}/>
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
              })
            }
          </div>
        </div>
      </section>
    </Nav>
  )
}

export default Portfolio;