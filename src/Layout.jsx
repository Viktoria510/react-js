function layout(props){
    return(
        <div

        style = {{
            border:"2px solid #333",
            borderRadius:"8px",
            padding:"20px",
            margin:"20px",
        }}>
            <h2>Title:{props.title}</h2>
            <h2>Description: {props.description}</h2>
        </div>
    );
}
export default layout;