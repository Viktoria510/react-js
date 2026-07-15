function SearchBar({ search, setSearch }) {
  const styles = {
    searchContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "0 20px"
    },
    searchForm: {
      position: "relative",
      width: "100%",
      maxWidth: "480px",
      display: "flex",
      alignItems: "center"
    },
    input: {
      width: "100%",
      padding: "16px 65px 16px 24px",
      fontSize: "1rem",
      color: "#4a4a4a",
      border: "2px solid rgba(255, 105, 180, 0.3)",
      borderRadius: "30px",
      outline: "none",
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 24px rgba(255, 105, 180, 0.06)",
      fontWeight: "500",
      boxSizing: "border-box"
    },
    button: {
      position: "absolute",
      right: "6px",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      backgroundColor: "#ff69b4",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: "0 4px 10px rgba(255, 105, 180, 0.3)"
    },
    svg: {
      width: "18px",
      height: "18px",
      fill: "none",
      stroke: "#ffffff",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  };

  return (
    <div style={styles.searchContainer}>
      <form 
        style={styles.searchForm} 
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
          onFocus={(e) => {
            e.target.style.borderColor = "#ff69b4";
            e.target.style.boxShadow = "0 10px 30px rgba(255, 105, 180, 0.2)";
            e.target.style.backgroundColor = "#ffffff";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255, 105, 180, 0.3)";
            e.target.style.boxShadow = "0 8px 24px rgba(255, 105, 180, 0.06)";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
          }}
        />
        <button 
          type="submit" 
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#db7093";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ff69b4";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg style={styles.svg} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
