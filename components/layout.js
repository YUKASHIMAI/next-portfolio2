import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import Link from 'next/link'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useState} from 'react';

const siteName = 'Portfolio | yukashimai'
export const siteTitle = 'Portfolio | yukashimai'
export const description = '日々新しい知識を吸収してプログラミングや開発フローの基礎知識を元に見やすく使いやすいだけでないSEO対策等を含めた集客力のあるWEBサイト制作で、気持ちいいユーザー体験やより良い情報の提供を実現します。'

export default function Layout({ children, home }) {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div id="app" name="top"  className={home ? ("home") : (siteName)}>
      <Head>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-COMPATIBLE" content="IE=edge"/>
        <meta format-detection="telephone=no"/>
        <meta name="theme-color" content="#FFFFFF"/>
        <meta name="description" content=""/>
        <meta name="keywords" content="ポートフォリオ,島居夕歌,プログラミング"/>
        <meta property="og:title" content={siteTitle}/>
        <meta property="og:description" content={description}/>
        <meta property="og:locale" content="ja_JP"/><meta property="og:url" content="https://yshimai321.xsrv.jp/"/>
        <title>{siteTitle}</title>
        <link rel="icon" href="/static/image/favicon.ico" />
      </Head>
      <header className={styles.l_header}>
        <div className={styles.hd_info}>
          <div className={styles.hd_info__inner}>
            <div className={styles.hd_info__logo}><AnchorLink href="#app" className={`${styles.hd_info__link} u_alpha`}></AnchorLink></div> 
            <a　role="button" id="menu" className={styles.hd_info__nav} onClick={handleToggle}><span className={styles.hd_info__nav__line}></span> <span className={styles.hd_info__nav__line}></span> <span className={styles.hd_info__nav__line}></span></a>
          </div>
        </div> 
        <div className={`${styles.nav_overlay} ${isActive ? null : styles.nav_is_active}`}></div> 
        <nav className={`${styles.l_nav} ${isActive ? null : styles.l_nav_is_active}`}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_list__item}><AnchorLink href="#profile" className={`${styles.nav_list__link} u_alpha`} onClick={handleToggle}>PROFILE</AnchorLink></li>  
            <li className={styles.nav_list__item}><AnchorLink href="#skill" className={`${styles.nav_list__link} u_alpha`} onClick={handleToggle}>SKILL</AnchorLink></li>  
            <li className={styles.nav_list__item}><AnchorLink href="#works" className={`${styles.nav_list__link} u_alpha`} onClick={handleToggle}>WORKS</AnchorLink></li>  
            <li className={styles.nav_list__item}><AnchorLink href="#contact" className={`${styles.nav_list__link} u_alpha`} onClick={handleToggle}>CONTACT</AnchorLink></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
        <footer className={styles.l_footer}><div className={`${styles.l_footer__inner} u_inner`}><p className={styles.l_footer__copyright}>©2020 YUKA SHIMAI</p></div></footer>
      </main>
      <style jsx>{`
      `}</style>
    </div>
  )
}