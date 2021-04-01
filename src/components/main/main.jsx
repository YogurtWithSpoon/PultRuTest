import React from "react";
import styles from "./main.module.css";
import Slide from "../slide/slide";
import CustomSlider from "../slider/slider";
function Main() {
  return (
    <div className={styles.block}>
      <CustomSlider className={styles.slider_products}>
        <Slide
          titleBannerType="product"
          titleBanner="Побалуй себя выбором"
          textPosition="left"
          titleAccent="blue"
          textTitle="Micro и micro se"
          text="Спутниковые колонки"
          path="img/slider1/micro_micro-se.jpg"
        />
        <Slide
          titleBannerType="product"
          titleBanner="давай зажжём"
          textPosition="left"
          titleAccent="white"
          textTitle="droplet"
          text="подвесная акустика"
          path="img/slider1/droplet.jpg"
        />
        <Slide
          titleBannerType="product"
          titleBanner="Держаться в тени"
          titleAccent="blue"
          textPosition="left"
          textTitle="profilesub"
          text="сабвуфер"
          path="img/slider1/PROFILESUBx2.jpg"
        />
      </CustomSlider>

      <CustomSlider className={styles.slider_sales}>
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Micro"
          path="img/slider2/micro.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Micro SE"
          path="img/slider2/micro-se.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Micro Droplet"
          path="img/slider2/micro-droplet.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Micro Se Droplet"
          path="img/slider2/micro-droplet.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Adiva Droplet"
          path="img/slider2/micro-droplet.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Adive Se Droplet"
          path="img/slider2/micro-droplet.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Adiva"
          path="img/slider2/adiva.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Adiva Se"
          path="img/slider2/adiva.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="right"
          textTitle="Strada 2"
          path="img/slider2/strada-2.jpg"
        />
        <Slide
          titleBannerType="sale"
          salerate="30"
          textPosition="left"
          textTitle="Subwoofers"
          path="img/slider1/PROFILESUBx2.jpg"
        />
      </CustomSlider>
    </div>
  );
}

export default Main;
