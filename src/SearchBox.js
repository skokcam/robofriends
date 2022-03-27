
const SearchBox = ( {onSearchChange} ) => {
    return (
        <div className="tc">
            <input className="tc pa2 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots"
            change={onSearchChange}></input>
        </div>
    );
}

export default SearchBox;