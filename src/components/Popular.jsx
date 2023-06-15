import { useEffect, useState } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SlideWrapper from "./SlideWrapper";
import Card from "./Card";

function Popular() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const checkLocalStorage = localStorage.getItem("popular");

    if (checkLocalStorage) {
      setRecipes(JSON.parse(checkLocalStorage));
    } else {
      const fetchApi = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`
      );
      const data = await fetchApi.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setRecipes(data.recipes);
    }
  };
  return (
    <SlideWrapper title="Selected Dishes">
      {recipes.map((r) => (
        <SplideSlide key={r.id}>
          <Card recipe={r} />
        </SplideSlide>
      ))}
    </SlideWrapper>
  );
}



// const Card = styled.div`
//   min-height: 25rem;
//   overflow: hidden;
//   position: relative;
//   img {
//     border-radius: 2rem;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     left: 0;
//     object-fit: cover;

//   }
//   p {
//     position: absolute;
//     z-index: 10;
//     left: 50%;
//     bottom: 0;
//     transform: translate(-50%, 0%);
//     color: white;
//     font-size: 1rem;
//     text-align: center;
//     font-weight: 800;
//     height: 40%;
//   }
// `;



export default Popular;
