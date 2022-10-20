import React from "react";

import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class VideoTrailer extends React.Component {
  state = {
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSubmit(this.props.nombreYoutobe);
  }
  onSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className=" container">
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

export default VideoTrailer;
