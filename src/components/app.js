import React, { Component } from 'react';
import YTSearch  from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoPlayer from './video_player';
import VideoList from './video_list';


const API_KEY = 'AIzaSyBXr8mchTBNQWPCbGUU89Hri3pBxGGJSN0';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos : [], selectedvideo: null}

    this.SearchOnYoutube('aix-en-provence');
  }

  SearchOnYoutube( text ){
    YTSearch({ key: API_KEY, term: text}, (data) => {
      this.setState({ videos : data, selectedvideo: data[0]});
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTextChange={(text) => this.SearchOnYoutube(text)}/>

        <VideoPlayer video={this.state.selectedvideo}/>

        <VideoList
            video={this.state.videos}
            onVideoSelected={(video_selected) => this.setState( {selectedvideo: video_selected})}
          />
      </div>
    );
  }

}

export default App;
