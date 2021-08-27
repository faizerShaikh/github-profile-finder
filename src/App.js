import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import SortButtons from "./components/layouts/SortButtons";

class App extends Component {
  state = {
    movies: [],
    movie: {},
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=fcb32737f1f5803fb38e775c77ff1d24"
    );
    console.log(res.data.results);
    this.setState({ movies: res.data.results, loading: false });
  }
  getPopuler = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=fcb32737f1f5803fb38e775c77ff1d24"
    );
    this.setState({ movies: res.data.results, loading: false });
  };
  getUpcoming = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=fcb32737f1f5803fb38e775c77ff1d24"
    );
    this.setState({ movies: res.data.results, loading: false });
  };
  getNowPlaying = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=fcb32737f1f5803fb38e775c77ff1d24"
    );
    this.setState({ movies: res.data.results, loading: false });
  };
  getSingleMovie = async (id) => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        { id } +
        "?api_key=fcb32737f1f5803fb38e775c77ff1d24"
    );
    console.log(res);
    this.setState({ movie: res.data.results, loading: false });
  };
  render() {
    return (
      <div>
        <Fragment>
          <div className='bg-red'>
            <Navbar navIcon='fas fa-film pe-2' websiteName='Which To Watch ?' />
          </div>
          <SortButtons
            getPopuler={this.getPopuler}
            getUpcomimg={this.getUpcoming}
            getNowPlaying={this.getNowPlaying}
          />
          <Users
            loading={this.state.loading}
            movies={this.state.movies}
            getSingleMovie={this.getSingleMovie(id)}
          />
        </Fragment>
      </div>
    );
  }
}

export default App;
