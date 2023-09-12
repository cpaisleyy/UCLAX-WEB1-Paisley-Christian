import YouTube from "react-youtube";
import styled from "styled-components";

const Video = ({ videoId }) => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <VideoStyled className="Video">
            <YouTube videoId={videoId} opts={opts} />
        </VideoStyled>
    );
};

export default Video;

const VideoStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0px;
`;
