function Header(props) {
  return (
    <header
      style={{
        background: "#e6c1e4",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>{props.title}</h1>

      <nav>
        <a href="#" style={{ color: "white", marginRight: "15px" }}>
          {props.nav1}
        </a>

        <a href="#" style={{ color: "white", marginRight: "15px" }}>
          {props.nav2}
        </a>

        <a href="#" style={{ color: "white", marginRight: "15px" }}>
          {props.nav3}
        </a>

        <a href="#" style={{ color: "white" }}>
          {props.nav4}
        </a>
      </nav>
    </header>
  );
}

export default Header;