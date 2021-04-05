import React, { useState, useCallback } from "react";
React.useLayoutEffect = React.useEffect
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTranslation } from "next-i18next";

const photos = [
  {
    src: "images/sowa.jpg",
    alt: "Owl",
    width: 875,
    height: 1080,
  },
  {
    src: "images/los.png",
    alt: "Moose",
    width: 826,
    height: 598,
  },
  {
    src: "images/feniks.jpg",
    alt: "Phoenix",
    width: 2634,
    height: 3204,
  },
  {
    src: "images/jelen_long.png",
    alt: "Deers",
    width: 1663,
    height: 684,
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
    src: "images/papuga.png",
    alt: "Parrot",
    width: 1080,
    height: 1332,
  },
  {
    src: "images/aston.png",
    alt: "Darek & Aston",
    width: 568,
    height: 630,
  },
  {
    src: "images/view1.png",
    alt: "Landscape",
    width: 1948,
    height: 1560,
  },
  {
    src: "images/view2.png",
    alt: "Landscape with an eagle",
    width: 3288,
    height: 2604,
  },
];

const GalleryComponent = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery">
      <h1>{t("Gallery.Title")}</h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
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
