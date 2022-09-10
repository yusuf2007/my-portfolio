import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Real Estate Website",
    github: "https://github.com/yusuf2007/realestate-website",
    demo: "https://real-estate-website-2022.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Food Ordering Website",
    github: "https://github.com/yusuf2007/foood-order",
    demo: "https://foood-order.netlify.app"
  },
  {
    id: 3,
    image: IMG3,
    title: "Piano game",
    github: "https://github.com/yusuf2007/piano-demo-site",
    demo: "https://piano-demo-site.netlify.app"
  },
  {
    id: 4,
    image: IMG4,
    title: "Speed Typing game",
    github: "https://github.com/yusuf2007/speed-typer",
    demo: "https://speed-typer-test.netlify.app"
  },
  {
    id: 5,
    image: IMG5,
    title: "Tic, Tac, Toe",
    github: "https://github.com/yusuf2007/Tic-Tac-Toe",
    demo: "https://clone-tic-tac-toe.netlify.app"
  },
  {
    id: 6,
    image: IMG6,
    title: "Dino game",
    github: "https://github.com/yusuf2007/DinoGame",
    demo: "https://clone-dino-game.netlify.app"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (      
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank" rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank" rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
