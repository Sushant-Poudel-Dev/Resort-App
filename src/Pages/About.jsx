import Navbar from "../Components/Navbar";
import MainImage from "../Images/CardComboImage.jpg";
import Map from "../Components/Map";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className='about_hero_section'>
        <div className='about_hero_section_text'>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            necessitatibus id quia esse libero. Perferendis officia nobis quia
            minus omnis ipsam magni officiis facilis earum dignissimos,
            explicabo deserunt, delectus magnam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Esse veritatis velit eos ducimus
            veniam atque dolor inventore minima eaque ipsa cumque reprehenderit,
            consequatur labore cum, optio doloribus voluptatum tenetur!
            Architecto!
          </p>
        </div>
        <div className='about_hero_section_image'>
          <img src={MainImage} />
        </div>
      </div>
      <div className='about_map_section'>
        <div className='map_container'>
          <h1>Locate Us</h1>
          <Map />
        </div>
      </div>
      <div className='about_gallery_section'>
        <div className='about_gallery_section_container'>
          <h1>Explore Our Style</h1>
          <Gallery />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
