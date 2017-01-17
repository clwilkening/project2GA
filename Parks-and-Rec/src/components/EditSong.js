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
    this.toggleBox1 = this.toggleBox1.bind(this)
    this.toggleBox2 = this.toggleBox2.bind(this)
    this.toggleBox3 = this.toggleBox3.bind(this)
    this.toggleBox4 = this.toggleBox4.bind(this)
    this.toggleBox5 = this.toggleBox5.bind(this)
    this.toggleBox6 = this.toggleBox6.bind(this)
    this.toggleBox7 = this.toggleBox7.bind(this)
    this.toggleBox8 = this.toggleBox8.bind(this)
    this.renderSelectedSong = this.renderSelectedSong.bind(this)
    this.removeSong = this.removeSong.bind(this)
    this.playAudio = this.playAudio.bind(this)
    this.stopAudio = this.stopAudio.bind(this)
  }

  //getSongTitle(){
  //  Object.keys(this.props.title)
  //    .map((key) => <h4 key={key}>{key.title} />)
  //  })

  //I need to object.keys on the clicked song name in order to render the divs with an appropriate key.

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
    }
    if(this.props.songs[this.props.currentSong].box2 === true){
      audio2.currentTime=0;
      audio2.play();
    }
    if(this.props.songs[this.props.currentSong].box3 === true){
      audio3.currentTime=0;
      audio3.play();
    }if(this.props.songs[this.props.currentSong].box4 === true){
      audio4.currentTime=0;
      audio4.play();
    }
    if(this.props.songs[this.props.currentSong].box5 === true){
      audio5.currentTime=0;
      audio5.play();
    }
    if(this.props.songs[this.props.currentSong].box6 === true){
      audio6.currentTime=0;
      audio6.play();
    }
    if(this.props.songs[this.props.currentSong].box7 === true){
      audio7.currentTime=0;
      audio7.play();
    }
    if(this.props.songs[this.props.currentSong].box8 === true){
      audio8.currentTime=0;
      audio8.play();
    }
  }

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
    }
    this.props.toggleAudioStateFalse();
  }

  renderSelectedSong(){
    let content;
    if(this.props.currentSong) {
      let currentSong = this.props.songs[this.props.currentSong];
      console.log(currentSong.box2)
      content = (
        <div className="row">
          <div>
          {currentSong.title}<button onClick={() => this.props.removeCurrentSong()}>&times; Hide</button>
          </div>
          <div className="box box-container">
            <div>Melody</div>
            <div
              className="box box-1"
              onClick={() => this.toggleBox1(this.props.currentSong, currentSong.title,
                currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
            ><audio ref="audio1" src={ParksAndRecOboe} preload="auto"></audio>
             1: Oboe
            </div>
            <div
              className="box box-2"
              onClick={() => this.toggleBox2(this.props.currentSong, currentSong.title,
                currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
            ><audio ref="audio2" src={ParksAndRecTpt} preload="auto"></audio>
              2: Trumpet
            </div>
            <div>Accompaniment</div>
            <div
              className="box box-3"
              onClick={() => this.toggleBox3(this.props.currentSong, currentSong.title,
                currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
            ><audio ref="audio3" src={ParksAndRecViolin} preload="auto"></audio>
              3: Violin
            </div>
            <div
              className="box box-4"
              onClick={() => this.toggleBox4(this.props.currentSong, currentSong.title,
                currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
            ><audio ref="audio4" src={ParksAndRecViola} preload="auto"></audio>
             4: Viola
          </div>
          <div>Bass</div>
          <div
            className="box box-5"
            onClick={() => this.toggleBox5(this.props.currentSong, currentSong.title,
              currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
          ><audio ref="audio5" src={ParksAndRecCello} preload="auto"></audio>
            5: Cello
          </div>
          <div
            className="box box-6"
            onClick={() => this.toggleBox6(this.props.currentSong, currentSong.title,
              currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
          ><audio ref="audio6" src={ParksAndRecBass} preload="auto"></audio>
            6: Bass
          </div>
          <div>Percussion</div>
          <div
            className="box box-7"
            onClick={() => this.toggleBox7(this.props.currentSong, currentSong.title,
              currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
          ><audio ref="audio7" src={ParksAndRecSnare} preload="auto"></audio>
            7: Snare
          </div>
          <div
            className="box box-8"
            onClick={() => this.toggleBox8(this.props.currentSong, currentSong.title,
              currentSong.box1, currentSong.box2, currentSong.box3, currentSong.box4, currentSong.box5, currentSong.box6, currentSong.box7, currentSong.box8)}
          ><audio ref="audio8" src={ParksAndRecKit} preload="auto"></audio>
            8: Drums
          </div>
          <button onClick={() => this.playAudio()}>
            PLAY
          </button>
          <button onClick={() => this.stopAudio()}>
            PAUSE
          </button>
        </div>
      </div>
      )
    }
    return content;
  }

  removeSong(){
    this.props.removeCurrentSong();
  }

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
    console.log(this.props.songs.box4)
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
    )
  };
}

export default EditSong;
