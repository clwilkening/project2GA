import React, {Component} from 'react';
import simonHarp1 from '../media/simonHarp1.mp3';
//import axios from 'axios';

class EditSong extends Component {
  constructor(props) {
    super(props);
    this.toggleBox1 = this.toggleBox1.bind(this)
    this.toggleBox2 = this.toggleBox2.bind(this)
    this.toggleBox3 = this.toggleBox3.bind(this)
    this.renderSelectedSong = this.renderSelectedSong.bind(this)
    this.playAudio = this.playAudio.bind(this)
  }

  //getSongTitle(){
  //  Object.keys(this.props.title)
  //    .map((key) => <h4 key={key}>{key.title} />)
  //  })

  //I need to object.keys on the clicked song name in order to render the divs with an appropriate key.

  playAudio() {
    const audio = this.refs.audio1
  if(this.props.songs[this.props.currentSong].box1 === true) {
    audio.currentTime = 0;
    audio.play();
    }
  }

  renderSelectedSong(){
    let content;
    if(this.props.currentSong) {
      let currentSong = this.props.songs[this.props.currentSong];
      console.log(currentSong.box2)
      content = (
        <div>
        <div>
        {currentSong.title}
        </div>
        <div className="box-container">
          <div
            className="box box-1"
            onClick={() => this.toggleBox1(this.props.currentSong, currentSong.title)}
          ><audio ref="audio1" src={simonHarp1} preload="auto"></audio>
            I am a box
          </div>
          <div
            className="box box-2"
            onClick={() => this.toggleBox2(this.props.currentSong, currentSong.title, currentSong.box1, currentSong.box2, currentSong.box3)}
          >
            I am also a box
          </div>
          <div
            className="box box-3"
            onClick={() => this.toggleBox3(this.props.currentSong, currentSong.title, currentSong.box1, currentSong.box2, currentSong.box3)}
          >
            I am the best box
          </div>
          <button onClick={() => this.playAudio()}>
          PLAY
          </button>
        </div>
      </div>
      )
    }
    return content;
  }

  toggleBox1(id, title, b1, b2, b3){
    console.log(this.props.songs.box1)
    if(this.props.songs[id].box1 === false) {
      //this.props.toggleGetFalse1();
      this.props.box1True(id, title, b1, b2, b3);
    } else if(this.props.songs[id].box1 === true) {
      this.props.box1False(id, title, b1, b2, b3);
      // this.props.toggleGetTrue1();
    };
  }
  toggleBox2(id, title, b1, b2, b3){
    console.log(this.props.songs.box2)
    if(this.props.songs[id].box2 === false) {
      this.props.box2True(id, title, b1, b2, b3);
    } else if(this.props.songs[id].box2 === true) {
      this.props.box2False(id, title, b1, b2, b3);
    };
  }
  toggleBox3(id, title, b1, b2, b3){
    console.log(this.props.songs.box3)
    if(this.props.songs[id].box3 === false) {
      this.props.box3True(id, title, b1, b2, b3);
    } else if(this.props.songs[id].box3 === true) {
      this.props.box3False(id, title, b1, b2, b3);
    };
  }

  render() {
    //console.log(this.props.song)
    return(
      <div>
        {this.renderSelectedSong()}
      </div>
    )
  };
}

export default EditSong;
