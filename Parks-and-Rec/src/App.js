import React, { Component } from 'react';
//import {BrowserRouter, Match } from 'react-router';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import EditSong from './components/EditSong';
//import {Link} from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //currentEditSong: null,
      songs: {},
    };

    this.getSongs = this.getSongs.bind(this);
    this.setSongState = this.setSongState.bind(this);
    this.setEditSongState = this.setEditSongState.bind(this);
    this.setEditFalse = this.setEditFalse.bind(this);
    this.setCurrentSong = this.setCurrentSong.bind(this);
    this.box1True = this.box1True.bind(this);
    this.box2True = this.box2True.bind(this);
    this.box3True = this.box3True.bind(this);
    this.box1False = this.box1False.bind(this);
    this.box2False = this.box2False.bind(this);
    this.box3False = this.box3False.bind(this);
    this.getRonSwansonQuote = this.getRonSwansonQuote.bind(this);
    // this.handleNewSongInput = this.handleNewSongInput.bind(this);
    // this.createSongTitle = this.createSongTitle.bind(this);
    // this.renderSongs = this.renderSongs.bind(this);
    // this.deleteSong = this.deleteSong.bind(this);

  }

  componentDidMount() {
    this.getSongs();
    this.getRonSwansonQuote();
  }

  getRonSwansonQuote(){
    axios.get(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          ronSwanson: response.data[0]
        })
      }).catch((error) => {
        console.log(error)
      });
  }

  getSongs() {
    //console.log(this.state)
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

  setCurrentSong(key){
    this.setState({
      currentSong: key,
    })
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

  box1True(id, title, b1, b2, b3){
    console.log(id, title, b1, b2, b3)
    let newTitle = {
      title: title,
      box1: true,
      box2: b2,
      box3: b3,
    }
    axios({
      url: `/songs/${id}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: newTitle
    }).then((response) => {
      this.getSongs();
      //console.log(response)
      // let songs = {...this.props.songs};
      // //console.log(songs);
      // let songTitleId = response.data.name
      // songs[songTitleId] = newTitle;
      // this.setSongState(songs);
      //this.setState({ songs, });
    }).catch((error) => {
      console.log(error);
    });
  }
    box1False(id, title, b1, b2, b3){
    console.log(id, title, b1, b2, b3)
    let newTitle = {
      title: title,
      box1: false,
      box2: b2,
      box3: b3,
    }
    axios({
      url: `/songs/${id}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: newTitle
    }).then((response) => {
      this.getSongs();
    }).catch((error) => {
      console.log(error);
    });
  }

  box2True(id, title, b1, b2, b3){
    console.log(id, title)
    let newTitle = {
      title: title,
      box1: b1,
      box2: true,
      box3: b3,
    }
    axios({
      url: `/songs/${id}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: newTitle
    }).then((response) => {
      this.getSongs();
    }).catch((error) => {
      console.log(error);
    });
  }
    box2False(id, title, b1, b2, b3){
    console.log(id, title, b1, b2, b3)
    let newTitle = {
      title: title,
      box1: b1,
      box2: false,
      box3: b3,
    }
    axios({
      url: `/songs/${id}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: newTitle
    }).then((response) => {
      this.getSongs();
    }).catch((error) => {
      console.log(error);
    });
  }
  box3True(id, title, b1, b2, b3){
    console.log(id, title)
    let newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: true,
    }
    axios({
      url: `/songs/${id}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: newTitle
    }).then((response) => {
      this.getSongs();
    }).catch((error) => {
      console.log(error);
    });
  }
  box3False(id, title, b1, b2, b3){
    console.log(id, title, b1, b2, b3)
    let newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: false,
    }
    axios({
      url: `/songs/${id}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: newTitle
    }).then((response) => {
      this.getSongs();
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
        <div className="App">
          <Header ronSwanson={this.state.ronSwanson} />
          <div className="main">
              <Home
                songs={this.state.songs}
                getSongs={this.getSongs}
                setSongState={this.setSongState}
                setEditSongState={this.setEditSongState}
                currentEditSong={this.state.currentEditSong}
                setEditFalse={this.setEditFalse}
                setCurrentSong={this.setCurrentSong}
              />
              <EditSong
                songs={this.state.songs}
                currentSong={this.state.currentSong}
                box1True={this.box1True}
                box2True={this.box2True}
                box3True={this.box3True}
                box1False={this.box1False}
                box2False={this.box2False}
                box3False={this.box3False}
              />
        </div>
        </div>
    );
  }
}

export default App;


