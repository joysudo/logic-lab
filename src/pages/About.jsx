export default function About() {
    return (
        <>
            <div className="top-navigation">
                <h1 className="placeholder-for-logo">Logic Lab</h1>
                <div className="top-navigation-links">
                    <a href={`/`}>Learn</a>
                    <a href={`/deck`}>Deck</a>
                    <a href={`/about`}>About</a>
                </div>
            </div>
            <section class="about-section-container">
                <div class="about-content-wrapper">
                    <div class="about-text-content">
                        <h1 class="about-heading">
                            Hi. This is Joy making this.
                        </h1>
                        <p class="about-paragraph">
                            I am so sick of staring at this about page. It's so ugly. I can't have everything be filled with content, so I'm at least putting a placeholder here. Other people are not reading this. Do you want to know a fun fact about paper? It's actually tearible at jokes. It was also invented in ancient China. That's pretty neat, right? Okay, I'm giving up typing now.
                        </p>
                        <button class="about-button">
                            Learn More
                        </button>
                    </div>
                    <div class="about-image-container">
                        <img
                            src={`/images/oops.jpg`}
                            class="about-image"
                        ></img>
                    </div>
                </div>
            </section>
        </>
    );
}