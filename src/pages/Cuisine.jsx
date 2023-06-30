import { useLoaderData } from "react-router-dom"
import Card from "../components/UI/Card"
import { motion } from "framer-motion"
import CuisinesGrid from "../components/CuisinesGrid"

export const getCuisine = async ({ params }) => {
    const checkLocalStorage = localStorage.getItem(params.type)
    if (checkLocalStorage) {
        return JSON.parse(checkLocalStorage)
    } else {
        const fetchApi = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${params.type}`)
        const data = await fetchApi.json()
        console.log(data)
        //setCuisine(data.results)
        localStorage.setItem(params.type, JSON.stringify(data.results))
        return data.results
    }
}

function Cuisine() {
    const data = useLoaderData()

    return (
        <>
            <CuisinesGrid />
            <motion.section
                className="grid"
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
            >
                {data.map(c => (
                    <Card key={c.id} recipe={c} />
                ))}
            </motion.section>
        </>
    )
}

export default Cuisine