import RootLayout from "../layout/RootLayout"
import Cuisine from "../pages/Cuisine"
import Home from "../pages/Home"
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import SearchResults from "../pages/SearchResults"
import Recipe from "../pages/Recipe"
import { ErrorBoundary } from "../pages/ErrorBoundary"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootLayout />}
        >
            <Route
                index
                element={<Home />}
            />
            <Route
                path="cuisine/:type"
                element={<Cuisine />}
                loader={getCuisine}
                errorElement={<ErrorBoundary />}
            />
            <Route
                path="/search"
                element={<SearchResults />}
                loader={getSearchResults}
                errorElement={<ErrorBoundary />}
            />
            <Route
                path="/recipe/:recipeId"
                element={<Recipe />}
                loader={getRecipe}
                errorElement={<ErrorBoundary />}
            />
        </Route>
    )
)

const getCuisine = async ({ params }) => {
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

const getSearchResults = async ({ request }) => {
    console.log(request)
    let url = new URL(request.url);
    let searchTerm = url.searchParams.get("query");
    console.log(searchTerm)
    if (searchTerm) {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`)
        const result = await data.json()
        console.log(result)
        return result.results
    } else return null

}

const getRecipe = async ({ params }) => {
    const checkLocalStorage = localStorage.getItem(params.recipeId)

    if (checkLocalStorage) {
        return JSON.parse(checkLocalStorage)
    } else {
        const fetchApi = await fetch(`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${import.meta.env.VITE_API_KEY}`)
        const data = await fetchApi.json()
        localStorage.setItem(params.recipeId, JSON.stringify(data))
        console.log(data)
        return data
    }
}