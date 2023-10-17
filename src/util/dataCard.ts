import CraigImage from "../assets/craig-adderley.jpg";
import RainImage from "../aassets/rain.jpg";
import SnowImage from "../assets/snow.jpg";
import SpringImage from "../assets/spring.jpg";
import SummerImage from "../assets/summer.jpg";

type CardContent = {
  title: string;
  season: string;
  location: string;
  temp: string;
  status: string;
  wind: string;
  src: string; // Anda harus menentukan tipe yang sesuai untuk gambar, misalnya 'string' atau 'HTMLImageElement'
};

const cardContent: CardContent[] = [
  {
    title: "Craig Adderley",
    season: "Fall Season",
    location: "Noakhali, Bangladesh",
    temp: "30",
    status: "Save",
    wind: "20 m/s",
    src: CraigImage, // Gantilah ini dengan tipe data yang sesuai untuk gambar
  },
  {
    title: "June Rain",
    season: "Rain Season",
    location: "Jakarta, Indonesian",
    temp: "22",
    status: "Save",
    wind: "40 m/s",
    src: RainImage, // Gantilah ini dengan tipe data yang sesuai untuk gambar
  },
  {
    title: "Christmas Tree",
    season: "Snow Season",
    location: "New York, USA",
    temp: "16",
    status: "Save",
    wind: "14 m/s",
    src: SnowImage, // Gantilah ini dengan tipe data yang sesuai untuk gambar
  },
  {
    title: "The Cherry Blossoms",
    season: "Spring Season",
    location: "Tokyo, Japan",
    temp: "31",
    status: "Save",
    wind: "18 m/s",
    src: SpringImage, // Gantilah ini dengan tipe data yang sesuai untuk gambar
  },
  {
    title: "Time to Sunbathe",
    season: "Summer Season",
    location: "Honolulu, Hawai",
    temp: "34",
    status: "Save",
    wind: "23 m/s",
    src: SummerImage, // Gantilah ini dengan tipe data yang sesuai untuk gambar
  },
];

export default cardContent;
