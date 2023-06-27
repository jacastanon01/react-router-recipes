import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styles from "./Recipe.module.scss"

function Recipe(){
    const data = useLoaderData()
    const [activeTab, setActiveTab] = useState('instructions')

    return (
        <section className={styles.wrapper}>
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
        </section>
    )
}

export default Recipe