import React, { Component } from 'react';
import YTSearch  from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoPlayer from './video_player';
import VideoList from './video_list';


const API_KEY = 'AIzaSyBXr8mchTBNQWPCbGUU89Hri3pBxGGJSN0';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos : []}

    YTSearch({ key: API_KEY, term: 'aix-en-provence'}, (data) => {
      this.setState({ videos : data});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer video={this.state.videos[0]}/>
        <VideoList video={this.state.videos}/>
      </div>
    );
  }

}

export default App;
