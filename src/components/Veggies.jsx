import { useEffect, useState } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SlideWrapper from "./SlideWrapper";
import Card from "./Card";


function Veggies() {
  const [recipes, setRecipes] = useState([]);

  const getVeggieRecipes = async () => {
    const checkLocalStorage = localStorage.getItem("vegetarian");
    console.log(checkLocalStorage)
    if (checkLocalStorage) {
      setRecipes(JSON.parse(checkLocalStorage));
    } else {
      const fetchApi = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&diet=vegetarian`
      );
      const data = await fetchApi.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.results));
      setRecipes(data.results);
    }
  };

  useEffect(() => {
    getVeggieRecipes();
  }, []);

  return (
    <>
      <SlideWrapper title="Vegetarian Dishes">      
        {recipes.map((r) => (
          <SplideSlide key={r.id}>
            <Card recipe={r} />
          </SplideSlide>
        ))}
      </SlideWrapper>
    </>
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

export default Veggies