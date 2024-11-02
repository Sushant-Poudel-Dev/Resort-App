import React from "react";
import InfinityPool from "../Images/PoolPicture.jpg";
import ZipLine from "../Images/Zip-LinePicture.jpg";
import Rafting from "../Images/RaftingPicture.jpg";

const services = [
  {
    image1: InfinityPool,
    title1: "Infinity Pool",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Learn More",
  },

  {
    image3: ZipLine,
    title3: "Zip-Line Ride",
    description3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Learn More",
  },
  {
    image2: Rafting,
    title2: "Rafting",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Learn More",
  },
];

const mappedService = services.map((service) => ({
  image: service.image1 || service.image2 || service.image3,
  title: service.title1 || service.title2 || service.title3,
  description:
    service.description1 || service.description2 || service.description3,
  button: service.button,
}));

const Services = () => {
  return (
    <>
      <section className="ServicesSection">
        <div className="service">
          <img className="servicesImage" src={mappedService[0].image} alt="" />
          <div className="serviceDescription">
            <h2 className="servicesh2">{mappedService[0].title}</h2>
            <p className="servicesPara">{mappedService[0].description}</p>
            <button className="servicesButton">
              {mappedService[0].button}
            </button>
          </div>
        </div>
        <div className="service">
          <div className="serviceDescription">
            <h2 className="servicesh2">{mappedService[1].title}</h2>
            <p className="servicesPara">{mappedService[1].description}</p>
            <button className="servicesButton">
              {mappedService[1].button}
            </button>
          </div>
          <img className="servicesImage" src={mappedService[1].image} alt="" />
        </div>

        <div className="service">
          <img className="servicesImage" src={mappedService[2].image} alt="" />
          <div className="serviceDescription">
            <h2 className="servicesh2">{mappedService[2].title}</h2>
            <p className="servicesPara">{mappedService[2].description}</p>
            <button className="servicesButton">
              {mappedService[2].button}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
