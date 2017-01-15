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
      songs: {}
    };

    this.getSongs = this.getSongs.bind(this);
    this.setSongState = this.setSongState.bind(this);
    this.setEditSongState = this.setEditSongState.bind(this);
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
      currentSong: songKey,
    })
  }

  // createSongTitle(titleText) {
  //   let newTitle = { title: titleText, box: false }

  //   axios({
  //     url: '/songs.json',
  //     baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
  //     method: "POST",
  //     data: newTitle
  //   }).then((response) => {
  //     console.log(response)
  //     let songs = {...this.state.songs};
  //     console.log(songs);
  //     let songTitleId = response.data.name
  //     songs[songTitleId] = newTitle;
  //     this.setState({ songs, });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  // handleNewSongInput(e){
  //   if (e.charCode ===13) {
  //     this.createSongTitle(e.target.value);
  //     e.target.value="";
  //   }
  // }

  // renderSongs() {
  //   let songElements = [];

  //   for(let key in this.state.songs) {
  //     let song = this.state.songs[key]

  //     songElements.push(
  //       <div>
  //       <h4 key={key}>{song.title}</h4>
  //       <button>Edit Name</button>
  //       <button>Edit Song</button>
  //       <p onClick={ () => { this.deleteSong(key)}}>&times;</p>
  //       </div>
  //     );
  //   };
  //   return(
  //     <div>
  //       {songElements}
  //     </div>
  //   );
  //   // const songs = this.state.songs;
  //   // let songList = Object.keys(songs).reverse()
  //   //   .map((key) => <h4 key={key}>{songs[key].title}</h4>)
  //   // return songList;
  //   // console.log(songList)
  //   //I tried the above way and could not return more than one element. Tried with braces and wrapping in div.
  // }

  // deleteSong(songKey) {
  //   axios({
  //     url: `/songs/${songKey}.json`,
  //     baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
  //     method: "DELETE"
  //   }).then((response) => {
  //     let songs = {...this.state.songs};
  //     delete songs[songKey];
  //     this.setState({ songs, });
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

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
              />}
          />
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

        // <button onClick={() => {this.createSongTitle(this.refs.input.value)}}>Create!</button>
        //{this.renderSongs()}

        // <input
        //   className="title-input"
        //   placeholder="Name your song!"
        //   onKeyPress={this.handleNewSongInput}
        //   ref="input"
        // /><button onClick={() => {this.createSongTitle(this.refs.input.value)}}>Create!</button>
        // {this.renderSongs()}/>

export default App;


