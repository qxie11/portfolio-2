import { useRef, useEffect } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import Nav from './../components/Nav';
import Logo from './../components/Logo';
import styles from '../styles/components/portfolio.module.scss';
import { portfolioItems } from '../constans/portfolio';
import PortfolioItem from './../components/PortfolioItem';

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
      <Head>
        <title>Portfolio</title>
      </Head>
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
              portfolioItems && portfolioItems.map(({
                name,
                desc,
                github,
                images,
                link,
                listOfTechnologies
              }) => {
                return <PortfolioItem
                  name={name}
                  desc={desc}
                  github={github}
                  images={images}
                  link={link}
                  listOfTechnologies={listOfTechnologies}
                  key={name}
                />
              })
            }
          </div>
        </div>
      </section>
    </Nav>
  )
}

export default Portfolio;