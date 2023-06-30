import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styles from "./Recipe.module.scss"
import { motion } from "framer-motion";

export const getRecipe = async ({ params }) => {
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

function Recipe(){
    const data = useLoaderData()
    const [activeTab, setActiveTab] = useState('instructions')

    return (
        <motion.article 
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            className={styles.wrapper}
        >
            <div className={styles.overview}>
                <h2>{data.title}</h2>
                <img src={data.image} />
                <h3 dangerouslySetInnerHTML={{__html: data.summary}} />
            </div>
            <div className={styles.info}>
                <button
                    className={`
                        ${styles['recipe-btn']} ${
                            activeTab === 'instructions' ? styles.active : ''
                        }
                    `}
                    onClick={() => setActiveTab('instructions')}
                >Instructions</button>
                <button
                    className={`
                    ${styles['recipe-btn']} ${
                        activeTab === 'ingredients' ? styles.active : ''
                    }
                `}
                    onClick={() => setActiveTab('ingredients')}
                >Ingredients</button>
                {
                    activeTab === 'instructions' ? (
                        <div>
                            <h3 dangerouslySetInnerHTML={{__html: data.instructions}} />
                        </div> ) : (
                        <ul>
                            {data.extendedIngredients.map(item => (
                                <li key={item.id}>{item.original}</li>
                            ))}  
                        </ul>
                    )
                }
            </div>
        </motion.article>
    )
}

export default Recipe