import { Outlet } from "react-router-dom"
import Category from "../components/Category"
import Search from "../components/Search"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import styled from "styled-components"

function RootLayout() {
    return (
        <div>
            <Home to={'/'}>
                <h2>
                    <FaHome /> Home
                </h2>
            </Home>
            <Search />
            <Category />
            <Outlet />
        </div>
    )
}

const Home = styled(Link)`
    text-decoration: none;
    color: black;
    h2 {
        display: flex;
        align-items: center;
        svg {
            padding-right: 0.4rem;
        }
    }
`

export default RootLayout