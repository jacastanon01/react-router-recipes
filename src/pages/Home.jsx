import Veggies from "../components/Veggies";
import Popular from "../components/Popular";
import { motion } from "framer-motion";


function Home(){
    return (
        <motion.main
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Popular />
            <Veggies />
        </motion.main>
    )
}

export default Home