
const SearchBox = (props) => {
    const { searchChange } = props;   

    return (
        <div className="tc">
            <input className="pa2 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots"
            onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;