import React, { Component } from 'react';
import history from 'history';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import EditSong from './components/EditSong';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      songs: {},
      nowPlaying: '',
    };

    this.getSongs = this.getSongs.bind(this);
    this.getRonSwansonQuote = this.getRonSwansonQuote.bind(this);
    this.setSongState = this.setSongState.bind(this);
    this.setEditSongState = this.setEditSongState.bind(this);
    this.setEditFalse = this.setEditFalse.bind(this);
    this.setCurrentSong = this.setCurrentSong.bind(this);
    this.removeCurrentSong = this.removeCurrentSong.bind(this);
    this.box1True = this.box1True.bind(this);
    this.box2True = this.box2True.bind(this);
    this.box3True = this.box3True.bind(this);
    this.box4True = this.box4True.bind(this);
    this.box5True = this.box5True.bind(this);
    this.box6True = this.box6True.bind(this);
    this.box7True = this.box7True.bind(this);
    this.box8True = this.box8True.bind(this);
    this.box1False = this.box1False.bind(this);
    this.box2False = this.box2False.bind(this);
    this.box3False = this.box3False.bind(this);
    this.box4False = this.box4False.bind(this);
    this.box5False = this.box5False.bind(this);
    this.box6False = this.box6False.bind(this);
    this.box7False = this.box7False.bind(this);
    this.box8False = this.box8False.bind(this);
    this.toggleAudioStateTrue = this.toggleAudioStateTrue.bind(this);
    this.toggleAudioStateFalse = this.toggleAudioStateFalse.bind(this);
  }

//get's the song states from firebase and calls the Ron Swanson API
  componentDidMount() {
    this.getSongs();
    this.getRonSwansonQuote();
  }

//Ron swanson API, returns an array with one string.
  getRonSwansonQuote(){
    axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          ronSwanson: response.data[0]
        })
      }).catch((error) => {
        console.log(error)
      });
  }

//gets the song states from firebase
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
    }).catch((error) =>{
      console.log(error);
    });
  }

//sets the current state of current song from Home.js, when element is clicked.
  setCurrentSong(key){
    this.setState({
      currentSong: key,
    })
  }

//removes the current song state from Home.js
  removeCurrentSong() {
    this.setState({
      currentSong: ""
    })
  }

//sets the song state with title, and box booleans.
  setSongState(songs) {
    this.setState({
      songs: songs
    })
  }

//If edit is true, an input box will render. This is to edit a title
  setEditSongState(songKey) {
    this.setState({
      currentEditSong: songKey,
      edit: true,
    })
  }

//turns off the edit option
  setEditFalse() {
    this.setState({
      currentEditSong: "",
      edit: false,
    })
  }

//box(int)True and boxFalse set the state of boxes that have been clicked. When editing a song,
//a clicked box from EditSong.js sets the state to true/false, and calls these functions to do so.
//the id is needed to patch the new information to the correct key in firebase
  box1True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: true,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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
    box1False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: false,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box2True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title)
    const newTitle = {
      title: title,
      box1: b1,
      box2: true,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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

    box2False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: false,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box3True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: true,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box3False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: false,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box4True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: true,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box4False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: false,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box5True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: true,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box5False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: false,
      box6: b6,
      box7: b7,
      box8: b8,
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

  box6True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: true,
      box7: b7,
      box8: b8,
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

  box6False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: false,
      box7: b7,
      box8: b8,
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

  box7True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: true,
      box8: b8,
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

  box7False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: false,
      box8: b8,
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

  box8True(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: true,
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

  box8False(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(id, title, b1, b2, b3, b4, b5, b6, b7, b8)
    const newTitle = {
      title: title,
      box1: b1,
      box2: b2,
      box3: b3,
      box4: b4,
      box5: b5,
      box6: b6,
      box7: b7,
      box8: false,
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

  toggleAudioStateTrue(){
    this.setState({
      nowPlaying: true,
    });
  }

  toggleAudioStateFalse(){
    this.setState({
      nowPlaying: false,
    });
  }

  render() {
    return (
        <div className="App">
          <Header ronSwanson={this.state.ronSwanson} />
          <div className="main">
          {!this.state.currentSong ?
              <Home
                songs={this.state.songs}
                getSongs={this.getSongs}
                setSongState={this.setSongState}
                setEditSongState={this.setEditSongState}
                currentEditSong={this.state.currentEditSong}
                setEditFalse={this.setEditFalse}
                currentSong={this.state.currentSong}
                setCurrentSong={this.setCurrentSong}
                removeCurrentSong={this.removeCurrentSong}
              />
              :
              <EditSong
                songs={this.state.songs}
                currentSong={this.state.currentSong}
                removeCurrentSong={this.removeCurrentSong}
                box1True={this.box1True}
                box2True={this.box2True}
                box3True={this.box3True}
                box4True={this.box4True}
                box5True={this.box5True}
                box6True={this.box6True}
                box7True={this.box7True}
                box8True={this.box8True}
                box1False={this.box1False}
                box2False={this.box2False}
                box3False={this.box3False}
                box4False={this.box4False}
                box5False={this.box5False}
                box6False={this.box6False}
                box7False={this.box7False}
                box8False={this.box8False}
                toggleAudioStateTrue={this.toggleAudioStateTrue}
                toggleAudioStateFalse={this.toggleAudioStateFalse}
                nowPlaying={this.state.nowPlaying}
              />}
          </div>
        </div>
    );
  }
}

export default App;
