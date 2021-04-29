import React, { useState, useCallback } from "react";
React.useLayoutEffect = React.useEffect
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTranslation } from "next-i18next";

const photos = [
  {
    src: "images/dodanie_efektów.jpg",
    alt: "Adding some effects",
    width: 1357,
    height: 550,
  },
  {
    src: "images/odnowienie_starego_zdjęcia.jpg",
    alt: "Photo renewal",
    width: 1165,
    height: 858,
  },
  {
    src: "images/usunięcie_tła.jpg",
    alt: "Background removal",
    width: 1367,
    height: 960,
  },
  {
    src: "images/dodanie_przedmiotu.jpg",
    alt: "Adding a new item",
    width: 1357,
    height: 550,
  },
  {
    src: "images/projekt_okolicznościowy.jpg",
    alt: "Occasional project",
    width: 1407,
    height: 1125,
  },
];

const GalleryComponentPS = () => {
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
    <div className="gallery gallery-ps">
      <h1>{t("GalleryPS.Title")}</h1>
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

export default GalleryComponentPS;
