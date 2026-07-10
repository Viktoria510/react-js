function layout({title,description}){
    return(
        <div

        style = {{
            border:"2px solid #333",
            borderRadius:"8px",
            padding:"20px",
            margin:"20px",
        }}>
            <h2>Title:{title}</h2>
            <h2>Description: {description}</h2>
        </div>
    );
}
export default layout;