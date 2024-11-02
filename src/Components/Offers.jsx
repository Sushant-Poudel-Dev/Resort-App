import React from "react";
import ComboImage from "../Images/CardComboImage.jpg";
import Rafting from "../Images/RaftingPicture.jpg";
import ZipLine from "../Images/Zip-LinePicture.jpg";

const offers = [
  {
    title: "Rafting",
    image: Rafting,
    facilities: ["Full Equipment", "Premium Raft", "2 Hour Limit"],
    price: "Rs 2000 Per Person",
    button: "Book Now",
  },
  {
    title: "Combo",
    image: ComboImage, // comboImage's dimensions are off
    facilities: [
      "Rafting",
      "Zip-Line",
      "Infinity Pool",
      "Premium Dinner",
      "Photographer",
    ],
    price: "Rs 3000 Per Person",
    button: "Book Now",
  },
  {
    title: "Zip-Line",
    image: ZipLine,
    facilities: ["Full Equipment", "Medical Personals", "1 Hour Limit"],
    price: "Rs 1500 Per Person",
    button: "Book Now",
  },
];

const mappedOffers = offers.map((offer) => ({
  title: offer.title,
  image: offer.image,
  facilities: offer.facilities.join(", "),
  price: offer.price,
  button: offer.button,
}));

const Offers = () => {
  return (
    <>
      {mappedOffers.map((offer) => (
        <div className="offerCard" key={offer.title}>
          <h2>{offer.title}</h2>
          <img src={offer.image} alt={offer.title} />
          <ul>
            {offer.facilities.split(", ").map((facility) => (
              <li key={facility}>{facility}</li>
            ))}
          </ul>
          <p>{offer.price}</p>
          <button>{offer.button}</button>
        </div>
      ))}
    </>
  );
};

export default Offers;
