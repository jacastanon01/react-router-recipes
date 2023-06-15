import {useLoaderData} from "react-router-dom"
import styled from "styled-components"
import Card from "../components/Card"
import { motion } from "framer-motion"

function SearchResults(){
    const data = useLoaderData()

    return (
        <Grid
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
          >
            {data.map((result) => (
                <Card key={result.id} recipe={result} />               
            ))}
        </Grid>
    )

}

const Grid = styled(motion.section)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    align-items: center;
`

// const StyledCard = styled.div`
//     height: 100%;
//     display: grid;
//     flex-direction: column;
//     justify-items: center;
//     img {
//         width: 100%;
//         height: 100%;
//         border-radius: 2rem;
//     }
// `

export default SearchResults