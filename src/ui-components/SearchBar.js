
function SearchBar() {
  return(
    <div className="search">
      <h3>Find a Recipe</h3>
      <form className="search__form">
        <input type="text" placeholder="Search something delicious"/>
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  );
}

export default SearchBar;