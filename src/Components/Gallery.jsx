import GalleryImages from "../Components/GalleryImages";

const imageLists = {
  images: [
    { id: 1, url: GalleryImages.Image1 },
    { id: 2, url: GalleryImages.Image2 },
    { id: 3, url: GalleryImages.Image3 },
    { id: 4, url: GalleryImages.Image4 },
    { id: 5, url: GalleryImages.Image5 },
  ],
};

const Gallery = () => {
  return (
    <>
      <div className='gallery_images'>
        {imageLists.images.map((image) => (
          <img
            key={image.id}
            src={image.url}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
