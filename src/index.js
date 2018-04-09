import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item'
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDeG-cUkZL9-KmUhvvzCeTVA2lShVTMJlA';



// Create new component. This component should prpduce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

    this.videoSearch('surfboards')

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos: data }); *Only works when key and value have same name, ES6
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
// passing videos from videolist in <VideoList videosç>
// Take this components generated HTML and put it on the page/in the DOM

