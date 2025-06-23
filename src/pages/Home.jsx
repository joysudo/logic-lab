export default function Home() {
    const lessons = [
      { id: 1, title: "Straw Man" },
      { id: 2, title: "False Dilemma" }
    ];
  
    return (
      <div>
        <h1>Logic Lab</h1>
        <div>
          {lessons.map(lesson => (
            <div key={lesson.id}>
              <a href={`/lesson/${lesson.id}`}>{lesson.title}</a>
            </div>
          ))}
        </div>
      </div>
    );
  }