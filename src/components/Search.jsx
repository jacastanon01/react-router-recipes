import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Form } from "react-router-dom"
import styles from "./Search.module.scss"

function Search() {
  const [query, setQuery] = useState('')
  return (
    <Form method="get" action={`/search`} className={styles["search-form"]} onSubmit={() => setQuery('')}>
        <input 
          className={styles["input-query"]} 
          type="text" 
          placeholder="chicken, mushroom, noodles"
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          name="query" 
        />
        <button type="submit" className={styles["search-icon"]}>
          <FaSearch />
        </button>
    </Form>
  )
}

export default Search