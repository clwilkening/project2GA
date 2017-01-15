import React, {Component} from 'react';
import axios from 'axios';

const propTypes = {
  getSongs: React.PropTypes.func.isRequired,
  songs: React.PropTypes.object.isRequired,
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
    let newTitle = { title: titleText, box: false }

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
        <div>
          <div key={key}>
            <h4>{song.title}</h4>
            <button onClick={ () =>
              this.handleClickEdit(key) }
              //this.renderEditOrTitle(key) }
              >Edit Name</button>
          </div>
        <button>Edit Song</button>
        <p onClick={ () => { this.deleteSong(key)} }>&times;</p>
        </div>
      );
      songElements.reverse();
      // editSongElements.push(
      //   <div>
      //     <div key={key}>
      //       <input type="text" defaultValue={song.title} ref="editSongInput"></input>
      //       <button>Save Name</button>
      //     </div>
      //   </div>
      //);
    };
    return(
      <div>
        {songElements}
      </div>
    );
  }

  renderEditOrTitle(key) {
    //this.props.setEditSongState(key)
    //this.handleClickEdit(key);
    //this.setState({ currentEditSong: key})
    //if(this.state.currentEditSong === key) {
    let content;

    if (!this.props.currentEditSong) {
    let currentSong = this.props.songs[this.props.currentEditSong];
      if(!this.props.edit) {
        content = (
          <div>
            {this.renderSongs()}
          </div>
        );
      }
    } else {
      content = (
        <div>
          <div key={key}>
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
      // return(
      //   <div>
      //     <div key={key}>
      //       <input type="text" defaultValue={this.props.songs[key].title} ref="editSongInput"></input>
      //       <button>Save Name</button>
      //     </div>
      //   </div>
      // )
      // console.log(key);
    //}
  }

  deleteSong(songKey) {
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
      <input
          className="title-input"
          placeholder="Name your song!"
          onKeyPress={this.handleNewSongInput}
          ref="input"
        />
        <button onClick={() =>
          {this.createSongTitle(this.refs.input.value)}}
        >
          Create!
        </button>
        {this.renderEditOrTitle()}
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;







