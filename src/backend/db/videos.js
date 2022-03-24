/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import Images from "../../asset";

export const videos = [
  {
    _id: uuid(),
    title: "10 types of Indian Embroideries",
    description: "Indian embroidery — a diverse yet distinct testimony of our rich cultural heritage.",
    creator: "Embroidery Eyes", 
    videoContent: Images.video1, 
    viewCounts: 10,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Flower Embroidery",
    description: "Create different flowers.",
    creator: "FlowerGirl",
    videoContent: Images.video2,  
    viewCounts: 30,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Showcasing Embroideries",
    description: "Combined few embroidery pieces made.", 
    creator: "Shyam10", 
    videoContent: Images.video3,  
    viewCounts: 50,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Bird",
    description: "Learn to make bird with design.",
    creator: "EmbLevel",
    videoContent: Images.video4,  
    viewCounts: 30,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Review for machine",
    description: "Review of Brother Embroidery Machine.", 
    creator: "EmbroideryTraining", 
    videoContent: Images.video5,  
    viewCounts: 10,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Punch Needle Work",
    description: "Punch needle work on hoop",
    creator: "HoopWork",
    videoContent: Images.video6,  
    viewCounts: 30,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Flower based Embroideries",
    description: "Different variations of flower to make Embroidery.",
    creator: "FlowerGirl", 
    videoContent: Images.video7,  
    viewCounts: 10,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Letter Embroidery",
    description: "Learn letter embroidery to create your design",
    creator: "AlphaEmb",
    videoContent: Images.video8,  
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Embroideries",
    description: "Various images of embroideries combined. ",
    creator: "Embroidery Eyes", 
    videoContent: Images.video9,  
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Animal World",
    description: "Showcasing my designs and works.",
    creator: "EmbLevel",
    videoContent: Images.video10,  
    viewCounts: 30,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Royal Present",
    description: "Learn mascot of Royal Present with designs",
    creator: "EmbLevel", 
    videoContent: Images.video11,  
    viewCounts: 10,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Mickey Mouse",
    description: "Learning mickey mouse on Usha machine.",
    creator: "EmbroideryTraining",
    videoContent: Images.video12,  
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Basic Stitch",
    description: "Learn basic stitches required.",
    creator: "EmbLevel", 
    videoContent: Images.video13,  
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Star Variation",
    description: "Unique Star design",
    creator: "AlphaEmb",
    videoContent: Images.video14,  
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Hanging Pots",
    description: "Design Hanging pots",
    creator: "Embroidery Eyes", 
    videoContent: Images.video15,  
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Ribbion Embroidery",
    description: "Embroidery using ribbions",
    creator: "AlphaEmb",
    videoContent: Images.video16,  
    viewCounts: 30,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "Designs on Clothes",
    description: "Various designs on clothes.",
    creator: "Embroidery Eyes", 
    videoContent: Images.video17,  
    viewCounts: 10,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Kurta Patterns",
    description: "Patterns to make on kurtas.",
    creator: "EmbLevel",
    videoContent: Images.video18,  
    viewCounts: 30,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Kasuti Embroidery",
    description: "A Traditional practice on sarees.",
    creator: "Embroidery Eyes", 
    videoContent: Images.video19,  
    viewCounts: 10,
    categoryName: "Traditional"
  },
  {
    _id: uuid(),
    title: "Different stitches",
    description: "A variety of stitches to learn.",
    creator: "FlowerGirl",
    videoContent: Images.video20,  
    viewCounts: 30,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Cube Embroidery",
    description: " ",
    creator: "EmbLevel", 
    videoContent: Images.video21,  
    viewCounts: 10,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Janome Excella DLX",
    description: "Working and review of this machine. ",
    creator: "EmbroideryTraining",
    videoContent: Images.video22,  
    viewCounts: 30,
    categoryName: "Advanced Level"
  },
  {
    _id: uuid(),
    title: "Stiches and Patterns",
    description: "Dive into the world of stitches ",
    creator: "EmbLevel", 
    videoContent: Images.video23,  
    viewCounts: 10,
    categoryName: "Beginner Level"
  },
  {
    _id: uuid(),
    title: "Punch Needle Tutorial",
    description: "Lets create a pattern using punch needle.",
    creator: "HoopWork",
    videoContent: Images.video24,  
    viewCounts: 30,
    categoryName: "Intermediate Level"
  },
  {
    _id: uuid(),
    title: "Stars and Leaves.",
    description: "Make simple stars and leaves using yarn.",
    creator: "AlphaEmb", 
    videoContent: Images.video25,  
    viewCounts: 10,
    categoryName: "Hand Embroidery"
  },
  {
    _id: uuid(),
    title: "ButterFly",
    description: " ",
    creator: "AlphaEmb", 
    videoContent: Images.video26,  
    viewCounts: 10,
    categoryName: "Advanced Level"
  }
];
