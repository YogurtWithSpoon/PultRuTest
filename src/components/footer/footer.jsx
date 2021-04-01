/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './footer.module.css'
import {ReactComponent as PultLogo} from './Logo_pult-footer.svg';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <div className={styles.block_col}>
          <div className={styles.logo}>
            <a href="#">
              <PultLogo/>
            </a>
          </div>
          <div className={styles.phone}>
            <a className={styles.phone_number} href="tel:+78005555152" target="_blank" rel="noreferrer">8(800)555-51-52</a>
            <p className={styles.phone_text}>Звонок по России бесплатный</p>
          </div>
        </div>
        <div className={styles.block_col}>
        <ul className={styles.cols}>
                <li className={styles.col}>
                    <ul className={styles.list}>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Акустика</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Hi-Fi</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Винил</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Наушники</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Телевизоры</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Проекторы</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.col}>
                    <ul className={styles.list}>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Распродажа</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Outlet</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Акции</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Бонусы и скидки</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Рассрочка</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.col}>
                    <ul className={styles.list}>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">О компании</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Контакты</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Салоны</a>
                        </li>
                        <li className={styles.list_item}>
                            <a className={styles.link} href="#">Новости</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        2021 &#169; / test task / ВСЕ ПРАВА ЗАЩИЩЕНЫ
      </p>
    </footer>
  )
}

export default Footer
