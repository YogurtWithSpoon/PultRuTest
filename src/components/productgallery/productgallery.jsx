import React,{useState} from "react";
import styles from "./product.module.css";
function Productgallery() {
  const products = [
    {name:"Micro",img:"img/products/micro.jpg"},
    {name:"Micro Se",img:"img/products/micro_se.jpg"},
    {name:"Adiva",img:"img/products/adiva.jpg"},
    {name:"Adiva Se",img:"img/products/adiva_se.jpg"},
    {name:"Micro Droplet",img:'img/products/micro_droplet.jpg'},
    {name:"Micro Se Droplet",img:'img/products/micro_se_droplet.jpg'},
    {name:"Adiva Droplet",img:'img/products/adiva_droplet.jpg'},
    {name:"Adiva Se Droplet",img:'img/products/adiva_se_droplet.jpg'},
    {name:"Strada 2",img:'img/products/strada_2.jpg'},
    {name:"Subwoofers",img:'img/products/subwoofers.jpg'},
    {name:"Accessories",img:'img/products/accessories.jpg'}
  ];
  const [currentImage,setCurrentImage] = useState("img/products/micro.jpg")
  const [active,setActive] = useState();
  return (
    <div className={styles.gallery}>
      <div className={styles.col}>
        <ul className={styles.menu}>
          {products.map(item => {
            return <li className={[styles.menu_item,(active === item.name ? styles.active : '')].join(' ')} key={item.name}>
              <a className={styles.link} data-img={item.img} onMouseOver={e => {
              setCurrentImage(e.target.getAttribute("data-img"))
              setActive(item.name)
            }} href="#">{item.name}</a>
            </li>
          })}
        </ul>
      </div>
      <div className={styles.col}>
        <img className={styles.image} src={currentImage} alt=""/>
      </div>
    </div>
  );
}

export default Productgallery;
