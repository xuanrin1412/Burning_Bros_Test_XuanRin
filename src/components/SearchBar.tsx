import Logo from "../assets/img/logo.svg";
import { ISearchBar } from "../types/search";
import Search from "../assets/img/search.svg";

const SearchBar: React.FC<ISearchBar> = ({ searchValue, setSearchValue }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return <div className="fixed top-0 left-0 w-full h-header border-b flex items-center justify-center bg-gray-50 flex-col gap-2">
        <img src={Logo} alt="" />
        <div className=" w-9/12 md:w-8/12 lg:w-1/2 flex items-center border border-gray-300 py-1 px-2 rounded-full bg-white ">
            <input value={searchValue} onChange={handleSearchChange} type="text" className="flex-1 outline-none px-2" />
            <img src={Search} alt="" />
        </div>
    </div>;
}
export default SearchBar;
