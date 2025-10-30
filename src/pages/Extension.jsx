import NavigationBar from '../components/NavigationBar';

export default function Extension() {
    return (
        <>
            <NavigationBar/>
            <section className="about-section-container">
                <div className="about-content-wrapper">
                    <div className="about-text-content">
                        <h1 className="about-heading">
                        🌱 Get ready for Logic Lab: The Extension.
                        </h1>
                        <p className="about-paragraph">
                        Get a tool on the path towards media literacy. The Logic Lab Chrome extension scans the webpages you read to highlight and explain common logical fallacies. Whether you're dissecting a news article, evaluating a social media debate, or fact-checking academic material, our tool provides real-time, objective analysis right in your browser. 
                        </p>
                        
                    </div>
                </div>
                <div className="about-image-container">
                        <img
                            src={`/images/extension.png`}
                            className="about-image"
                        ></img>
                    </div>
                    <button className="about-button">
                            SEE THE CODE
                        </button>
                    <a href="https://github.com/joysudo/logic-lab"> <button className="about-button">
                            LOOK AT THE WEBSITE ON GITHUB
                        </button> </a>
            </section>
        </>
    );
}