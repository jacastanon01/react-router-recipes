import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Form } from "react-router-dom"

function Search() {
  const [query, setQuery] = useState('')
  return (
    <StyledForm method="get" action={`/search`} onSubmit={() => setQuery('')}>
        <input className="input-query" type="text" value={query} onChange={(e) => setQuery(e.target.value)} name="query" />
        <FaSearch />
    </StyledForm>
  )
}

const StyledForm = styled(Form)`
    margin: 0 20rem;
    position: relative;
    width: 100%;

    .input-query {
        border: none;
        font-size: 1.5rem;
        padding: 1rem 3rem;
        outline: none;
        border-radius: 1rem;
        background: #313131;
        color: white;
        margin: 1rem;
        font-weight: 500;
        letter-spacing: 0.1rem;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 1%;
        transform: translate(100%, -50%);
        color: white;
        cursor: pointer;
    }

`

export default Search