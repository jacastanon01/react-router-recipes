import {LuVegan} from "react-icons/lu"
import {GiIndianPalace, GiNoodles, GiMeat, GiOlive } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import styles from "./CuisinesGrid.module.scss"

function CuisinesGrid(){
    return (
        <section className={styles["cuisine-group"]}>
            <NavLink 
                to={'/cuisine/Mediterranean'}
                className={styles["cuisine-item"]}
            >
                <GiOlive />
                <h3>Mediterranean</h3>
            </NavLink>
            <NavLink 
                to={'/cuisine/mexican'}
                className={styles["cuisine-item"]}
            >
                <GiMeat />
                <h3>Mexican</h3>
            </NavLink>
            <NavLink 
                to={'/cuisine/thai'}
                className={styles["cuisine-item"]}    
            >
                <GiNoodles />
                <h3>Thai</h3>
            </NavLink>
            <NavLink 
                to={'/cuisine/indian'}
                className={styles["cuisine-item"]}
            >
                <GiIndianPalace />
                <h3>Indian</h3>
            </NavLink>

        </section>
    )
}

export default CuisinesGrid