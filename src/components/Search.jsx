import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Form } from "react-router-dom"
import styles from "./Search.module.scss"

function Search() {
  const [query, setQuery] = useState('')
  return (
    <Form method="get" action={`/search`} className={styles["search-form"]} onSubmit={() => setQuery('')}>
        <input className={styles["input-query"]} type="text" value={query} onChange={(e) => setQuery(e.target.value)} name="query" />
        <div className={styles["search-icon"]}>
          <FaSearch />
        </div>
    </Form>
  )
}

const StyledForm = styled(Form)`
  min-width: 100vw;
    display: inline-flex;
    justify-content: center;
    position: relative;
    .input-query {
      width: 25vw;
      z-index: 2;
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
        //min-width: 50%;
    }
    `
  const SearchIcon = styled.span`
  @media (min-width: 319px) and (max-width: 600px) {
    //justify-content: center
    width: 100%;
    // svg {
    //   left: calc(50% - 6rem);
    // }
    padding-left: 50vw;
  }
  @media (min-width: 863px){

    //padding-left: calc(100vw - 33vw);
    svg {
      //padding-left: 17rem;
      //left: min(calc(40% - 10rem), 21%);
    }
  }
  @media (min-width: 491px) and (max-width: 862px){
    padding-left: calc(100vw - 37vw);
  }
    //display: flex;
    //min-width: max(calc(50% + 9rem), 60%);
    min-width: 100vw;
    height: 100%;
    //padding-left: calc(100vw - 33vw);
    position: absolute;
    display: inline-block;
    align-items: center;
    svg {
      z-index: 5;
      position: absolute;
      top: 50%;
      //padding-left: 17rem;
      transform: translate(100%, -50%);
      color: var(--primColor);
      cursor: pointer;
      width: 1rem;
  }
  `

export default Search