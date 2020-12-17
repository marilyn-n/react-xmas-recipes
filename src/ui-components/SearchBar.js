
function SearchBar() {
  return(
    <div className="search">
      <h3>Find a Recipe</h3>
      <form className="search__form">
        <input type="text" placeholder="Search something delicious"/>
        <input type="submit" value="go"/>
      </form>
    </div>
  );
}

export default SearchBar;