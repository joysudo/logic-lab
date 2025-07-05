export default function About() {
    return (
        <>
            <div className="top-navigation">
                <h1 className="placeholder-for-logo">Logic Lab</h1>
                <div className="top-navigation-links">
                    <a href={`/`}>Learn</a>
                    <a href={`/progress`}>Progress</a>
                    <a href={`/about`}>About</a>
                </div>
            </div>
            <h1>This is the About page.</h1>
        </>
    );
}