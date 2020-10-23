import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import AOS from 'aos';
import Logo from '../components/Logo';
import Nav from './../components/Nav';
import { skills } from '../constans/skills';
import styles from '../styles/components/skills.module.scss';

const Skills: React.FC = () => {
  const chapter = useRef<HTMLHeadingElement | null>(null);
  const chapter_addition = useRef<HTMLSpanElement | null>(null);

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

    AOS.init({
      once: true,
      offset: 0
    });
    AOS.refresh();
  }, [])

  return (
    <Nav>
      <section className={styles.skills}>
        <div className="container">
          <Logo />
          <div className={styles.text_wrap}>
            <h1 ref={chapter} className={styles.chapter}>Skills</h1>
            <span ref={chapter_addition} className={styles.chapter_addition}>KNOWLEDGE</span>
          </div>

          <div className={styles.content}>
            {
              skills && skills.map(({ skill, percent }) => {
                return <div className={styles.skill} key={skill}>
                  <h2 className={styles.skill_name}>{skill}</h2>
                  <div className={styles.line} style={{ width: `${percent}%` }}>
                    <div
                      data-aos="skills"
                      className={styles.line_content}>
                    </div>
                  </div>
                  <span style={{ marginLeft: `${percent - 4}%` }} className={styles.percent}>{percent}%</span>
                </div>
              })
            }
          </div>
        </div>
      </section>
    </Nav>
  )
}

export default Skills;