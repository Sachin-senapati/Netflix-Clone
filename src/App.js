import Row from "./Row"
import requests from "./request";
import Banner from "./Banner"
import Nav from "./Nav"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchTopActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchTopComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchTopHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchTopRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchTopDocumentaries}/>
      
    </div>
  );
}

export default App;
