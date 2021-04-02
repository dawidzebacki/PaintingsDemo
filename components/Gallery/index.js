import React, { useState, useCallback } from "react";
React.useLayoutEffect = React.useEffect
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTranslation } from "next-i18next";

const photos = [
  {
    src: "images/los.png",
    width: 826,
    height: 598,
  },
  {
    src: "images/jelen_long.png",
    width: 1663,
    height: 684,
  },
  {
    src: "images/losie.png",
    width: 1146,
    height: 924,
  },
  {
    src: "images/papuga.png",
    width: 1080,
    height: 1332,
  },
  {
    src: "images/aston.png",
    width: 568,
    height: 630,
  },
  {
    src: "images/view1.png",
    width: 1948,
    height: 1560,
  },
  {
    src: "images/view2.png",
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
      <Gallery photos={photos} onClick={openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default GalleryComponent;
