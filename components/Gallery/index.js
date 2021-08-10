import React, { useState, useCallback } from "react";
React.useLayoutEffect = React.useEffect
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTranslation } from "next-i18next";

const photos = [
  {
    src: "images/city_view.jpg",
    alt: "City view",
    width: 1981,
    height: 1080,
  },
  {
    src: "images/34_doggos.jpg",
    alt: "Dogs",
    width: 3425,
    height: 1080,
  },
  {
    src: "images/33_parrot_long.jpg",
    alt: "Long Parrot",
    width: 281,
    height: 1080,
  },
  {
    src: "images/32_cats_moon.jpg",
    alt: "Cats with the moon",
    width: 1368,
    height: 1080,
  },
  {
    src: "images/24_flowers.jpg",
    alt: "Flowers",
    width: 853,
    height: 1080,
  },
  {
    src: "images/21_flowers.jpg",
    alt: "Flowers",
    width: 1353,
    height: 1080,
  },
  {
    src: "images/18_góry_ekspedycja.jpg",
    alt: "Mountains",
    width: 1847,
    height: 1080,
  },
  {
    src: "images/8_zachód.jpg",
    alt: "Sunset",
    width: 1350,
    height: 1080,
  },
  {
    src: "images/4_horse_beach.jpg",
    alt: "Horse",
    width: 1474,
    height: 1080,
  },
  {
    src: "images/3_statek_i_księżyc.jpg",
    alt: "Moon Ship",
    width: 850,
    height: 1080,
  },
  {
    src: "images/2_fale_i_statek.jpg",
    alt: "Waves",
    width: 1298,
    height: 1080,
  },
  {
    src: "images/Ship.jpg",
    alt: "Victoria Ship",
    width: 1486,
    height: 1080,
  },
  {
    src: "images/Ocean3.jpg",
    alt: "Horse",
    width: 1446,
    height: 1080,
  },
  {
    src: "images/Horse2.jpg",
    alt: "Horse",
    width: 1356,
    height: 1080,
  },
  {
    src: "images/los.png",
    alt: "Moose",
    width: 826,
    height: 598,
  },
  {
    src: "images/feniks_2.jpg",
    alt: "Phoenix",
    width: 826,
    height: 1080,
  },
  {
    src: "images/jelen_long.jpg",
    alt: "Deers",
    width: 1920,
    height: 786,
  },
  {
    src: "images/kot.jpg",
    alt: "Cat",
    width: 1443,
    height: 1080,
  },
  {
    src: "images/horse.jpg",
    alt: "Horse",
    width: 809,
    height: 1080,
  },
  {
    src: "images/geralt.jpg",
    alt: "Geralt",
    width: 827,
    height: 1080,
  },
  {
    src: "images/drakkar.jpg",
    alt: "Drakkar",
    width: 844,
    height: 1080,
  },
  {
    src: "images/losie.png",
    alt: "Mooses",
    width: 1146,
    height: 924,
  },
  {
    src: "images/szop.jpg",
    alt: "Raccoon",
    width: 870,
    height: 1080,
  },
  {
    src: "images/view1.png",
    alt: "Landscape",
    width: 1948,
    height: 1560,
  },
  {
    src: "images/papuga.png",
    alt: "Parrot",
    width: 1080,
    height: 1332,
  },
  {
    src: "images/aston.jpg",
    alt: "Aston, my dog",
    width: 1327,
    height: 1080,
  },
  {
    src: "images/12_farma.png",
    alt: "The Farm",
    width: 2200,
    height: 1080,
  },
  {
    src: "images/city_sea.jpg",
    alt: "City by the sea",
    width: 1365,
    height: 1080,
  },
  {
    src: "images/papuga-2.jpg",
    alt: "Another parrot",
    width: 1080,
    height: 1332,
  },
  {
    src: "images/view2.png",
    alt: "Landscape with an eagle",
    width: 3288,
    height: 2604,
  },
  {
    src: "images/wilk.jpg",
    alt: "Wolf",
    width: 1324,
    height: 1080,
  },
  {
    src: "images/aston.png",
    alt: "Darek & Aston",
    width: 568,
    height: 630,
  },
];

const GalleryComponent = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  return (
    <div className="gallery">
      <h1>{t("Gallery.Title")}</h1>
      <Gallery photos={photos} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.alt,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default GalleryComponent;
