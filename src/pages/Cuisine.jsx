import { useLoaderData } from "react-router-dom"
import Card from "../components/Card"
import { motion } from "framer-motion"
import styled from "styled-components"

function Cuisine() {
    const data = useLoaderData()

    return (
        <Grid
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            {data.map(c => (
                <Card key={c.id} recipe={c} />
            ))}
        </Grid>
    )
}

const Grid = styled(motion.section)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;

`

// const Card = styled.div`
//     img {
//         width: 100%;
//         border-radius: 2rem;
//     }
//     a {
//         text-decoration: none;
//     }
//     h4 {
//         text-align: center;
//         padding: 1rem;
//     }
// `

export default Cuisine