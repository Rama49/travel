import React, { useEffect } from "react";
import "./main.scss";

import { HiOutlineClipboard, HiOutlineLocationMarker } from "react-icons/hi";

import img from "../../Image/img.jpg";
import img2 from "../../Image/img2.png";
import img3 from "../../Image/img3.png";
import img4 from "../../Image/img4.png";
import img5 from "../../Image/img5.png";
import img6 from "../../Image/img6.png";
import img7 from "../../Image/img7.jpg";
import img8 from "../../Image/img8.png";
import img9 from "../../Image/img9.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the episome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent  grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboard className="icon" />{" "}
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
