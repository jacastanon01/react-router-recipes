import RootLayout from "../layout/RootLayout"
import Cuisine, { getCuisine } from "../pages/Cuisine"
import Home, { getHomeData } from "../pages/Home"
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import SearchResults, {getSearchResults} from "../pages/SearchResults"
import Recipe, {getRecipe} from "../pages/Recipe"
import { ErrorBoundary } from "../pages/ErrorBoundary"
import { SearchError } from "../pages/SearchError"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootLayout />}
        >
            <Route
                index
                element={<Home />}
                loader={getHomeData}
            />
            <Route
                path="cuisine/:type"
                element={<Cuisine />}
                loader={getCuisine}
                errorElement={<ErrorBoundary />}
            />
            <Route
                path="search"
                element={<SearchResults />}
                loader={getSearchResults}
                errorElement={<SearchError />}
            />
            <Route
                path="recipe/:recipeId"
                element={<Recipe />}
                loader={getRecipe}
                errorElement={<ErrorBoundary />}
            />
        </Route>
    )
)
