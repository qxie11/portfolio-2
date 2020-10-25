import { useEffect, useRef } from 'react';
import Rellax from 'rellax';
import gsap from 'gsap';
import Nav from './../components/Nav';
import Logo from './../components/Logo';
import styles from '../styles/components/about.module.scss';


const About: React.FC = () => {
  const decorations = useRef<HTMLDivElement[]>([]);
  const chapter = useRef<HTMLHeadingElement | null>(null);
  const chapter_addition = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    decorations.current.forEach(dec => {
      new Rellax(dec, {
        speed: Math.random() * (15 - 1) + 1
      });
    });

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

  const addDecorToRef = (el: HTMLDivElement) => {
    if (el && !decorations.current.includes(el)) {
      decorations.current.push(el)
    }
  }

  return (
    <Nav>
      <section className={styles.about}>
        <div className="container">
          <Logo />
          <div className={styles.text_wrap}>
            <h1 className="chapter"
              ref={chapter}>
              About
            </h1>
            <span className="chapter_addition"
              ref={chapter_addition}>
              LET'S GET ACQUAINTED CLOSER
            </span>
          </div>
          <div className={styles.content}>
            <div className={styles.about_me}>
              <h2 className={styles.about_me_chapter}>ABOUT ME</h2>
              <p className={styles.text1}>I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.</p>
              <p className={styles.text2}>I love learning new and better ways to create seamless user experiences
              with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create
              something beautiful with people that bring out the best in me.</p>
            </div>
            <div className={styles.photo}>
              <div className={styles.me}></div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.info_chapter}>PERSONAL INFORMATION</h2>
              <p className={styles.info_item}><span>Full name:</span><br />
              Evgeniy Ponomarev
              </p>
              <p className={styles.info_item}><span>Date of birth:</span><br />
              11.03.2001
              </p>
              <p className={styles.info_item}><span>Education:</span><br />
              Incomplete higher
              </p>
              <p className={styles.info_item}><span>English:</span><br />
              Upper Intermediate
              </p>
              <p className={styles.info_item}><span>E-mail:</span><br />
                <a href="malito:ponamarevevgeniy11@gmail.com">ponamarevevgeniy11@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        {
          Array(9).fill(0).map((_, i) => <div
            key={i}
            className={styles.decoration}
            ref={addDecorToRef}
          ></div>)
        }
      </section>
    </Nav >
  )
};

export default About;
