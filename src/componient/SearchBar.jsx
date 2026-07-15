function SearchBar({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;