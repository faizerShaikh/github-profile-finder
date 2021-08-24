import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div>
        <Fragment>
          <div className='bg-red'>
            <Navbar />
          </div>
          <Users loading={this.state.loading} users={this.state.users} />
        </Fragment>
      </div>
    );
  }
}

export default App;
