import React, {Component} from 'react';
//import axios from 'axios';

// const songs = ({ songs }) =>(
//   <div>
//     <h4>{songs}</h4>
//   </div>
// )
class EditSong extends Component {
  constructor(props) {
    super(props);
    this.toggleBox1 = this.toggleBox1.bind(this)
  }

  // componentDidMount(){
  //   this.getSongs();
  //   this.setState({
  //     get: true,
  //   })
  //   // const title = {...this.props.song};
  //   // //return title;
  //   // console.log(title.title)
  //   // const songTitle = title.title;
  //   // return songTitle;
  // }

  // getSongs() {
  //   //console.log(this.state)
  //   axios({
  //     url: `/songs/${this.params.id}.json`,
  //     baseURL: 'https://parks-and-rec-82533.firebaseio.com/',
  //     method: "GET",
  //   }).then((response) => {
  //     console.log(response.data)
  //     //console.log(response)
  //    // this.renderSongs(); <-- didn't need it.

  //   }).catch((error) =>{
  //     console.log(error);
  //   });
  // }

  //getSongTitle(){
  //  Object.keys(this.props.title)
  //    .map((key) => <h4 key={key}>{key.title} />)
  //  })

  //I need to object.keys on the clicked song name in order to render the divs with an appropriate key.

  renderBoxes(){

  }

  toggleBox1(id){
    if(this.props.b1 === true) { //add a toggle function to switch to false
      this.props.toggleGetFalse1();
      this.props.box1False(id);
    } else {
      this.props.toggleGetTrue1();
      this.props.box1True(id);
    };
  }

  render() {
    console.log(this.props.song)
      return(
        <div>
        <div>
      </div>
      <div className="box-container">
        <div
          className="box box-1"
          onClick={() => this.toggleBox1(this.props.id.id)}
        >
            I am a box
        </div>
        <div className="box box-2">
          I am also a box
        </div>
        <div className="box box-3">
          I am the best box
        </div>
      </div>
      </div>
      )
    };
  }

export default EditSong;
