export default function NavigationBar() {
    return(
        <div className="top-navigation">
        <h1 className="placeholder-for-logo">Logic Lab</h1>
            <div className="top-navigation-links">
                <a href={`/`}>Learn</a>
                <a href={`/deck`}>Deck</a>
                <a href={`/about`}>About</a>
            </div>
        </div>
    );
}