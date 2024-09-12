import { StaticImageData } from "next/image";

import img1 from "./photos/img-1.jpeg"
import img2 from "./photos/img-2.jpeg"
import img3 from "./photos/img-3.jpeg"
import img4 from "./photos/img-4.jpeg"
import img5 from "./photos/img-5.jpeg"
import img6 from "./photos/img-6.jpeg"
import img7 from "./photos/img-7.jpeg"

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string
}

const wondersImages: WonderImage[] = [
    {
      id: "1",
      name: "Great Wall of China",
      src: img1,
      photographer: "Photo by Max van den Oetelaar on Unsplash",
      location: "China",
    },
    {
      id: "2",
      name: "Petra",
      src: img2,
      photographer: "Photo by Reiseuhu on Unsplash",
      location: "Jordan",
    },
    {
      id: "3",
      name: "Christ the Redeemer",
      src: img3,
      photographer: "Photo by Andrea Leopardi on Unsplash",
      location: "Brazil",
    },
    {
      id: "4",
      name: "Machu Picchu",
      src: img4,
      photographer: "Photo by Jared Schwitzke on Unsplash",
      location: "Peru",
    },
    {
      id: "5",
      name: "Chichen Itza",
      src: img5,
      photographer: "Photo by E Mens on Unsplash",
      location: "Mexico",
    },
    {
      id: "6",
      name: "Roman Colosseum",
      src: img6,
      photographer: "Photo by Andrea Cipriano on Unsplash",
      location: "Italy",
    },
    {
      id: "7",
      name: "Taj Mahal",
      src: img7,
      photographer: "Photo by Su San Lee on Unsplash",
      location: "India",
    },
  ];

  export default wondersImages