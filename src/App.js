import "./app.scss";
import SingleNews from "./components/SingleNews";
import news from "./newsData";

function App() {
  return (
    <div className="app">
      <h1>NEWZY</h1>
      <div className="newsContainer">
        {news.map((single) => (
          <SingleNews
            key={single.id}
            heading={single.heading}
            img={single.img}
            paragraphs={single.paragraphs}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
