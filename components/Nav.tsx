import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from "../styles/components/nav.module.scss";

type Props = {
    children: React.ReactNode
}

const Nav: React.FC<Props> = ({ children }) => {
    const [isActive, setActive] = useState<boolean>(false);

    const closeNav = (e: React.MouseEvent<HTMLDivElement>) => {
        const { tagName } = e.target as HTMLElement;
        if (tagName === "A" || tagName === "DIV") setActive(false);
    }

    useEffect(() => {
        isActive && gsap.from('nav a', {
            opacity: 0,
            y: -100,
            duration: 1,
            stagger: 0.1
        });
    }, [isActive]);

    return (
        <>
            <div className={`${isActive ? styles.active : ''} ${styles.area}`} onClick={closeNav}>
                <nav className={`${styles.nav} ${isActive ? styles.active : ''}`} >
                    <Link href="/"  ><a>home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/skills"><a>Skills</a></Link>
                    <Link href="/portfolio"><a>Portfolio</a></Link>
                    <Link href="/links"><a>Links</a></Link>
                </nav>
            </div>
            <div className={styles.menubtn} onClick={() => setActive(!isActive)}>
                <div className={styles.menubtn_line}></div>
                <div className={styles.menubtn_line}></div>
                <div className={styles.menubtn_line}></div>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Nav;