import { lessonContent } from '../LessonContent.jsx';

export default function Progress() {
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
            <p>This is the Deck page.</p>
            <div className="deck-progress-border">
                <div className="deck-progress-interior" style={{width: `${(parseInt(localStorage.getItem("completedLessonIndex") || "0", 10))*100/(lessonContent.length)}%`}}></div>
            </div>
        </>
    );
}