import React, {Component} from 'react';
//import { Link } from 'react-router';
import axios from 'axios';

const propTypes = {
  getSongs: React.PropTypes.func.isRequired,
  //songs: React.PropTypes.object.isRequired,
  setEditSongState: React.PropTypes.func.isRequired,
  //currentEditSong: React.PropTypes.string.isRequired,
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleNewSongInput = this.handleNewSongInput.bind(this);
    this.createSongTitle = this.createSongTitle.bind(this);
    this.renderSongs = this.renderSongs.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.renderEditOrTitle = this.renderEditOrTitle.bind(this);
  }

  createSongTitle(titleText) {
    let newTitle = {
      title: titleText,
      box1: false,
      box2: false,
      box3: false,
      box4: false,
      box5: false,
      box6: false,
      box7: false,
      box8: false,
    }

    axios({
      url: '/songs.json',
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "POST",
      data: newTitle
    }).then((response) => {
      console.log(response)
      let songs = {...this.props.songs};
      console.log(songs);
      let songTitleId = response.data.name
      songs[songTitleId] = newTitle;
      this.props.setSongState(songs);
      //this.setState({ songs, });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleNewSongInput(e){
    if (e.charCode ===13) {
      this.createSongTitle(e.target.value);
      e.target.value="";
    }
  }

  renderSongs() {
    let songElements = [];

    for(let key in this.props.songs) {
      let song = this.props.songs[key]

      songElements.push(
        <div className="song-name-container col-lg-12" key={key}>
          <div className="row">
            <h4 className="col-lg-12 song-title">{song.title}</h4>
          </div>
          <div className="row">
          <button className="rename col-lg-4" onClick={ () =>
            this.handleClickEdit(key) }
            //this.renderEditOrTitle(key) }
          >
            Edit Name
          </button>
          <button className="buttons col-lg-4" key={song.title} onClick={ () => this.props.setCurrentSong(key) }
          >
            Go!
          </button>
          <button className="buttons col-lg-4" onClick={ () => { this.deleteSong(key)} }>&times;</button>
          </div>
        </div>
        );
        songElements.reverse();
      };
    return(
      <div>
        {songElements}
      </div>
    );
  }

  renderEditOrTitle(key) {
    let content;

    if (!this.props.currentEditSong) {
    //let currentSong = this.props.songs[this.props.currentEditSong];
      if(!this.props.edit) {
        content = (
          <div className="row">
          <div className="col-sm-4">
            {this.renderSongs()}
          </div>
          </div>
        );
      }
    } else {
      content = (
        <div className="row">
          <div className="col-sm-4" key={key}>
            <input type="text" defaultValue={this.props.songs[this.props.currentEditSong].title} ref="editSongInput" />
            <button
              onClick={() => {this.saveSongName()}}
            >
              Save Name
            </button>
          </div>
        </div>
      )
    }
    return content;
  }

  deleteSong(songKey) {
    this.props.removeCurrentSong();
    axios({
      url: `/songs/${songKey}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "DELETE"
    }).then((response) => {
      let songs = {...this.props.songs};
      delete songs[songKey];
      this.props.setSongState(songs);
      // this.setState({ songs, });
    }).catch((error) => {
      console.log(error);
    })
  }

  handleClickEdit(songKey) {
    this.props.setEditSongState(songKey)
    //return songKey;
  }

  saveSongName() {
    let key = this.props.currentEditSong;
    console.log(key)
    let currentSong = this.props.songs[key];
    console.log(currentSong)
    currentSong.title = this.refs.editSongInput.value;
    console.log(currentSong.title)

    axios({
      url: `/songs/${key}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: currentSong,
    }).then((response) => {
      let songs = this.props.songs;
      songs[key] = currentSong;
      this.props.setEditFalse();
      this.props.setSongState(songs);
      //this.props.getSongs();
      this.renderEditOrTitle();
    }).catch((error) => {
      console.log(error);
    });
  }

  render(){
    return(
      <div>
      <div className="row">
      <input
          className="col-sm-4 title-input"
          placeholder="Name your song!"
          onKeyPress={this.handleNewSongInput}
          ref="input"
        />
        <button
          className="col-sm-4 create-title"
          onClick={() =>{this.createSongTitle(this.refs.input.value)}}
        >
          Create!
        </button>
        <div className="col-sm-4">
        </div>
      </div>
      <div className="row">
        {this.renderEditOrTitle()}
      </div>
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;







