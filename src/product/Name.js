import React from "react";
import aliImage from "./images/ali.jpg";
import ahlamImage from "./images/ahlam.jpg";
import samiImage from "./images/sami.jpg";
const Name = () => {
  const noms = ["Ali", "Ahlam", "sami"];
  const images = [aliImage, ahlamImage, samiImage];

  const produits = [];

  for (let i = 0; i < noms.length; i++) {
    const nom = noms[i];
    const image = images[i];
    const imageSource = image[i];

    produits.push(
      <div key={i}>
        {nom && <img src={imageSource} alt="student" />}
        <h2>{nom}</h2>
      </div>
    );
  }

  return <div>{produits}</div>;
};
export default Name;
