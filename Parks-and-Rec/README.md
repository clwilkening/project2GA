#Parks and Rec. CRUD Web App

###Project 2 General Assembly - Chris Wilkening

[Experience My Web App Here](https://build-uyopztecnr.now.sh)

![An image of the application](http://i.imgur.com/nrpFkYJ.png)

####Technologies

To make this application, I used React, Javascript, and Bootstrap. I incorporated a Firebase back end, axios, and a fun Ron Swanson API. I also used Finale Music and Logic to write the individual sound files.

Take a look:

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
            <div className="row main">
                <Home
                  songs={this.state.songs}
                  getSongs={this.getSongs}
                  setSongState={this.setSongState}
                  setEditSongState={this.setEditSongState}
                  currentEditSong={this.state.currentEditSong}
                  setEditFalse={this.setEditFalse}
                  setCurrentSong={this.setCurrentSong}
                  removeCurrentSong={this.removeCurrentSong}
                />  ```

####My Approach

I initially started with an idea an drew aspects of the plan on a whiteboard. Once I knew what direction to go in, I created a complete wireframe of the application. The wireframe goes through the user stories. I then added the users stores to a Trello board.

[Wireframe](https://drive.google.com/drive/folders/0ByyiNgER-zrMU2ZLWC15eExRc0k?usp=sharing) 
[Trello Board](https://trello.com/b/02S9WJqv/parks-and-rec)

My approach to coding was to follow the steps in my Trello board. I created one aspect of a component at a time, and didn't move on until it had proper functionality.

####For the Future

I would like to incorporate React Router to have a separate page to edit a song. I'd also like to give users the option to choose from different tv shows, artists, or genres. 

#####Disclaimer
I do not own any rights to the content from Park and Rec. This was intended for educational purposes.

Written by Chris Wilkening.
