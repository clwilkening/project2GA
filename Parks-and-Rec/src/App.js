import React, { Component } from 'react';
import {BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
//import {Link} from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //currentEditSong: null,
      songs: {}
    };

    this.getSongs = this.getSongs.bind(this);
    this.setSongState = this.setSongState.bind(this);
    this.setEditSongState = this.setEditSongState.bind(this);
    this.setEditFalse = this.setEditFalse.bind(this);
    // this.handleNewSongInput = this.handleNewSongInput.bind(this);
    // this.createSongTitle = this.createSongTitle.bind(this);
    // this.renderSongs = this.renderSongs.bind(this);
    // this.deleteSong = this.deleteSong.bind(this);

  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    console.log(this.state)
    axios({
      url: '/songs.json',
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "GET",
    }).then((response) => {
      //console.log(this.state.songs)
      //console.log(response)
      this.setState({
        songs: response.data
      });
     // this.renderSongs(); <-- didn't need it.
    }).catch((error) =>{
      console.log(error);
    });
  }

  setSongState(songs) {
    this.setState({
      songs: songs
    })
  }

  setEditSongState(songKey) {
    this.setState({
      currentEditSong: songKey,
      edit: true,
    })
  }

  setEditFalse() {
    this.setState({
      currentEditSong: "",
      edit: false,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="main">
          <Match
            exactly pattern="/"
            component={ () =>
              <Home
              songs={this.state.songs}
              getSongs={this.getSongs}
              setSongState={this.setSongState}
              setEditSongState={this.setEditSongState}
              currentEditSong={this.state.currentEditSong}
              setEditFalse={this.setEditFalse}
              />}
          />
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


