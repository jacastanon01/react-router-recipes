import {useLoaderData} from "react-router-dom"
import styled from "styled-components"
import Card from "../components/Card"
import { motion } from "framer-motion"

function SearchResults(){
    const data = useLoaderData()

    return (
        <motion.section
            className="grid"
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
          >
            {data?.map((result) => (
                <Card key={result.id} recipe={result} />               
            ))}
        </motion.section>
    )

}

export default SearchResults