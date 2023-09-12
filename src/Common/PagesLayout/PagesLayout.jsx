import styled from "styled-components";
import { Outlet } from "react-router-dom";

/* Components ---------------------------*/
import Header from "./Header/Header.jsx";
import Footer from "./Footer.jsx";

const PagesLayout = () => {
    return (
        <PagesLayoutStyled className="PagesLayout">
            <Header />
            <Outlet />
            <Footer />
        </PagesLayoutStyled>
    );
};

export default PagesLayout;

const PagesLayoutStyled = styled.div`
    main {
        background-color: #f8f6ed;
        min-height: 600px;
        padding: 0px 0px 30px;
        .Inset {
            padding: 50px 10px;
        }
    }
`;
