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
    @media (min-width: 481px){
        place-items: center;
    }
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    margin: 1rem;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(10px + 6.5rem);
    width: calc(10px + 6.5rem);
    padding: 0.3rem;
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