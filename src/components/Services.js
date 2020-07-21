import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptates officiis eos officia quasi corporis.",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptates officiis eos officia quasi corporis.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptates officiis eos officia quasi corporis.",
      },
      {
        icon: <FaBeer />,
        title: "strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptates officiis eos officia quasi corporis.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article className="service" key={index}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
