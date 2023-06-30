import Veggies from "../components/Veggies";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import CuisinesGrid from "../components/CuisinesGrid";
import { defer } from "react-router-dom";

export async function getHomeData() {
    const checkLocalStorageVeggie = localStorage.getItem("vegetarian");
    const checkLocalStoragePopular = localStorage.getItem("popular");
    let veggieResponse = []
    let popularResponse = []

    if (checkLocalStorageVeggie) {
        veggieResponse = JSON.parse(checkLocalStorageVeggie);
    } else {
        const fetchApi = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&diet=vegetarian`
          );
          const data = await fetchApi.json();
          localStorage.setItem("vegetarian", JSON.stringify(data.results));
          veggieResponse = data.results
    }

    if (checkLocalStoragePopular) {
        popularResponse = JSON.parse(checkLocalStoragePopular)
    } else {
        const fetchApi = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`
        );
        const data = await fetchApi.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        popularResponse = data.recipes
    }

    return defer({
        veggieResponse,
        popularResponse
    })
}
function Home(){
    return (
        <motion.section
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <CuisinesGrid />
            <Popular />
            <Veggies />           
        </motion.section>
    )
}

export default Home