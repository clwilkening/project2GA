import React, {Component} from 'react';
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

//sets initial state of a song when it is created and posts to firebase
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

//occurs when new song is created
  handleNewSongInput(e){
    if (e.charCode ===13) {
      this.createSongTitle(e.target.value);
      e.target.value="";
    };
  }

//method to render all of the songs from firebase. for every key, do this function.
  renderSongs() {
    let songElements = [];

    for(let key in this.props.songs) {
      let song = this.props.songs[key]

      songElements.push(
        <div className="song-name-container col-sm-12" key={key}>
          <div className="row col-sm-12">
            <h4 className="col-sm-12 song-title">{song.title}</h4>
          </div>
          <div className="row">
          <button className="rename col-sm-4" onClick={ () =>
            this.handleClickEdit(key)}>Edit Name</button>
            <button className="buttons col-sm-4" key={song.title} onClick={ () => this.props.setCurrentSong(key) }><span className="glyphicon glyphicon-music"></span></button>
          <button className="buttons col-sm-4" onClick={ () => { this.deleteSong(key)} }><span className="glyphicon glyphicon-trash"></span></button>
          </div>
        </div>
        )
      //reverses the order of the array.
        songElements.reverse();
      };
    return(
      <div>
        {songElements}
      </div>
    );
  }

//checks to see if the Edit Name button has been clicked. If it has, boolean will be true, and
//runs renderSongs. If false, Input and button are shown.
  renderEditOrTitle(key) {
    let content;

    if (!this.props.currentEditSong) {
      if(!this.props.edit) {
        content = (
          <div className="container">
          <div className="col-sm-6 col-sm-offset-3">
            {this.renderSongs()}
          </div>
          </div>
        );
      };
    } else {
      content = (
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 edit-title" key={key}>
            <input
              type="text"
              defaultValue={this.props.songs[this.props.currentEditSong].title}
              ref="editSongInput"
              onKeyPress={(e) =>{this.handleClickEditEnter(e)}}
            />
            <button
              className="save-title"
              onClick={() => {this.saveSongName()}}
            >
              Save Name
            </button>
          </div>
        </div>
      );
    };
    return content;
  }

//completely removes a song from database
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
    });
  }

//handle event for when editing a title
  handleClickEditEnter(e){
    if (e.charCode ===13){
      this.saveSongName();
    };
  };

//click event for editing a title
  handleClickEdit(songKey) {
    this.props.setEditSongState(songKey)
  }

//saves then new name of a song and patches it to firebase
  saveSongName() {
    let key = this.props.currentEditSong;
    //console.log(key)
    let currentSong = this.props.songs[key];
    //console.log(currentSong)
    currentSong.title = this.refs.editSongInput.value;
    //console.log(currentSong.title)

    axios({
      url: `/songs/${key}.json`,
      baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
      method: "PATCH",
      data: currentSong,
    }).then((response) => {
      let songs = this.props.songs;
      songs[key] = currentSong;
      //change state to false
      this.props.setEditFalse();
      //set the new state
      this.props.setSongState(songs);
      //re render the song list
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
            className="col-sm-2 col-sm-offset-4 title-input"
            placeholder="Name your song!"
            onKeyPress={this.handleNewSongInput}
            ref="input"
        />
          <button
            className="col-sm-2 create-title"
            onClick={() =>{this.createSongTitle(this.refs.input.value)}}
          >
            Create!
          </button>
        </div>
          {this.renderEditOrTitle()}
      </div>
    );
  };
}

Home.propTypes = propTypes;

export default Home;





