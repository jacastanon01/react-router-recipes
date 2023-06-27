import { useLoaderData } from "react-router-dom"
import Card from "../components/Card"
import { motion } from "framer-motion"
import styled from "styled-components"
import CuisinesGrid from "../components/CuisinesGrid"

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