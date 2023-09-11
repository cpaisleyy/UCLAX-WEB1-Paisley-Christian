import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";
import YouTube from "./YouTube/YouTube";

const Home = () => {
    return (
        <HomeStyled className="Home">
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
            </Inset>
            <h1>Hair Care Tips!</h1>Hair
            <YouTube videoId="O5nUpvU_Rxg" />
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
