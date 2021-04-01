import React,{useState} from 'react'
import styles from './slide.module.css'

function Slide({titleBannerType,titleBanner,titleAccent,textTitle,text,path,textPosition,salerate}) {
  const [isHover,setHover] = useState(false);
  const arrayText = titleBanner ? titleBanner.split(' ') : []
  const accentWord = arrayText.shift()
  const otherPhrase = arrayText.join(' ')
  
  return (
    <a className={styles.link} href='#' 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.slider}>
        <div className={styles.banner}>
          <img src={path} className={isHover ? styles.banner_active : ''} alt=""/>
          {titleBannerType === "product" ? (
            <p className={[styles.banner_padding,(textPosition && styles[textPosition]),styles.banner_text].join(' ')}>
              <span className={titleAccent}>{accentWord} </span>
              <span>{otherPhrase}</span>
            </p>
          ) : (
            <p className={[styles.banner_padding,(textPosition && styles[textPosition]),styles.banner_sale].join(' ')} style={{color: 'w'}}>
               Скидка до <br/>
              <span className={styles.banner_sale_rate}>{`${salerate}%`}</span>
            </p>
          )}
        </div>
        <div className={styles.footer+` ${isHover ? styles.active : ''}`}>
          <h2 className={styles.footer_title}>{textTitle}</h2>
          <p className={styles.footer_text}>{text}</p>
        </div>
      </div>
    </a>
  )
}

export default Slide
