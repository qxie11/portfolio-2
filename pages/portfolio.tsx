import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Nav from './../components/Nav';
import Logo from './../components/Logo';
import styles from '../styles/components/portfolio.module.scss';

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
        </div>
      </section>
    </Nav>
  )
}

export default Portfolio;