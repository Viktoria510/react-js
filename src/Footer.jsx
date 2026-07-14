function Footer(props) {
    return (
        <footer
            style={{
                background: "#b9dea9",
                color: "white",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <p>{props.text}</p>
        </footer>
    );
}

export default Footer;