import styled from "styled-components";

// https://youtu.be/O5nUpvU_Rxg
// https://www.youtube.com/watch?v=O5nUpvU_Rxg
// https://www.youtube.com/watch?v=O5nUpvU_Rxg&t=659s

// fCHUeASiayY

/* 3rd Party Library ---------------------------*/
import React from "react";
import YouTube from "react-youtube";

class HairVideo extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target);
    }

    render() {
        const opts = {
            height: "390",
            width: "640",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        const { videoId } = this.props;
        return (
            <YouTube
                videoId="O5nUpvU_Rxg"
                opts={opts}
                onReady={this.videoOnReady}
            />
        );
    }
}

class HairVideo1 extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target);
    }

    render() {
        const opts = {
            height: "390",
            width: "640",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        const { videoId } = this.props;
        return (
            <YouTube
                videoId="fCHUeASiayY"
                opts={opts}
                onReady={this.videoOnReady}
            />
        );
    }
}

export default YouTube;

const YouTubeStyled = styled.div``;
