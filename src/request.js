const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchTopComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchTopRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchTopDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
  };
  
  export default requests;