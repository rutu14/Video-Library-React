import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Beginner Level",
    description: "Masters today, were Starters Yesterday, so begin now.",
  },
  {
    _id: uuid(),
    categoryName: "Intermediate Level",
    description: "Practice makes perfect."
  },
  {
    _id: uuid(),
    categoryName: "Advanced Level",
    description: "After a storm comes a calm.",
  },
  {
    _id: uuid(),
    categoryName: "Traditional",
    description: "India's Embroideries, who provide consumers a leverage in the fashion world.",
  },
  {
    _id: uuid(),
    categoryName: "Hand Embroidery",
    description: "Explore the world.",
  },
];
