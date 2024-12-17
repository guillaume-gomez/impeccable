import francoisFillon from "/FrançoisFillon.jpg";
import image from "/filter.webp";

interface CardData {
  title: string;
  color: string;
  content: string;
  borderBackground: string;
  level: number;
  totalSeries: number;
  seriesPosition: number;
  iShiny?: boolean;
  imageSrc?: string;
}


export const dataPolitics = [
  {
    title: "Francois Fillon",
    content: "Detournement de fonds public, complicité et recel d'abus de biens sociaux (4ans/1ferme)",
    color: "blue",
    borderBackground: "chartreuse",
    level: 1,
    totalSeries: 20,
    seriesPosition: 1,
    imageSrc: francoisFillon
  },
  {
    title: "Alain Juppé",
    content: "Prise illégale d’intérêts dans l’affaire des emplois fictifs de la mairie de Paris. (14 mois)",
    color: "blue",
    borderBackground: "gold",
    level: 2,
    totalSeries: 20,
    seriesPosition: 1,
    imageSrc: image
  },
  {
    title: "Edith Cresson",
    content: "Favoritisme en 2006 par la Cour de justice européenne pour avoir engagé un proche comme membre de son cabinet alors qu'elle était commissaire européenne",
    color: "blue",
    borderBackground: "purple",
    level: 3,
    totalSeries: 20,
    seriesPosition: 1,
    imageSrc: image
  }
];