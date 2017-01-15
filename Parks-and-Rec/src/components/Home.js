import React, {Component} from 'react';
import axios from 'axios';

const propTypes = {
  getSongs: React.PropTypes.func.isRequired,
  songs: React.PropTypes.object.isRequired,
  setEditSongState: React.PropTypes.func.isRequired,
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleNewSongInput = this.handleNewSongInput.bind(this);
    this.createSongTitle = this.createSongTitle.bind(this);
    this.renderSongs = this.renderSongs.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
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
    let editSongElements = [];

    for(let key in this.props.songs) {
      let song = this.props.songs[key]

      songElements.push(
        <div>
          <div key={key}>
            <h4>{song.title}</h4>
            <button onClick={() => this.handleClickEdit(key) }>Edit Name</button>
          </div>
        <button>Edit Song</button>
        <p onClick={ () => { this.deleteSong(key)}}>&times;</p>
        </div>
      );

      editSongElements.push(
        <div>
          <div key={key}>
            <h4>{song.title}</h4>
            <button>Edit Name</button>
          </div>
        <button>Edit Song</button>
        <p onClick={ () => { this.deleteSong(key)}}>&times;</p>
        </div>
      );
    };
    return(
      <div>
        {songElements}
      </div>
    );
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
  }
  editSongName(songKey) {

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
        <button onClick={() => {this.createSongTitle(this.refs.input.value)}}>Create!</button>
        {this.renderSongs()}
      </div>
    )
  }
}

Home.propTypes = propTypes;

export default Home;
