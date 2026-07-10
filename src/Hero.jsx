function Hero(props) {
  return (
    <section
      style={{
        padding: "30px",
        background: "#f4f4f4",
      }}
    >
      <h2>{props.headline}</h2>

      <p>{props.description}</p>
    </section>
  );
}

export default Hero;