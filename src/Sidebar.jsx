

function Sidebar(props) {
    return (
        <aside
            style={{
                padding: "20px",
                background: "#f1f9a5",
                
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