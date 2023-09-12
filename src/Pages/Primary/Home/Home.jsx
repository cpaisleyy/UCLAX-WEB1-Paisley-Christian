import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
// import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";
import Video from "./Video";
import HeroImage from "./Slideshow/img/blk women hairtsyle blue bckg.jpg";

const Home = () => {
    return (
        <HomeStyled className="Home">
            <h1>Home</h1>
            <img src={HeroImage} alt="" />
            <Inset>
                <Tabbed />
            </Inset>
            <h4>Hair Care Tips!</h4>
            <h6>
                Unlock the secrets to healthy, beautiful hair with insights from
                our trusted brand partners. Discover easy and effective tips
                that will transform your hair care routine. Get ready to embrace
                the hair you love, effortlessly.
            </h6>
            <Video videoId="O5nUpvU_Rxg" />
            <h6>
                Explore a world of styling possibilities for your natural hair
                with guidance from our esteemed brand partners. Get inspired,
                express yourself, and make every day a great hair day. Welcome
                to a realm of endless style possibilities!
            </h6>
            <Video videoId="fCHUeASiayY" />
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }

    h4 {
        font-size: 30px;
        text-align: center;
    }

    h6 {
        font-size: 18px;
        text-align: center;
        padding-left: 400px;
        padding-right: 400px;
        padding-top: 30px;
    }

    img {
        max-width: 100%;
    }
`;
