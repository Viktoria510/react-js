function MovieCard({ movie }) {
  const styles = {
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(219, 112, 147, 0.12)",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      display: "flex",
      flexDirection: "column",
      minWidth: "240px",
      maxWidth: "240px",
      flexShrink: 0,
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
      cursor: "pointer"
    },
    imageContainer: {
      width: "100%",
      height: "340px",
      overflow: "hidden",
      position: "relative"
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease"
    },
    infoContainer: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      flexGrow: 1,
      justifyContent: "space-between"
    },
    title: {
      margin: 0,
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#4a4a4a",
      lineHeight: "1.2"
    },
    metaRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    genreBadge: {
      backgroundColor: "#ffe4e1",
      color: "#db7093",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    year: {
      margin: 0,
      fontSize: "0.85rem",
      fontWeight: "700",
      color: "#ff69b4"
    }
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(219, 112, 147, 0.25)";
        e.currentTarget.querySelector("img").style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(219, 112, 147, 0.12)";
        e.currentTarget.querySelector("img").style.transform = "scale(1)";
      }}
    >
      <div style={styles.imageContainer}>
        <img src={movie.image} alt={movie.title} style={styles.image} />
      </div>
      <div style={styles.infoContainer}>
        <h3 style={styles.title}>{movie.title}</h3>
        <div style={styles.metaRow}>
          <span style={styles.genreBadge}>{movie.genre}</span>
          <p style={styles.year}>{movie.year}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
