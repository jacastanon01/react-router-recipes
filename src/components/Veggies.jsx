import { useEffect, useState } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SlideWrapper from "./UI/SlideWrapper";
import Card from "./UI/Card";


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

export default Veggies