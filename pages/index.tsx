import { useEffect } from 'react';
import Typed from 'typed.js';
import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/components/main-page.module.scss';
import Logo from './../components/Logo';

const Index: React.FC = () => {

  useEffect(() => {
    const skills = [
      'Front-end developer',
      'HTML',
      'CSS',
      'JavaScript(ES6+)',
      'SASS',
      'Bootstrap',
      'React JS',
      'Redux',
      'Typescript',
      'Next JS'];

    const options = {
      strings: skills,
      typeSpeed: 60,
      loop: true,
      showCursor: false
    };
    new Typed(`.${styles.describe}`, options);
  }, [])

  return (
    <Nav>
      <Head>
        <title>Ponomarev Evgeniy</title>
      </Head>
      <section className={styles.main_page}>
        <video autoPlay muted loop className={styles.video}>
          <source src={require('../public/video/main-bg.mp4')} type="video/mp4" />
        </video>
        <div className="container">
          <Logo />
          <div className={styles.wrapper}>
            <div className={styles.name}>
              <h1>Evgeniy Ponomarev</h1>
            </div>
            <p className={styles.describe}></p>
          </div>
        </div>
      </section>
    </Nav>
  )
}

export default Index;