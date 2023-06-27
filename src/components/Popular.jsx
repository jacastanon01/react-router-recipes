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

export default Popular;
