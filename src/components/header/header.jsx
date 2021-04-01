import React from 'react'
import styles from './header.module.css';
import {ReactComponent as GaloLogo} from './Gallo_Acoustics.svg'
import {ReactComponent as PultLogo} from './logo_pult.svg'
function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.link} href="#">
        <GaloLogo />
      </a>
      <a className={styles.link} href="#">
        <PultLogo />
      </a>
    </header>
  )
}

export default Header
