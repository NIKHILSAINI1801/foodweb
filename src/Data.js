import menuImage1 from "./assets/images/menu1 (1).jpeg";
import menuImage2 from "./assets/images/menu2.jpg";
import menuImage3 from "./assets/images/menu3.webp";
import menuImage4 from "./assets/images/menu4.jpg";
import menuImage5 from "./assets/images/menu5.webp";
import menuImage6 from "./assets/images/menu6.webp";
import cartImage1 from "./assets/images/cart1.jpg";
import cartImage2 from "./assets/images/cart2.jpeg";
import cartImage3 from "./assets/images/cart3.avif";
import cartImage4 from "./assets/images/menu4.jpg";
import productImage1 from "./assets/images/productbhuj1.jpg";
import productImage2 from "./assets/images/bhuj2.jpg";
import productImage3 from "./assets/images/bhuj3.jpg";
import reviewImage1 from "./assets/images/kharge (1).jpg";
import reviewImage2 from "./assets/images/lallu.jpg";
import reviewImage3 from "./assets/images/pappu.jpg";
import blogImage1 from "./assets/images/dal.jpg";
import blogImage2 from "./assets/images/spices.jpeg";
import blogImage3 from "./assets/images/Facebook-Post_-Samosa-1.jpg";
import { title } from "process";
import { text } from "@fortawesome/fontawesome-svg-core";
const menu = [
  {
    img: menuImage1,
    title: "Super Veg Thali",
    price: "Rs 199",
    discount: "Rs 200"
  },
  {
    img: menuImage2,
    title: "Naan ",
    price: "Rs 100",
    discount: "Rs 120"
  },
  {
    img: menuImage3,
    title: "Shahi Thali ",
    price: "Rs 500",
    discount: "Rs 550"
  },
  {
    img: menuImage4,
    title: "Chole Kulche ",
    price: "Rs 50",
    discount: "Rs 60"
  },
  {
    img: menuImage5,
    title: "Kofte di Sabji ",
    price: "Rs 150",
    discount: "Rs 160"
  },
  {
    img: menuImage6,
    title: "Masala Dosa ",
    price: "Rs 120",
    discount: "Rs 125"
  },
];

const cart = [
  {
    img: cartImage1,
    title:"Dal Makhani"
  },
  {
    img: cartImage2,
    title:"Maharaja Thali"
  },
  {
    img: cartImage3,
    title:"Naan Plate"
  },
  {
    img: cartImage4,
    title:"Masala Naan"
  },
];

const product = [
  {
    img: productImage1,
    title: "Navrattan Bhujia",
    price: "Rs 120",
    discount: "Rs 125",
  },
  {
    img: productImage2,
    title: "Shudh Vrat Namkeen ",
    price: "Rs 120",
    discount: "Rs 125",
  },
  {
    img: productImage3,
    title: "Chiwda",
    price: "Rs 120",
    discount: "Rs 125",

  },
];
const review = [
  {
    img: reviewImage1,
    name: "Mallikaarjun Kharge",
    text: " Beyond the food itself, the impeccable service adds an extra layer of charm to the dining experience. The staff are attentive and knowledgeable, guiding patrons through the menu with enthusiasm and grace.",
  },
  {
    img: reviewImage2,
    name: "Ramesh Congress",
    text: "The Food Was Awesome As Well As The Overall Custumer Service."
  },
  {
    img: reviewImage3,
    name: "Rahul Gandhi",
    text: "Every Time I Lose A Election, I Comes Here To Refresh My Mind."
  },
];
const blog = [
  {
    img: blogImage1,
    title: "The Best Way To Prepare A Perfect Dal",
    content: "Preparing The Perfect Dal Is Not A Cup Of Tea For Everyone ",
    author: "By: Rahul Gandhi",
    date: "20th May 2022",
  },
  {
    img: blogImage2,
    title: "Tasty And Refreshing Spices",
    content: "Fantastic And Faboulous Piece Of Art In Form Of Food ",
    author: "By: Nirmaan",
    date: "23rd April 2023",
  },
  {
    img: blogImage3,
    title: "Tasty Samosas",
    content: "Fantastic And Faboulous Piece Of Art In Form Of Food And culture",
    author: "By: Kashish",
    date: "23rd March 2023",

  },
];
export { menu, cart, product, review, blog };
