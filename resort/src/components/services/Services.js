import React, {useState} from 'react';
import Title from "../title/Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

const Services = () => {
  const [services] = useState([
    {
      icon: <FaCocktail/>,
      title: "Free Cocktails",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, veniam!"
    },
    {
      icon: <FaHiking/>,
      title: "Endless Adventures",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, veniam!"
    },
    {
      icon: <FaShuttleVan/>,
      title: "Free Shuttle",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, veniam!"
    },
    {
      icon: <FaBeer/>,
      title: "Strongest Beer",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, veniam!"
    }
  ]);
  return (
    <section className="services">
      <Title title="services"/>
      <div className="services-center">
        {services.map((item, index) => {
          return <article key={index} className="service">
            <span> {item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>;
        })}
      </div>
    </section>
  );
}

export default Services;
