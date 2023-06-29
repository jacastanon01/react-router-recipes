import styled from "styled-components"
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Card({ recipe }) {
    return (
            <StyledCard>
              <Link to={`../recipe/${recipe.id}`}>
                 <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </StyledCard>
    )
}

const StyledCard = styled.article`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
    
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    font-size: 1rem;
    text-align: center;
    font-weight: 800;
    height: 40%;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  border-radius: 2rem;
`;

export default Card