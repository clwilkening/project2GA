import React, {Component} from 'react';
import ParksAndRecOboe from '../media/ParksAndRecOboe.mp3';
import ParksAndRecTpt from '../media/ParksAndRecTpt.mp3';
import ParksAndRecViolin from '../media/ParksAndRecViolin.mp3';
import ParksAndRecViola from '../media/ParksAndRecViola.mp3';
import ParksAndRecCello from '../media/ParksAndRecCello.mp3';
import ParksAndRecBass from '../media/ParksAndRecBass.mp3';
import ParksAndRecSnare from '../media/ParksAndRecSnare.mp3';
import ParksAndRecKit from '../media/ParksAndRecKit.mp3';
//import axios from 'axios';

class EditSong extends Component {
  constructor(props) {
    super(props);
    this.toggleBox1 = this.toggleBox1.bind(this);
    this.toggleBox2 = this.toggleBox2.bind(this);
    this.toggleBox3 = this.toggleBox3.bind(this);
    this.toggleBox4 = this.toggleBox4.bind(this);
    this.toggleBox5 = this.toggleBox5.bind(this);
    this.toggleBox6 = this.toggleBox6.bind(this);
    this.toggleBox7 = this.toggleBox7.bind(this);
    this.toggleBox8 = this.toggleBox8.bind(this);
    this.renderSelectedSong = this.renderSelectedSong.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
  }

//function to decide which sounds will play. If a box's boolean is true, the audio will play.
  playAudio() {
    const audio1 = this.refs.audio1;
    const audio2 = this.refs.audio2;
    const audio3 = this.refs.audio3;
    const audio4 = this.refs.audio4;
    const audio5 = this.refs.audio5;
    const audio6 = this.refs.audio6;
    const audio7 = this.refs.audio7;
    const audio8 = this.refs.audio8;
    this.props.toggleAudioStateTrue();

    if(this.props.songs[this.props.currentSong].box1 === true) {
      audio1.currentTime = 0;
      audio1.play();
    };

    if(this.props.songs[this.props.currentSong].box2 === true){
      audio2.currentTime=0;
      audio2.play();
    };

    if(this.props.songs[this.props.currentSong].box3 === true){
      audio3.currentTime=0;
      audio3.play();
    };

    if(this.props.songs[this.props.currentSong].box4 === true){
      audio4.currentTime=0;
      audio4.play();
    };

    if(this.props.songs[this.props.currentSong].box5 === true){
      audio5.currentTime=0;
      audio5.play();
    };

    if(this.props.songs[this.props.currentSong].box6 === true){
      audio6.currentTime=0;
      audio6.play();
    };

    if(this.props.songs[this.props.currentSong].box7 === true){
      audio7.currentTime=0;
      audio7.play();
    };

    if(this.props.songs[this.props.currentSong].box8 === true){
      audio8.currentTime=0;
      audio8.play();
    };
  }

//if nowPlaying is true, function will pause all audio and change state to false
  stopAudio(){
    const audio1 = this.refs.audio1;
    const audio2 = this.refs.audio2;
    const audio3 = this.refs.audio3;
    const audio4 = this.refs.audio4;
    const audio5 = this.refs.audio5;
    const audio6 = this.refs.audio6;
    const audio7 = this.refs.audio7;
    const audio8 = this.refs.audio8;
    if(this.props.nowPlaying === true){
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
    };
    this.props.toggleAudioStateFalse();
  }

//renders the song when Go! is clicked so that it can be edited.
  renderSelectedSong(){
    let content;
    //current song is the key of the song that was clicked
    if(this.props.currentSong) {
      const currentSong = this.props.songs[this.props.currentSong];
      const key = this.props.currentSong
      const title = currentSong.title
      //boolean values
      const  b1 = currentSong.box1;
      const  b2 = currentSong.box2;
      const  b3 = currentSong.box3;
      const  b4 = currentSong.box4;
      const  b5 = currentSong.box5;
      const  b6 = currentSong.box6;
      const  b7 = currentSong.box7;
      const  b8 = currentSong.box8;
      //console.log(currentSong)
      content = (
        //initial div has the song title, and an X for exiting.
        <div className="col-sm-6 col-sm-offset-3 selected-container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="current-song">{currentSong.title}</h3>
            </div>
            <div className="col-sm-4">
            </div>

            <div className="col-sm-2">
            <button
              className="x"
            //removes, does not delete
            //spaces are added below between each section. Melody, Accompaniment, bass, percussion.
              onClick={() => this.props.removeCurrentSong()}>&times;
            </button>
            </div>
          </div>
          <div className="box-container">
            <h4 className="description">Melody</h4>
              <div
                className={b1? "instruments col-sm-6 selected" : "instruments col-sm-6 "}
                onClick={() => this.toggleBox1(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
              >
              <audio ref="audio1" src={ParksAndRecOboe} preload="auto"></audio>
               1: Oboe
              </div>

              <div
                className={b2? "instruments col-sm-6 selected" : "instruments col-sm-6"}
                onClick={() => this.toggleBox2(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
              >
              <audio ref="audio2" src={ParksAndRecTpt} preload="auto"></audio>
                2: Trumpet
              </div>

            <h4 className="description">Accompaniment</h4>
            <div
              className={b3? "instruments col-sm-6 selected" : "instruments col-sm-6"}
              onClick={() => this.toggleBox3(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
            >
            <audio ref="audio3" src={ParksAndRecViolin} preload="auto"></audio>
              3: Violin
            </div>

            <div
              className={b4? "instruments col-sm-6 selected" : "instruments col-sm-6"}
              onClick={() => this.toggleBox4(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
            >
            <audio ref="audio4" src={ParksAndRecViola} preload="auto"></audio>
             4: Viola
          </div>

          <h4 className="description">Bass</h4>
          <div
            className={b5? "instruments col-sm-6 selected" : "instruments col-sm-6"}
            onClick={() => this.toggleBox5(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
          >
          <audio ref="audio5" src={ParksAndRecCello} preload="auto"></audio>
            5: Cello
          </div>
          <div
            className={b6? "instruments col-sm-6 selected" : "instruments col-sm-6"}
            onClick={() => this.toggleBox6(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
          >
          <audio ref="audio6" src={ParksAndRecBass} preload="auto"></audio>
            6: Bass
          </div>

          <h4 className="description">Percussion</h4>
          <div
            className={b7? "instruments col-sm-6 selected" : "instruments col-sm-6"}
            onClick={() => this.toggleBox7(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
          >
          <audio ref="audio7" src={ParksAndRecSnare} preload="auto"></audio>
            7: Snare
          </div>
          <div
            className={b8? "instruments col-sm-6 selected" : "instruments col-sm-6"}
            onClick={() => this.toggleBox8(key, title, b1, b2, b3, b4, b5, b6, b7, b8)}
          ><audio ref="audio8" src={ParksAndRecKit} preload="auto"></audio>
            8: Drums
          </div>

          <button className="col-sm-6 buttons play-pause" onClick={() => this.playAudio()}>
            <span className="glyphicon glyphicon-play"></span>PLAY
          </button>
          <button className="col-sm-6 buttons play-pause pause" onClick={() => this.stopAudio()}>
            <span className="glyphicon glyphicon-stop"></span>STOP
          </button>
        </div>
      </div>
      )
    };
    return content;
  };

//removes from view
  removeSong(){
    this.props.removeCurrentSong();
  }

//the toggle functions check to see whether or not to update the box to true or false.
//it changes the boolean value, passing key, titile, and the booleans for each box.
  toggleBox1(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box1)
    if(this.props.songs[id].box1 === false) {
      //this.props.toggleGetFalse1();
      this.props.box1True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box1 === true) {
      this.props.box1False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
      // this.props.toggleGetTrue1();
    };
  }

  toggleBox2(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box2)
    if(this.props.songs[id].box2 === false) {
      this.props.box2True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box2 === true) {
      this.props.box2False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    };
  }

  toggleBox3(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box3)
    if(this.props.songs[id].box3 === false) {
      this.props.box3True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box3 === true) {
      this.props.box3False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    };
  }

  toggleBox4(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box4)
    if(this.props.songs[id].box4 === false) {
      this.props.box4True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box4 === true) {
      this.props.box4False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    };
  }

  toggleBox5(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box5)
    if(this.props.songs[id].box5 === false) {
      this.props.box5True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box5 === true) {
      this.props.box5False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    };
  }

  toggleBox6(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box6)
    if(this.props.songs[id].box6 === false) {
      this.props.box6True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box6 === true) {
      this.props.box6False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    };
  }

  toggleBox7(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box7)
    if(this.props.songs[id].box7 === false) {
      this.props.box7True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box7 === true) {
      this.props.box7False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    };
  }

  toggleBox8(id, title, b1, b2, b3, b4, b5, b6, b7, b8){
    console.log(this.props.songs.box8)
    if(this.props.songs[id].box8 === false) {
      this.props.box8True(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    } else if(this.props.songs[id].box8 === true) {
      this.props.box8False(id, title, b1, b2, b3, b4, b5, b6, b7, b8);
    };
  }

  render() {
    //console.log(this.props.song)
    return(
      <div>
        {this.renderSelectedSong()}
      </div>
    );
  };
}

export default EditSong;
