import { useState } from "react";
import movies from "./movies";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

function App() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    appContainer: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "60px 20px",
      fontFamily: "'Quicksand', 'Segoe UI', sans-serif",
      background: "linear-gradient(135deg, #fff0f5 0%, #ffe4e1 100%)",
      minHeight: "100vh",
      boxSizing: "border-box"
    },
    appHeader: {
      textAlign: "center",
      marginBottom: "50px"
    },
    title: {
      color: "#c71585",
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "10px",
      letterSpacing: "-1px"
    },
    subtitle: {
      color: "#db7093",
      fontSize: "1.1rem",
      marginBottom: "30px",
      fontWeight: "500"
    },
    moviesRow: {
      display: "flex",
      flexDirection: "row",
      gap: "25px",
      overflowX: "auto",
      padding: "20px 5px 30px 5px",
      scrollbarWidth: "none", 
      WebkitOverflowScrolling: "touch" 
    },
    noResults: {
      width: "100%",
      textAlign: "center",
      fontSize: "1.3rem",
      color: "#db7093",
      fontWeight: "600",
      marginTop: "60px"
    }
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.appHeader}>
        <h1 style={styles.title}>Victoria Movie</h1>
        <p style={styles.subtitle}>Movie collection</p>
        <SearchBar search={search} setSearch={setSearch} />
      </header>

      <main style={styles.moviesRow} className="hide-scrollbar">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p style={styles.noResults}>No matches found in this pink universe</p>
        )}
      </main>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default App;
