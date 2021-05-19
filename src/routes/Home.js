import React from "react";
import axios from "axios";
import Movie from "../components/Movies";
import Container from "@material-ui/core/Container";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <Container>
        {isLoading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <Movie movies={movies} />
        )}
      </Container>
    );
  }
}

export default Home;
