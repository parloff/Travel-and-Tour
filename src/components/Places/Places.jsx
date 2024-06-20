import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Takwabay Boat",
    location: "Lekki, Lagos, Nigeria",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Boat Cruise",
  },
  {
    img: Img2,
    title: "Pharaoh Museum",
    location: "Banana Island, Lagos, Nigeria",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Oro Park",
    location: "Ikorodu, Lagos, Nigeria",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Abeokuta Market",
    location: "Abeokuta, Ogun-state, Nigeria",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Market Place",
  },
  {
    img: Img5,
    title: "Abuja Metro",
    location: "Gwarinpa, Abuja, Nigeria",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Club",
    location: "Oniru-beach, Lagos, Nigeria",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
