/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import Images from "../../asset";
import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "10 types of Indian Embroideries",
    description: "Indian embroidery — a diverse yet distinct testimony of our rich cultural heritage.",
    creator: "Embroidery Eyes", 
    videoContent: Images.video1, 
    time: 100,
    viewCounts: 10,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Flower Embroidery",
    description: "Create different flowers.",
    creator: "FlowerGirl",
    videoContent: Images.video2,  
    time: 180,
    viewCounts: 30,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Showcasing Embroideries",
    description: "Combined few embroidery pieces made.", 
    creator: "Shyam10", 
    videoContent: Images.video3,  
    time: 40,
    viewCounts: 50,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Bird",
    description: "Learn to make bird with design.",
    creator: "EmbLevel",
    videoContent: Images.video4,  
    time: 200,
    viewCounts: 30,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Review for machine",
    description: "Review of Brother Embroidery Machine.", 
    creator: "EmbroideryTraining", 
    videoContent: Images.video5,  
    time: 120, 
    viewCounts: 10,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Punch Needle Work",
    description: "Punch needle work on hoop",
    creator: "HoopWork",
    videoContent: Images.video6,  
    time: 30, 
    viewCounts: 30,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Flower based Embroideries",
    description: "Different variations of flower to make Embroidery.",
    creator: "FlowerGirl", 
    videoContent: Images.video7,  
    time: 25, 
    viewCounts: 10,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Letter Embroidery",
    description: "Learn letter embroidery to create your design",
    creator: "AlphaEmb",
    videoContent: Images.video8,  
    time: 49, 
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Embroideries",
    description: "Various images of embroideries combined. ",
    creator: "Embroidery Eyes", 
    videoContent: Images.video9,  
    time: 15, 
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Animal World",
    description: "Showcasing my designs and works.",
    creator: "EmbLevel",
    videoContent: Images.video10,  
    time: 35, 
    viewCounts: 30,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Royal Present",
    description: "Learn mascot of Royal Present with designs",
    creator: "EmbLevel", 
    videoContent: Images.video11,  
    time: 60, 
    viewCounts: 10,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Mickey Mouse",
    description: "Learning mickey mouse on Usha machine.",
    creator: "EmbroideryTraining",
    videoContent: Images.video12,  
    time: 20, 
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Basic Stitch",
    description: "Learn basic stitches required.",
    creator: "EmbLevel", 
    videoContent: Images.video13,  
    time: 50, 
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Star Variation",
    description: "Unique Star design",
    creator: "AlphaEmb",
    videoContent: Images.video14,  
    time: 13, 
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Hanging Pots",
    description: "Design Hanging pots",
    creator: "Embroidery Eyes", 
    videoContent: Images.video15,  
    time: 68, 
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Ribbion Embroidery",
    description: "Embroidery using ribbions",
    creator: "AlphaEmb",
    videoContent: Images.video16,  
    time: 42, 
    viewCounts: 30,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Designs on Clothes",
    description: "Various designs on clothes.",
    creator: "Embroidery Eyes", 
    videoContent: Images.video17,  
    time: 22, 
    viewCounts: 10,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Kurta Patterns",
    description: "Patterns to make on kurtas.",
    creator: "EmbLevel",
    videoContent: Images.video18,  
    time: 52, 
    viewCounts: 30,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Kasuti Embroidery",
    description: "A Traditional practice on sarees.",
    creator: "Embroidery Eyes", 
    videoContent: Images.video19,  
    time: 40, 
    viewCounts: 10,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Different stitches",
    description: "A variety of stitches to learn.",
    creator: "FlowerGirl",
    videoContent: Images.video20,  
    time: 25, 
    viewCounts: 30,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Cube Embroidery",
    description: " ",
    creator: "EmbLevel", 
    videoContent: Images.video21,  
    time: 38, 
    viewCounts: 10,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Janome Excella DLX",
    description: "Working and review of this machine. ",
    creator: "EmbroideryTraining",
    videoContent: Images.video22,  
    time: 44, 
    viewCounts: 30,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Stiches and Patterns",
    description: "Dive into the world of stitches ",
    creator: "EmbLevel", 
    videoContent: Images.video23,  
    time: 26, 
    viewCounts: 10,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Punch Needle Tutorial",
    description: "Lets create a pattern using punch needle.",
    creator: "HoopWork",
    videoContent: Images.video24,  
    time: 24, 
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Stars and Leaves.",
    description: "Make simple stars and leaves using yarn.",
    creator: "AlphaEmb", 
    videoContent: Images.video25,  
    time: 72, 
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "ButterFly",
    description: "Learn embroidering butterfly step by step.",
    creator: "AlphaEmb", 
    videoContent: Images.video26,  
    time: 190, 
    viewCounts: 10,
    categoryName: "Advanced Level"
  }
];
