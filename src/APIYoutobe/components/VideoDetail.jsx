import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loadings .....</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe style={{minWidth:"277px",minHeight:"50%"}} src={videoSrc} title="video player" width="100%" height="400px" ></iframe>
      </div>
      {/* <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div> */}
    </div>
  )
}

export default VideoDetail