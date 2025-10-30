import NavigationBar from '../components/NavigationBar';

export default function Extension() {
    return (
        <>
            <NavigationBar/>
            <section className="about-section-container">
                <div className="about-content-wrapper">
                    <div className="about-text-content">
                        <h1 className="about-heading">
                            See the extension in action:
                        </h1>
                        <p className="about-paragraph">
                            Placeholder text placeholder text placeholder text.
                        </p>
                        <button className="about-button">
                            This will be a link
                        </button>
                    </div>
                    <div className="about-image-container">
                        <img
                            src={`/images/oops.jpg`}
                            className="about-image"
                        ></img>
                    </div>
                </div>
            </section>
        </>
    );
}