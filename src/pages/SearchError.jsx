import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";
import styled from "styled-components";


export function SearchError() {
    let error = useRouteError()
    const redirect = useNavigate()

    if (isRouteErrorResponse(error)){
        console.log(error);
        return (
            <StyledErrorMessage>
                <div>
                    {error.data.message}
                </div>
                <button onClick={handleClickRandomRecipe}>Click here to find another recipe</button>
            </StyledErrorMessage>
        )
    }

    async function handleClickRandomRecipe(){
        const fetchApi = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}`)
        const result = await fetchApi.json()

        return redirect(
            `/recipe/${result.recipes[0].id}`, 
            {replace: true}
        )

    }
    // Uncaught ReferenceError: path is not defined
    return <div>{error.data.message} hhhh</div>;
}

const StyledErrorMessage = styled.section`
    display: grid;

`