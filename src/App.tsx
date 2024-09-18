import { useState } from "react"
import useDebounce from "./hook/useDebounce"
import SearchBar from "./components/SearchBar"
import ProductList from "./components/ProductList"

function App() {
  const [searchValue, setSearchValue] = useState<string>("")
  const debouncedSearchValue = useDebounce(searchValue, 500)
  return (
    <div className="relative" >
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <ProductList searchValue={debouncedSearchValue} />
    </div>
  )
}

export default App