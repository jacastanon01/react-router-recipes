import styled from "styled-components"
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss"

function Card({ recipe }) {
    return (
            <article className={styles.card}>
              <Link to={`../recipe/${recipe.id}`}>
                 <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </article>
    )
}

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  border-radius: 2rem;
`;

export default Card