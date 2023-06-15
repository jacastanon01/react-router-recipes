import {LuVegan} from "react-icons/lu"
import {GiIndianPalace, GiNoodles, GiMeat, GiOlive } from "react-icons/gi"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

function Category(){
    return (
        <Categories>
            <StyledLink to={'/cuisine/Mediterranean'}>
                <GiOlive />
                <h3>Mediterranean</h3>
            </StyledLink>
            <StyledLink to={'/cuisine/mexican'}>
                <GiMeat />
                <h3>Mexican</h3>
            </StyledLink>
            <StyledLink to={'/cuisine/thai'}>
                <GiNoodles />
                <h3>Thai</h3>
            </StyledLink>
            <StyledLink to={'/cuisine/indian'}>
                <GiIndianPalace />
                <h3>Indian</h3>
            </StyledLink>

        </Categories>
    )
}

const Categories = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 6.5rem;
    width: 6.5rem;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 2rem;
    background: linear-gradient(45deg, #494949, #313131);
    h3 {
        color: white;
        font-size: 0.8rem;
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }
    &.active {
        background: #e94057;
        
    }
`

export default Category