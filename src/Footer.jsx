function Footer(props) {
    return (
        <footer
            style={{
                background: "#d791c7",
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