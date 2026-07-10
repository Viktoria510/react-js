

function Sidebar(props) {
    return (
        <aside
            style={{
                padding: "20px",
                background: "#dee3ad",
                margin: "20px",
            }}
        >
            <h3>{props.title}</h3>

            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
            </ul>
        </aside>
    );
}

export default Sidebar;