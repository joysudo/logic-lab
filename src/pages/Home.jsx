export default function Home() {
    const lessons = [
      { id: 1, title: "Straw Man" },
      { id: 2, title: "False Dilemma" },
      { id: 2, title: "Red Herring" },
      { id: 3, title: "Ad Hominem" },
      { id: 4, title: "Slippery Slope" },
      { id: 5, title: "Appeal to Authority" },
      { id: 6, title: "Hasty Generalization" },
      { id: 7, title: "Post Hoc" },
      { id: 8, title: "Circular Reasoning" }
    ];
  
  return (
    <div>
      <h1 className="placeholder-for-logo">Logic Lab</h1>
      <div className="home-grid">
        <div className="lessons-column"> 
          {/* iterates through lessons, turning to jsx table of contents entries*/}
          {lessons.map(lesson => ( 
            <div key={lesson.id} className="lesson-card">
              <a href={`/lesson/${lesson.id}`} className="lesson-card-title">{lesson.title}</a>
            </div>
          ))}
        </div>
        <div className="topics-column"> 
          {/* edit this column later, needs to be responsive */}
          <div className="topics-card">
            <h2 className="topics-card-title">Intro to Fallacies</h2>
            <p className="topics-card-body">Learn the basics of logical reasoning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}