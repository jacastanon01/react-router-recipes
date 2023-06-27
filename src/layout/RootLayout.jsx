import { Outlet } from "react-router-dom"
import Search from "../components/Search"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import styled from "styled-components"

function RootLayout() {
    return (
        <StyledMain>
            <HomeLink to={'/'}>
                <h2>
                    <FaHome /> Home
                </h2>
            </HomeLink>
            <Search />
            <Outlet />
        </StyledMain>
    )
}

const StyledMain = styled.main`
    @media (min-width: 481px){
        margin: 0 2rem;
    }
`

const HomeLink = styled(Link)`
    text-decoration: none;
    color: var(--primColor);
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            padding-right: 0.4rem;
        }
    }
`

export default RootLayout