import NavigationBar from "../components/NavigationBar";

export default function Games() {
  return (
    <>
      <NavigationBar/>  
      <div className="games-page">
        <div className="games-card">
        <img className="games-image" src={`/images/matching-icon.png`}></img>
            <h1 className="games-label">Matching</h1>
            <a className="games-button" href={`/matching`}>Play</a>
        </div>
        <div className="games-card">
            <img className="games-image" src={`/images/matching-icon.png`}></img>
            <h1 className="games-label">Sort</h1>
            <a className="games-button" href={`/sort`}>Play</a>
        </div>
      </div>
    </>
  );
}