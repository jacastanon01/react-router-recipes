import { Outlet } from "react-router-dom"
import Category from "../components/Category"
import Search from "../components/Search"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import styled from "styled-components"

function RootLayout() {
    return (
        <StyledMain>
            <Home to={'/'}>
                <h2>
                    <FaHome /> Home
                </h2>
            </Home>
            <Search />
            <Category />
            <Outlet />
        </StyledMain>
    )
}

const StyledMain = styled.main`
    @media (min-width: 481px){
        margin: 0 2rem;
    }
`

const Home = styled(Link)`
    text-decoration: none;
    color: black;
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