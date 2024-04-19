import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=21"
        );
        const imageUrls = response.data.map((image) => image.download_url);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

const cards = [
  {
    name: "Software Development",
    total: 21,
    description: "Ongoing Projects",
    footer: "In Progress: 13",
  },
  {
    name: "Data Analysis",
    total: 17,
    description: "Data Analysis Tasks",
    footer: "Completed: 9",
  },
  {
    name: "Web Development",
    total: 38,
    description: "Web Development Tasks",
    footer: "In Progress: 6",
  },
  {
    name: "System Administration",
    total: 15,
    description: "System Maintenance",
    footer: "Completed: 8",
  },
  {
    name: "Network Security",
    total: 27,
    description: "Security Checks",
    footer: "Completed: 22",
  },
  {
    name: "Cloud Computing",
    total: 42,
    description: "Cloud Management",
    footer: "Tasks Assigned: 30",
  },
  {
    name: "Database Management",
    total: 19,
    description: "Database Optimization",
    footer: "Completed: 14",
  },
  {
    name: "Project Management",
    total: 8,
    description: "Project Planning",
    footer: "In Progress: 5",
  },
  {
    name: "IT Support",
    total: 33,
    description: "IT Support Tickets",
    footer: "Resolved: 25",
  },
  {
    name: "Software Testing",
    total: 20,
    description: "Software Testing",
    footer: "In Progress: 16",
  },
];



  return (
    <section className="page card-1-page">
      <div className="cards">
        {cards.map((card, index) => (
          <label key={index} id={card.name}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> more_vert </span>
                </header>
                <var>{card.total}</var>
                <h3>{card.description}</h3>
                <h4>{card.footer}</h4>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <MdClose
                    className="close-icon"
                    style={{ color: "#ffffff" }}
                  />{" "}
                  {/* Color del botón de cierre */}
                </header>
                <img
                  src={images[index]}
                  alt={`Image ${index}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};

export default App;
