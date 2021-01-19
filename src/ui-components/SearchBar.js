
function SearchBar() {
  return(
    <div className="search-bar">
      <h1>Find a Recipe</h1>
      <form className="search-bar__form">
        <input type="text" placeholder="Search something delicious"/>
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  );
}

export default SearchBar;