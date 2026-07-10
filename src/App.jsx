import Layout from "./Layout"
function App(){
    return(
        <div>
            <Layout 
                title="Welcome"
                description="This is the home page."
            />

            <Layout 
                title="About us"
                description="Learn more about our company."
            />
            <Layout 
                title=" Contact"
                description="Get in touch with us."
            />
        </div>
    );
}

export default App;