import React from "react";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Offers from "../Components/Offers";
import GuestWords from "../Components/GuestWords";
import Footer from "../Components/Footer";
import Bubbles from "../Components/Bubbles";

const Home = () => {
  return (
    <>
      <section className="HomepageHeroSection">
        <Navbar />
        <div className="HeroConatiner">
          <h1>
            With the wind in your hair and the world beneath your feet. Come,
            let’s glide through life!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className="HomepageServiceSection">
        <h1>Our Services</h1>
        <Services />
      </section>
      <Bubbles />
      <section className="HomepageOfferSection">
        <h1>Our Offers</h1>
        <div className="OffersContainer">
          <Offers />
        </div>
      </section>
      <Bubbles />
      <section className="HomepageGuestSection">
        <h1>What Our Guest Say</h1>
        <div className="GuestWordsContainer">
          <GuestWords />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
