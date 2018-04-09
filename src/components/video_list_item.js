import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div claaaName="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body"> 
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;


// const VideoListItem = (props) => {
//     const video = props.video
// is the same as 
// const VideoListItem = ({ video }) => {
//     return <li>Video</li>;
// }

// <li onClick={() => onVideoSelect(video)} className="list-group-item">
//When an li is clicked do this