import {useLoaderData, useSearchParams, defer, Await, json, useRouteError} from "react-router-dom"
import styled from "styled-components"
import Card from "../components/Card"
import { motion } from "framer-motion"
import { Suspense } from "react"
//import { SearchError } from "./SearchError"

export async function getSearchResults({ request }) {
    console.log(request)
    let url = new URL(request.url);
    let searchTerm = url.searchParams.get("query");
    //console.log(searchTerm)
    if (searchTerm) {
        const fetchApi = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`).then(res => res.json())
        //const result = fetchApi.json()
        //console.log(result)
        // if (result.totalResults === 0) {
        //     throw json({
        //         query: searchTerm,
                
        //     })
        //console.log(fetchApi)
        
        return defer({searchResults: await fetchApi})
    } else {
        throw json({
            status: 404,
            message: `${searchTerm} not found`
        })
    }
    //return null  
    // throw json({
    //     query: searchTerm
    // })
} 



function SearchResults(){
    const data = useLoaderData()
    //const [query, setQuery] = useSearchParams()
    const error = useRouteError()
    console.log(data.searchResults.results)

    return (
        <motion.section
            className="grid"
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
          >
            <Suspense fallback={<p>Loading package location...</p>}>
                <Await resolve={data.searchResults} errorElement={<p>{error?.data?.message}</p>}>
                    {data.searchResults.results.length > 0 &&
                        data.searchResults?.results.map((result) => (
                            <Card key={result.id} recipe={result} />               
                        )) 
                    }
                </Await>
            </Suspense>
            
        </motion.section>
    )

}

export default SearchResults