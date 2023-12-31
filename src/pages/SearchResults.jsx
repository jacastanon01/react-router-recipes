import { defer, json} from "react-router-dom"
import Card from "../components/UI/Card"
import { motion } from "framer-motion"
import SuspenseWrapper from "../components/UI/SuspenseWrapper"

export async function getSearchResults({ request }) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("query");

    if (!isValidString(searchTerm)) {
        throw json({
            message: 'Please enter a type of food or ingredient to search. No special characters or numbers are allowed. I\'m not judging you but if your diet consists of numbers you may wanna get checked out for botulism 🤖'
        })
    }
    const fetchApi = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`
    )
    const result = await fetchApi.json()

    if (result.totalResults === 0) {
        throw json({
            message: `${searchTerm} not found`          
        })
    }   
    function isValidString(value) {
        const excludedChars = /[!@#$%^&*().?":{}|<>1234567890]/
        return !excludedChars.test(value) && searchTerm.trim().length > 0
    }
    return defer({searchResults: result.results})
} 

function SearchResults(){
    //const data = useLoaderData()

    return (
        <motion.section
            className="grid"
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
          >
            <SuspenseWrapper>
                {(resolvedData) => 
                    resolvedData.searchResults &&
                    resolvedData.searchResults.map((result) => (
                        <Card key={result.id} recipe={result} />               
                    ))
                }
            </SuspenseWrapper>
         
        </motion.section>
    )
}

export default SearchResults