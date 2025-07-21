import React from "react";
import "./CategoryGrid.css";

const defaultCategories = [
  {
    name: "Electronics",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/06/Factory-Supply-S21-Mobile-Phone-Large-Memory-24-48MP-High-Resolution-Cellphone-7-2-Inch-Big-Screen-Dual-SIM-Card-Phone-removebg-preview.png",
    link: "",
  },
  {
    name: "Fashion",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/07/untitled-115-removebg-preview.png",
    link: "",
  },
  {
    name: "Health & Beauty",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/06/Daily-skincare-for-adults-removebg-preview.png",
    link: "#",
  },
  {
    name: "Kitchen & Dining",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/06/Kit-Standard-Hero-Dining_4_Person_1836x1836-removebg-preview.png",
    link: "#",
  },
  {
    name: "Luggage & Bags",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/06/Recoil_Black_PC_S-01_1024x-removebg-preview.png",
    link: "#",
  },
  {
    name: "Sports",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/06/IMG_6657-1-removebg-preview.png",
    link: "#",
  },
  {
    name: "Baby Care",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/06/1173107-1-1-removebg-preview.png",
    link: "#",
  },
  {
    name: "Hardware",
    image:
      "https://www.qarakata.com/wp-content/uploads/2025/06/pngtree-hardware-tool-transparent-background-free-png-image_12801133.png",
    link: "",
  },
];

export default function CategoryGrid({ categories }) {
  const items = categories || defaultCategories;

  return (
    <div className="joyful-categories">
      {items.map((cat, index) => (
        <a
          href={cat.link || "#"}
          className="joyful-category"
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cat.image} alt={cat.name} />
          <p>{cat.name}</p>
        </a>
      ))}
    </div>
  );
}
